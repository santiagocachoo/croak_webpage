import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
