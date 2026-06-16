import Navbar from "../components/Navbar";
import { ArrowRight, BarChart3, Brain, MapPinned } from "lucide-react";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 pt-32">
          <div className="bg-blue-500/20 border border-blue-500 px-4 py-2 rounded-full mb-6">
            AI Powered Civic Intelligence
          </div>

          <h1 className="text-6xl md:text-7xl font-bold max-w-5xl leading-tight">
            Understand Civic Problems With
            <span className="text-blue-400"> AI & Analytics</span>
          </h1>

          <p className="text-gray-300 text-xl mt-8 max-w-3xl">
            Analyze complaints, cluster similar issues, visualize trends,
            and help cities make data-driven decisions.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-blue-600 px-7 py-4 rounded-xl flex items-center gap-2 hover:bg-blue-700">
              Get Started <ArrowRight size={18} />
            </button>

            <button className="border border-gray-600 px-7 py-4 rounded-xl hover:bg-white/10">
              Learn More
            </button>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid md:grid-cols-3 gap-8 px-10 mt-28 pb-20">

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <Brain className="text-blue-400 mb-5" size={40} />
            <h2 className="text-2xl font-bold mb-3">
              AI Analysis
            </h2>
            <p className="text-gray-300">
              Automatically classify and analyze complaints using machine learning.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <BarChart3 className="text-blue-400 mb-5" size={40} />
            <h2 className="text-2xl font-bold mb-3">
              Smart Analytics
            </h2>
            <p className="text-gray-300">
              Generate insights and track issue trends with interactive dashboards.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <MapPinned className="text-blue-400 mb-5" size={40} />
            <h2 className="text-2xl font-bold mb-3">
              Geo Visualization
            </h2>
            <p className="text-gray-300">
              Locate and visualize civic issues on maps for better decisions.
            </p>
          </div>

        </section>
      </div>
    </>
  );
}

export default Home;