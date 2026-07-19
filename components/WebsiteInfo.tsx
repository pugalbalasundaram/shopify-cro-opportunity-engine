type Props = {
  data: any;
};

export default function WebsiteInfo({ data }: Props) {
  if (!data) return null;

  return (
    <div className="bg-slate-800 rounded-2xl shadow-xl p-6 mb-8 border border-slate-700">

      <h2 className="text-2xl font-bold text-white mb-6">
        🌐 Website Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-slate-900 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Title</p>

          <p className="text-white mt-2">
            {data.title || "N/A"}
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-4">
          <p className="text-gray-400 text-sm">
            Meta Description
          </p>

          <p className="text-white mt-2">
            {data.meta_description || "N/A"}
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-4">
          <p className="text-gray-400 text-sm">
            Headings Found
          </p>

          <h2 className="text-3xl font-bold text-cyan-400 mt-2">
            {data.headings?.length || 0}
          </h2>
        </div>

        <div className="bg-slate-900 rounded-xl p-4">
          <p className="text-gray-400 text-sm">
            Links Found
          </p>

          <h2 className="text-3xl font-bold text-green-400 mt-2">
            {data.links?.length || 0}
          </h2>
        </div>

      </div>

    </div>
  );
}