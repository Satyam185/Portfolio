import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight } from "react-icons/fa";

interface ProjectItem {
  id: string;
  year: string;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  img: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const projects: ProjectItem[] = [
    {
      id: "01",
      year: "2026",
      category: "AI RESUME ANALYZER",
      title: "Kairo X",
      description: "An intelligent resume assistant scoring CV structures, analyzing gaps, and matching candidates to target jobs.",
      fullDescription: "Developed an AI-driven resume scoring platform that parses user CVs, evaluates formatting structure, highlights missing keywords, and automatically tailors applications for targeted job listings.",
      img: "/images/KairoX.png",
      technologies: ["REACT", "NODE.JS", "GEMINI API", "TAILWIND CSS", "EXPRESS"],
      features: [
        "Real-Time Resume Formatting Parser & Scorer",
        "Job Description Keyword Match Analysis",
        "One-Click Custom Layout Resume Generator",
        "Exportable PDF Reports & ATS Optimizer"
      ],
      github: "https://github.com/Satyam185",
      live: "https://www.kairox.in/",
    },
    
    {
      id: "02",
      year: "2025",
      category: "AI PLATFORM",
      title: "Career UDAAN",
      description: "An AI-powered career guidance platform designed to counsel students on career pathways and automated roadmaps.",
      fullDescription: "An AI-powered career guidance platform designed to counsel students on career pathways, automated roadmap generation, personalized skill analysis, and personality matches.",
      img: "/images/CareerUddan.png",
      technologies: ["REACT", "NODE.JS", "GEMINI API", "TAILWIND CSS", "MONGODB"],
      features: [
        "AI Personality Assessment Questionnaires",
        "Dynamic Career Roadmap Visualizers",
        "Curated Educational Route Recommender",
        "Automated Skill Gap Analysis Engine"
      ],
      github: "https://github.com/Satyam185",
      live: "https://career-udaan.vercel.app/",
    },

    {
      id: "03",
      year: "2026",
      category: "Self-Portfolio",
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React, showcasing my skills, projects, and achievements.",
      fullDescription: "Designed with simplicity and elegance in mind, this portfolio combines bold typography, subtle animations, and interactive elements to create a memorable browsing experience. Every section is optimized for readability, responsiveness, and seamless navigation across all devices. ",
      img: "/images/portfolio.jpg",
      technologies: ["REACT", "NODE.JS", "GEMINI API", "TAILWIND CSS"],
      features: [
        "AI Personality Assessment Questionnaires",
        "Dynamic Career Roadmap Visualizers",
        "Curated Educational Route Recommender",
        "Automated Skill Gap Analysis Engine"
      ],
      github: "https://github.com/Satyam185",
      live: "https://career-udaan.vercel.app/",
    },

    {
      id: "04",
      year: "2024",
      category: "FITNESS PLATFORM",
      title: "Power Gym",
      description: "A modern, responsive gym portal displaying membership structures, interactive calculators, and booking setups.",
      fullDescription: "Architected a high-performance fitness web application featuring real-time membership calculators, trainer scheduling dashboards, and integrated contact leads with cloud storage.",
      img: "/images/gym website.jpg",
      technologies: ["REACT", "TYPESCRIPT", "SUPABASE", "WEB3FORMS", "TAILWIND CSS"],
      features: [
        "Interactive Membership Pricing Calculator",
        "Trainer Slot Booking Scheduling Dashboard",
        "Supabase DB Member Inquiry Storage",
        "Ultra-Fast Page Speed Load Architecture"
      ],
      github: "https://github.com/Satyam185/Power_Gym.git",
      live: "https://power-gym-ashy.vercel.app/",
    },
    {
      id: "05",
      year: "2024",
      category: "AI Platform",
      title: "IQ Chatbot",
      description: "Created an intelligent chatbot interface with TypeScript, focused on natural language interaction.",
      fullDescription: "Engineered an AI platform delivering custom chatbot ecosystems, cloud infrastructure services, and automated workflow integrations. Styled using Tailwind CSS for a responsive and visually appealing chat UI. ",
      img: "/images/chatbot.jpg",
      technologies: ["REACT", "TYPESCRIPT", "GEMINI API", "GOOGLE CLOUD", "TAILWIND CSS"],
      features: [
        "Automated Bot Assistant Ecosystem",
        "High Performance Cloud Infrastructure",
        "Real-Time Analytics & Reporting Suite",
        "Custom API Middleware Integrations"
      ],
      github: "https://github.com/Satyam185/IQ-Chatbot.git",
      live: "https://iq-chatbot.vercel.app/",
    },
    
    {
      id: "06",
      year: "2024",
      category: "E-COMMERCE",
      title: "Food Delivery Platform",
      description: "An e-commerce food delivery platform detailing dynamic categories, cart overlays, and validation check forms.",
      fullDescription: "Built an interactive food ordering platform featuring live shopping cart calculations, categorized product filtering, search overlays, and address validation workflows.",
      img: "/images/online-food-ordering-statistics-RestroApp.jpg",
      technologies: ["REACT", "TYPESCRIPT", "TAILWIND CSS", "LOCALSTORAGE"],
      features: [
        "Live Shopping Cart Badge Quantity Counter",
        "Categorized Search Overlays & Quick Filters",
        "Address Validation & Checkout Workflows",
        "Persistent Local Storage State Management"
      ],
      github: "https://github.com/Satyam185/Food_Ordering_platform.git",
      live: "https://food-ordering-platform-phi.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90, damping: 13 } },
  };

  return (
    <section id="projects" className="py-24 bg-black text-white transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#FFD60A]" />
            <span className="font-mono text-xs text-[#FFD60A] tracking-[0.25em] uppercase font-bold">
              04 — SELECTED WORK
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
            TOP PROJECTS
          </h2>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative bg-[#0D0D0D] border border-[#222222] hover:border-[#444444] rounded-3xl p-4 sm:p-5 transition-all duration-300 cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between h-full"
              >
                {/* Project Image Frame */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-[#1E1E1E]">
                  <img
                    src={project.img}
                    alt={project.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/600x400/111111/ffffff?text=${encodeURIComponent(
                        project.title
                      )}`;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay with View Details Button */}
                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 z-10 backdrop-blur-xs">
                    {/* Top Left ID */}
                    <span className="absolute top-4 left-4 font-mono text-xs font-bold text-slate-400 tracking-wider">
                      {project.id}
                    </span>

                    {/* Top Right Year */}
                    <span className="absolute top-4 right-4 font-mono text-xs font-bold text-slate-400 tracking-wider">
                      {project.year}
                    </span>

                    {/* Center View Details Pill Button */}
                    <button className="px-6 py-3 rounded-full bg-white text-black font-extrabold uppercase text-xs tracking-wider shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer">
                      VIEW DETAILS
                    </button>

                    {/* Bottom Title & Category */}
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-[11px] font-mono text-[#FFD60A] font-bold uppercase tracking-widest mt-0.5">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Info Footer (Unhovered state) */}
                <div className="mt-4 flex items-center justify-between px-1">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FFD60A] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                      {project.category}
                    </p>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-[#181818] border border-[#2A2A2A] text-slate-300 group-hover:bg-[#FFD60A] group-hover:text-black group-hover:border-[#FFD60A] flex items-center justify-center transition-all duration-200 flex-shrink-0">
                    <FaArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-40"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#0F0F0F] border border-[#222222] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-50 p-6 sm:p-8 lg:p-10 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 h-10 w-10 rounded-full bg-[#1A1A1A] border border-[#333333] hover:border-white text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer z-50"
                aria-label="Close details"
              >
                <FaTimes size={15} />
              </button>

              {/* Grid Content Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                {/* Left Side: Screenshot Image Box */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl border border-[#2A2A2A] bg-black p-2.5 sm:p-3 overflow-hidden shadow-2xl relative">
                    <img
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/600x400/111111/ffffff?text=${encodeURIComponent(
                          selectedProject.title
                        )}`;
                      }}
                      className="rounded-xl object-cover w-full h-[240px] sm:h-[320px] lg:h-[380px]"
                    />
                  </div>
                </div>

                {/* Right Side: Project Details */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
                  {/* Category Pill */}
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#FFD60A] uppercase">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mt-1 leading-none">
                      {selectedProject.title}
                    </h2>
                  </div>

                  {/* Full Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-2">
                      KEY FEATURES
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc pl-4">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-2">
                      TECH STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#1A1A1A] border border-[#333333] text-slate-300 uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={selectedProject.live !== "#" ? selectedProject.live : selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 sm:py-4 rounded-2xl bg-white text-black font-extrabold uppercase tracking-wider hover:bg-[#FFD60A] transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-xl text-center cursor-pointer"
                    >
                      OPEN LIVE PROJECT <FaExternalLinkAlt size={12} />
                    </a>
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl bg-[#1A1A1A] border border-[#333333] text-white hover:border-white font-bold uppercase text-xs tracking-wider transition-colors flex items-center justify-center gap-2"
                      >
                        <FaGithub size={15} /> SOURCE CODE
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
