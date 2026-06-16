import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          CivicLens AI
        </h1>

        <p className="text-xl text-gray-700">
          AI-powered civic issue analysis platform
        </p>
      </div>
    </>
  );
}

export default Home;