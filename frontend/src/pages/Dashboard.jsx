import Sidebar from "../components/Sidebar";
import AnalyticsChart from "../components/AnalyticsChart";
import RecentComplaints from "../components/RecentComplaints";

function Dashboard() {
  return (
    <div className="flex bg-slate-900 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold">
            CivicLens AI Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Real-time civic intelligence and complaint analytics platform
          </p>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 rounded-3xl p-8 mb-8 shadow-xl">

          <h2 className="text-3xl font-bold">
            Smart City Monitoring Center
          </h2>

          <p className="mt-3 text-blue-100 max-w-3xl">
            Track complaints, identify emerging civic issues,
            analyze citizen sentiment, discover AI clusters,
            and support data-driven governance.
          </p>

        </div>

        {/* KPI Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-3xl shadow-lg hover:scale-105 transition">
            <p className="text-blue-100 text-lg">
              📋 Total Complaints
            </p>

            <h2 className="text-5xl font-bold mt-4">
              2431
            </h2>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-3xl shadow-lg hover:scale-105 transition">
            <p className="text-red-100 text-lg">
              🚨 Open Issues
            </p>

            <h2 className="text-5xl font-bold mt-4">
              453
            </h2>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-3xl shadow-lg hover:scale-105 transition">
            <p className="text-green-100 text-lg">
              ✅ Resolved Issues
            </p>

            <h2 className="text-5xl font-bold mt-4">
              1978
            </h2>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-3xl shadow-lg hover:scale-105 transition">
            <p className="text-purple-100 text-lg">
              🤖 AI Clusters
            </p>

            <h2 className="text-5xl font-bold mt-4">
              18
            </h2>
          </div>

        </div>

        {/* Analytics Section */}
        <div className="mt-10 bg-slate-800 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-2">
            Complaint Trends
          </h2>

          <p className="text-gray-400 mb-6">
            Monthly complaint volume and issue distribution
          </p>

          <AnalyticsChart />

        </div>

        {/* Recent Complaints */}
        <div className="mt-10">
          <RecentComplaints />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;