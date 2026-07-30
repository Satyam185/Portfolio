import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ParticleBackground from "./components/ParticleBackground";
import GalaxyStarsBackground from "./components/GalaxyStarsBackground";
import ScrollAnimations from "./components/ScrollAnimations";

function MainPortfolio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-black text-[#F4F4F5] selection:bg-[#FFD60A]/35 relative overflow-hidden"
    >
      <ScrollAnimations />
      <div className="relative z-10">
        <Navbar />
        {/* Hero Section (Kept clean without galaxy stars) */}
        <Hero />

        {/* Galaxy Stars Background wrapping all sections after Hero */}
        <div className="relative z-10">
          <GalaxyStarsBackground />
          <main className="relative z-10">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <Routes key="content">
            <Route
              path="/*"
              element={<MainPortfolio />}
            />
          </Routes>
        )}
      </AnimatePresence>
    </Router>
  );
}
