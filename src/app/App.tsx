import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbfff8] text-[#07110d] selection:bg-[#9dffd0]/60 selection:text-[#07110d]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
