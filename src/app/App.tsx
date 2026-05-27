import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0b1f15] selection:bg-[#c4e8d4] selection:text-[#0b7a4f]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
