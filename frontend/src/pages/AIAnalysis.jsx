import { useState } from "react";
import AIResultCard from "../components/AIResultCard";

function AIAnalysis() {
  const [complaint, setComplaint] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const analysisResult = {
    category: "Road Maintenance",
    sentiment: "Negative",
    priority: "High",
    cluster: "Cluster 4",
    summary:
      "Multiple complaints indicate severe pothole issues affecting traffic and commuter safety in this area.",
  };

  const handleAnalyze = () => {
    if (complaint.trim() === "") return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          AI Complaint Analysis
        </h1>

        <p className="text-gray-400 mb-8">
          Analyze complaints using AI-powered categorization,
          sentiment detection, prioritization, and clustering.
        </p>

        <div className="bg-slate-800 p-6 rounded-3xl">

          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Enter citizen complaint here..."
            className="w-full p-4 rounded-2xl min-h-[180px] bg-slate-700 text-white outline-none"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Complaint"}
          </button>

        </div>

        {loading && (
          <div className="mt-8 bg-slate-800 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-semibold">
              AI Processing...
            </h2>

            <p className="text-gray-400 mt-2">
              Categorizing complaint, detecting sentiment,
              assigning priority and clustering.
            </p>
          </div>
        )}

        {showResult && !loading && (

          <>
            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="bg-slate-800 p-6 rounded-3xl">
                <h3 className="text-gray-400 mb-2">
                  Category
                </h3>

                <p className="text-2xl font-bold">
                  {analysisResult.category}
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-3xl">
                <h3 className="text-gray-400 mb-2">
                  Sentiment
                </h3>

                <p className="text-2xl font-bold text-red-400">
                  {analysisResult.sentiment}
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-3xl">
                <h3 className="text-gray-400 mb-2">
                  Priority
                </h3>

                <p className="text-2xl font-bold text-yellow-400">
                  {analysisResult.priority}
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-3xl">
                <h3 className="text-gray-400 mb-2">
                  Cluster
                </h3>

                <p className="text-2xl font-bold text-blue-400">
                  {analysisResult.cluster}
                </p>
              </div>

            </div>

            <div className="bg-slate-800 p-6 rounded-3xl mt-6">
              <h2 className="text-xl font-bold mb-3">
                AI Summary
              </h2>

              <p className="text-gray-300">
                {analysisResult.summary}
              </p>
            </div>

          </>
        )}

      </div>

    </div>
  );
}

export default AIAnalysis;