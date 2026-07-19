"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

type Props = {
  high: number;
  medium: number;
  low: number;
};

export default function PriorityChart({
  high,
  medium,
  low,
}: Props) {

  const data = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        data: [high, medium, low],
        backgroundColor: [
          "#ef4444",
          "#facc15",
          "#22c55e",
        ],
      },
    ],
  };

  return (
    <div className="bg-slate-800 rounded-2xl shadow-xl p-6 mb-8">

      <h2 className="text-2xl font-bold mb-6">
        📊 Issue Distribution
      </h2>

      <div className="max-w-sm mx-auto">
        <Doughnut data={data} />
      </div>

    </div>
  );
}