import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0c] text-[#e8f0ec] selection:bg-[#22c97e]/25 selection:text-[#22c97e]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
