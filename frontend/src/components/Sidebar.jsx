import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const navItem =
    "p-4 rounded-2xl font-medium transition-all duration-300";

  const active =
    "bg-blue-600 shadow-lg";

  const inactive =
    "bg-slate-800 hover:bg-slate-700";

  return (
    <div className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 p-6 flex flex-col">

      {/* Logo */}
      <div className="mb-10">

        <h1 className="text-3xl font-bold text-white">
          🏙 CivicLens AI
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Smart Civic Intelligence Platform
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">

        <Link
          to="/"
          className={`${navItem} ${
            location.pathname === "/" ? active : inactive
          }`}
        >
          🏠 Home
        </Link>

        <Link
          to="/dashboard"
          className={`${navItem} ${
            location.pathname === "/dashboard"
              ? active
              : inactive
          }`}
        >
          📊 Dashboard
        </Link>

        <Link
          to="/analysis"
          className={`${navItem} ${
            location.pathname === "/analysis"
              ? active
              : inactive
          }`}
        >
          🤖 AI Analysis
        </Link>

        <Link
          to="/submit"
          className={`${navItem} ${
            location.pathname === "/submit"
              ? active
              : inactive
          }`}
        >
          ➕ Submit Complaint
        </Link>

        <Link
          to="/complaints"
          className={`${navItem} ${
            location.pathname === "/complaints"
              ? active
              : inactive
          }`}
        >
          📋 Complaints
        </Link>

        <Link
          to="/heatmap"
          className={`${navItem} ${
            location.pathname === "/heatmap"
              ? active
              : inactive
          }`}
        >
          🗺 Heat Map
        </Link>

      </nav>

      {/* Footer */}
      <div className="mt-auto">

        <div className="bg-slate-800 rounded-2xl p-5">

          <p className="text-gray-400 text-sm">
            Version
          </p>

          <p className="font-semibold mt-1">
            CivicLens AI v1.0
          </p>

          <div className="mt-4 text-sm text-green-400">
            ● System Online
          </div>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;