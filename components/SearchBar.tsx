type SearchBarProps = {
  url: string;
  setUrl: (value: string) => void;
  analyze: () => void;
  loading: boolean;
};

export default function SearchBar({
  url,
  setUrl,
  analyze,
  loading,
}: SearchBarProps) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">
        Analyze Shopify Store
      </h2>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="https://gymshark.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 rounded-lg border border-gray-600 bg-slate-900 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={analyze}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:bg-gray-500"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>
    </div>
  );
}