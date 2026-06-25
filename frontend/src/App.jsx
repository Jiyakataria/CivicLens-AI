import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AIAnalysis from "./pages/AIAnalysis";
import Complaints from "./pages/Complaints";
import SubmitComplaint from "./pages/SubmitComplaint";
import HeatMap from "./components/HeatMap";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* AI Analysis */}
        <Route path="/analysis" element={<AIAnalysis />} />

        {/* Complaints List */}
        <Route path="/complaints" element={<Complaints />} />

        {/* Submit Complaint */}
        <Route path="/submit" element={<SubmitComplaint />} />

        {/* Heat Map */}
        <Route path="/heatmap" element={<HeatMap />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;