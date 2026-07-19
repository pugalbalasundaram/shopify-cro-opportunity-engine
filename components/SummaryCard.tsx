type Props = {
  website: string;
  total: number;
  high: number;
  medium: number;
  score: string;
};

export default function SummaryCard({
  website,
  total,
  high,
  medium,
  score,
}: Props) {
  return (
    <div className="grid md:grid-cols-5 gap-5 mb-10">

      {/* Website */}
      <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-all">
        <p className="text-gray-400 text-sm">🌐 Website</p>

        <h2 className="text-lg font-bold text-white mt-2 break-words">
          {website}
        </h2>
      </div>

      {/* Total Issues */}
      <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-all">
        <p className="text-gray-400 text-sm">📋 Issues Found</p>

        <h2 className="text-4xl font-bold text-white mt-2">
          {total}
        </h2>
      </div>

      {/* High Priority */}
      <div className="bg-red-600 rounded-xl p-6 shadow-lg hover:scale-105 transition-all">
        <p className="text-sm text-red-100">
          🔴 High Priority
        </p>

        <h2 className="text-4xl font-bold text-white mt-2">
          {high}
        </h2>
      </div>

      {/* Medium Priority */}
      <div className="bg-yellow-500 rounded-xl p-6 shadow-lg hover:scale-105 transition-all">
        <p className="text-sm text-black">
          🟡 Medium Priority
        </p>

        <h2 className="text-4xl font-bold text-black mt-2">
          {medium}
        </h2>
      </div>

      {/* CRO Score */}
      <div className="bg-green-600 rounded-xl p-6 shadow-lg hover:scale-105 transition-all">
        <p className="text-sm text-green-100">
          ⭐ CRO Score
        </p>

        <h2 className="text-4xl font-bold text-white mt-2">
          {score}/10
        </h2>
      </div>

    </div>
  );
}