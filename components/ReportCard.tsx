type ReportProps = {
  item: any;
};

export default function ReportCard({ item }: ReportProps) {
  const priority = item["Priority Score"];

  let badgeColor = "bg-green-500";
  let badgeText = "Low";

  if (priority >= 8) {
    badgeColor = "bg-red-500";
    badgeText = "High";
  } else if (priority >= 5) {
    badgeColor = "bg-yellow-500";
    badgeText = "Medium";
  }

  return (
    <div className="bg-slate-800 rounded-2xl shadow-xl p-6 mb-6 border border-slate-700 hover:border-blue-500 transition-all">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-2xl font-bold text-white">
          {item.Issue}
        </h2>

        <span
          className={`${badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold`}
        >
          {badgeText} • {priority}
        </span>

      </div>

      <div className="space-y-3">

        <p className="text-gray-300">
          <strong className="text-white">Why:</strong>{" "}
          {item["Why it matters"]}
        </p>

        <p className="text-gray-300">
          <strong className="text-white">Impact:</strong>{" "}
          {item.Impact}
        </p>

        <p className="text-gray-300">
          <strong className="text-white">Confidence:</strong>{" "}
          {item.Confidence}
        </p>

        <p className="text-gray-300">
          <strong className="text-white">Effort:</strong>{" "}
          {item.Effort}
        </p>

      </div>

      <hr className="my-5 border-slate-600" />

      <h3 className="text-green-400 font-semibold mb-2">
        💡 Recommendation
      </h3>

      <p className="text-gray-300 leading-7">
        {item.Recommendation}
      </p>

    </div>
  );
}