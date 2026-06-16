import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AIAnalysis from "./pages/AIAnalysis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analysis" element={<AIAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;