import Navbar from "../components/Navbar";
import {
  ArrowRight,
  BarChart3,
  Brain,
  MapPinned,
} from "lucide-react";

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
            <span className="text-blue-400">
              {" "}AI & Analytics
            </span>
          </h1>

          <p className="text-gray-300 text-xl mt-8 max-w-3xl">
            Analyze complaints, cluster similar issues,
            visualize trends, and help cities make
            data-driven decisions.
          </p>

          <div className="flex flex-col md:flex-row gap-5 mt-10">

            <button className="bg-blue-600 px-7 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="border border-gray-600 px-7 py-4 rounded-xl hover:bg-white/10 transition">
              Learn More
            </button>

          </div>

        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-8 px-10 mt-28">

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:scale-105 transition">

            <Brain
              className="text-blue-400 mb-5"
              size={40}
            />

            <h2 className="text-2xl font-bold mb-3">
              AI Analysis
            </h2>

            <p className="text-gray-300">
              Automatically classify and analyze
              complaints using machine learning.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:scale-105 transition">

            <BarChart3
              className="text-blue-400 mb-5"
              size={40}
            />

            <h2 className="text-2xl font-bold mb-3">
              Smart Analytics
            </h2>

            <p className="text-gray-300">
              Generate insights and track issue trends
              with interactive dashboards.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:scale-105 transition">

            <MapPinned
              className="text-blue-400 mb-5"
              size={40}
            />

            <h2 className="text-2xl font-bold mb-3">
              Geo Visualization
            </h2>

            <p className="text-gray-300">
              Locate and visualize civic issues on maps
              for better decisions.
            </p>

          </div>

        </section>

        {/* Statistics */}
        <section className="px-10 py-24">

          <h2 className="text-4xl font-bold text-center mb-14">
            Civic Impact Overview
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:scale-105 transition">
              <h3 className="text-5xl font-bold text-blue-400">
                2431
              </h3>

              <p className="mt-3 text-gray-300">
                Total Complaints
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:scale-105 transition">
              <h3 className="text-5xl font-bold text-green-400">
                1978
              </h3>

              <p className="mt-3 text-gray-300">
                Resolved Issues
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:scale-105 transition">
              <h3 className="text-5xl font-bold text-purple-400">
                18
              </h3>

              <p className="mt-3 text-gray-300">
                AI Clusters
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:scale-105 transition">
              <h3 className="text-5xl font-bold text-yellow-400">
                92%
              </h3>

              <p className="mt-3 text-gray-300">
                Resolution Rate
              </p>
            </div>

          </div>

        </section>

        {/* How It Works */}
        <section className="px-10 py-24">

          <h2 className="text-4xl font-bold text-center mb-14">
            How CivicLens AI Works
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">

            <div className="bg-white/10 p-6 rounded-3xl">
              <h3 className="text-2xl font-bold">1</h3>
              <p className="mt-3">
                Citizen submits complaint
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-3xl">
              <h3 className="text-2xl font-bold">2</h3>
              <p className="mt-3">
                AI analyzes complaint
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-3xl">
              <h3 className="text-2xl font-bold">3</h3>
              <p className="mt-3">
                Similar issues clustered
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-3xl">
              <h3 className="text-2xl font-bold">4</h3>
              <p className="mt-3">
                Trends detected
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-3xl">
              <h3 className="text-2xl font-bold">5</h3>
              <p className="mt-3">
                Authorities take action
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="px-10 pb-24">

          <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold">
              Ready to Explore Civic Intelligence?
            </h2>

            <p className="mt-4 text-blue-100">
              Analyze complaints, detect trends,
              and build smarter cities using AI.
            </p>

            <button className="mt-8 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Open Dashboard
            </button>

          </div>

        </section>

      </div>
    </>
  );
}

export default Home;