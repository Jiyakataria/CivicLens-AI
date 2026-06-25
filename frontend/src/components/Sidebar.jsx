import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-slate-950 text-white p-6 border-r border-slate-800 flex flex-col">

      <h1 className="text-3xl font-bold mb-10 text-blue-400">
        CivicLens AI
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          to="/"
          className="bg-slate-800 hover:bg-blue-600 transition-all duration-300 p-4 rounded-2xl font-medium"
        >
          🏠 Home
        </Link>

        <Link
          to="/dashboard"
          className="bg-slate-800 hover:bg-blue-600 transition-all duration-300 p-4 rounded-2xl font-medium"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/analysis"
          className="bg-slate-800 hover:bg-blue-600 transition-all duration-300 p-4 rounded-2xl font-medium"
        >
          🤖 AI Analysis
        </Link>

        <Link
          to="/complaints"
          className="bg-slate-800 hover:bg-blue-600 transition-all duration-300 p-4 rounded-2xl font-medium"
        >
          📝 Complaints
        </Link>

        <Link
          to="/heatmap"
          className="bg-slate-800 hover:bg-blue-600 transition-all duration-300 p-4 rounded-2xl font-medium"
        >
          🗺️ Heat Map
        </Link>

        <Link
          to="/settings"
          className="bg-slate-800 hover:bg-blue-600 transition-all duration-300 p-4 rounded-2xl font-medium"
        >
          ⚙️ Settings
        </Link>

      </nav>

      <div className="mt-auto pt-10">
        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
          <p className="text-sm text-gray-400">
            Civic Intelligence Platform
          </p>

          <p className="mt-2 font-semibold text-blue-400">
            Smart Complaint Analytics
          </p>

          <p className="text-xs text-gray-500 mt-2">
            AI • Analytics • Clustering • Mapping
          </p>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;