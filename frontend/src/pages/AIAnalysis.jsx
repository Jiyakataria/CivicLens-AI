import { useState } from "react";
import AIResultCard from "../components/AIResultCard";

function AIAnalysis() {
  const [complaint, setComplaint] = useState("");
  const [showResult, setShowResult] = useState(false);

  const dummyResult = {
    category: "Road Maintenance",
    sentiment: "Negative",
    priority: "High",
    cluster: "Cluster 4",
    summary:
      "Multiple complaints indicate severe pothole issues affecting traffic and commuter safety in this area.",
  };

  const handleAnalyze = () => {
    if (complaint.trim() === "") return;
    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">
          AI Complaint Analysis
        </h1>

        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Enter citizen complaint here..."
          className="w-full p-4 rounded-xl min-h-[180px] text-black"
        />

        <button
          onClick={handleAnalyze}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          Analyze Complaint
        </button>

        {showResult && (
          <AIResultCard result={dummyResult} />
        )}
      </div>
    </div>
  );
}

export default AIAnalysis;