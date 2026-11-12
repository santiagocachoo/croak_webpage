import { useLayoutEffect } from "react";
import { Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";

// Al entrar a otra página (no al usar atrás/adelante), empieza desde arriba,
// o en la sección que pidió el enlace con navigate("/", { state: { scrollTo: "id" } }).
function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType === "POP") return;
    const sectionId = (location.state as { scrollTo?: string } | null)?.scrollTo;
    const section = sectionId ? document.getElementById(sectionId) : null;
    if (section) {
      section.scrollIntoView({ behavior: "instant", block: "start" });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.key, location.state, navigationType]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0b1f15] selection:bg-[#c4e8d4] selection:text-[#0b7a4f]">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
