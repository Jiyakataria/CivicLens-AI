import Sidebar from "../components/Sidebar";
import AnalyticsChart from "../components/AnalyticsChart";
import RecentComplaints from "../components/RecentComplaints";

function Dashboard() {
  return (
    <div className="flex bg-slate-900 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        {/* Welcome Banner */}
        <div className="bg-slate-800 rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold">
            CivicLens AI Monitoring Center
          </h2>

          <p className="text-gray-400 mt-2">
            Analyze citizen complaints, discover trends,
            identify critical civic issues, and support
            data-driven governance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-3xl shadow-lg">
            <h2 className="text-blue-100">
              Total Complaints
            </h2>

            <p className="text-5xl font-bold mt-4">
              2431
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-800 p-8 rounded-3xl shadow-lg">
            <h2 className="text-green-100">
              Resolved Issues
            </h2>

            <p className="text-5xl font-bold mt-4">
              1978
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-8 rounded-3xl shadow-lg">
            <h2 className="text-purple-100">
              AI Clusters
            </h2>

            <p className="text-5xl font-bold mt-4">
              18
            </p>
          </div>

        </div>

        {/* Analytics Chart */}
        <div className="mt-8">
          <AnalyticsChart />
        </div>

        {/* Recent Complaints */}
        <RecentComplaints />

      </div>
    </div>
  );
}

export default Dashboard;