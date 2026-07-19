"use client";

import { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

import SearchBar from "../components/SearchBar";
import SummaryCard from "../components/SummaryCard";
import ReportCard from "../components/ReportCard";
import Loading from "../components/Loading";
import WebsiteInfo from "../components/WebsiteInfo";
import PriorityChart from "../components/PriorityChart";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<any[]>([]);
  const [website, setWebsite] = useState("");
  const [websiteData, setWebsiteData] = useState<any>(null);

  const analyze = async () => {
    if (!url.trim()) {
      alert("Please enter a Shopify URL");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        {
          url,
        }
      );

      setReport(response.data.cro_report);
      setWebsite(response.data.website_data.title);
      setWebsiteData(response.data.website_data);

    } catch (err: any) {

      console.error(err);

      if (err.response) {
        alert(JSON.stringify(err.response.data));
      } else {
        alert("Unable to connect to backend.");
      }

    } finally {
      setLoading(false);
    }
  };

  // ============================
  // Dashboard Statistics
  // ============================

  const high = report.filter(
    (item) => item["Priority Score"] >= 8
  ).length;

  const medium = report.filter(
    (item) =>
      item["Priority Score"] >= 5 &&
      item["Priority Score"] < 8
  ).length;

  const low = report.filter(
    (item) => item["Priority Score"] < 5
  ).length;

  const averagePriority =
    report.length > 0
      ? report.reduce(
          (sum, item) => sum + item["Priority Score"],
          0
        ) / report.length
      : 0;

  const croScore = Math.max(
    0,
    10 - averagePriority
  ).toFixed(1);

  // ============================
  // Download PDF
  // ============================

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);

    doc.text(
      "Shopify CRO Opportunity Report",
      20,
      20
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    doc.text(`Website: ${website}`, 20, 40);

    doc.text(
      `Generated: ${new Date().toLocaleString()}`,
      20,
      50
    );

    doc.text(
      `CRO Score: ${croScore}/10`,
      20,
      60
    );

    doc.text(
      `Issues Found: ${report.length}`,
      20,
      70
    );

    doc.text(
      `High Priority: ${high}`,
      20,
      80
    );

    doc.text(
      `Medium Priority: ${medium}`,
      20,
      90
    );

    doc.line(20, 100, 190, 100);

    let y = 115;

    report.forEach((item, index) => {

      if (y > 260) {
        doc.addPage();
        y = 20;
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);

      doc.text(
        `${index + 1}. ${item.Issue}`,
        20,
        y
      );

      y += 8;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);

      doc.text(
        `Priority: ${item["Priority Score"]}`,
        25,
        y
      );

      y += 7;

      doc.text(
        `Impact: ${item.Impact}`,
        25,
        y
      );

      y += 7;

      doc.text(
        `Confidence: ${item.Confidence}`,
        25,
        y
      );

      y += 7;

      doc.text(
        `Effort: ${item.Effort}`,
        25,
        y
      );

      y += 7;

      doc.text(
        "Recommendation:",
        25,
        y
      );

      y += 7;

      doc.text(
        item.Recommendation,
        30,
        y,
        {
          maxWidth: 160,
        }
      );

      y += 22;

    });

    doc.save("Shopify_CRO_Report.pdf");

  };

  // ============================
  // Copy Report
  // ============================

  const copyReport = async () => {

    const text = report
      .map(
        (item, index) =>
          `${index + 1}. ${item.Issue}

Priority: ${item["Priority Score"]}

Impact: ${item.Impact}

Confidence: ${item.Confidence}

Effort: ${item.Effort}

Recommendation:
${item.Recommendation}

--------------------------------------`
      )
      .join("\n\n");

    await navigator.clipboard.writeText(text);

    alert("✅ Report copied successfully!");
  };
  return (
    <main className="min-h-screen bg-slate-900">
      <div className="max-w-screen-2xl mx-auto p-8">

        {/* Header */}
        <div className="text-center mb-12">

          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
             Shopify CRO Opportunity Engine
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            AI Powered Conversion Rate Optimization Dashboard
          </p>

        </div>

        {/* Search */}
        <SearchBar
          url={url}
          setUrl={setUrl}
          analyze={analyze}
          loading={loading}
        />

        {/* Loading */}
        {loading && <Loading />}

        {/* Results */}
        {!loading && report.length > 0 && (
          <>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-end gap-4 mb-8">

              <button
                onClick={copyReport}
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                📋 Copy Report
              </button>

              <button
                onClick={downloadPDF}
                className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                📥 Download PDF
              </button>

            </div>

            {/* Website Information */}
            <WebsiteInfo data={websiteData} />

            {/* Dashboard Summary */}
            <SummaryCard
              website={website}
              total={report.length}
              high={high}
              medium={medium}
              score={croScore}
            />

            {/* Charts */}
            <PriorityChart
              high={high}
              medium={medium}
              low={low}
            />

            {/* Report Cards */}
            <div className="space-y-6">

              {report.map((item, index) => (
                <ReportCard
                  key={index}
                  item={item}
                />
              ))}

            </div>

          </>
        )}

        {/* Empty State */}
        {!loading && report.length === 0 && (
          <div className="mt-16 text-center text-gray-500">

            <h2 className="text-3xl font-bold mb-3">
               Ready to Analyze
            </h2>

            <p className="text-lg">
              Enter a Shopify store URL above to generate an AI-powered CRO audit.
            </p>

          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 border-t border-slate-700 pt-8 text-center">

          <p className="text-gray-400">
            Built with ❤️ using
          </p>

          <p className="mt-2 text-cyan-400 font-semibold">
            Next.js • FastAPI • Playwright • Gemini AI
          </p>

          <p className="mt-4 text-sm text-gray-500">
            © 2026 Shopify CRO Opportunity Engine
          </p>

        </footer>

      </div>
    </main>
  );
}