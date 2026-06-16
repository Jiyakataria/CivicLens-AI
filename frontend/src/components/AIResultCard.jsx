function AIResultCard({ result }) {
  return (
    <div className="bg-slate-800 rounded-3xl p-8 mt-8 text-white">
      <h2 className="text-2xl font-bold mb-6">
        AI Analysis Results
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-700 p-5 rounded-2xl">
          <h3 className="text-gray-400">Category</h3>
          <p className="text-xl font-bold mt-2">
            {result.category}
          </p>
        </div>

        <div className="bg-slate-700 p-5 rounded-2xl">
          <h3 className="text-gray-400">Sentiment</h3>
          <p className="text-xl font-bold mt-2 text-red-400">
            {result.sentiment}
          </p>
        </div>

        <div className="bg-slate-700 p-5 rounded-2xl">
          <h3 className="text-gray-400">Priority</h3>
          <p className="text-xl font-bold mt-2 text-yellow-400">
            {result.priority}
          </p>
        </div>

        <div className="bg-slate-700 p-5 rounded-2xl">
          <h3 className="text-gray-400">Cluster ID</h3>
          <p className="text-xl font-bold mt-2">
            {result.cluster}
          </p>
        </div>
      </div>

      <div className="bg-slate-700 rounded-2xl p-5 mt-6">
        <h3 className="text-gray-400 mb-3">
          AI Summary
        </h3>

        <p>{result.summary}</p>
      </div>
    </div>
  );
}

export default AIResultCard;