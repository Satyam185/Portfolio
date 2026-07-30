import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaReact, FaNodeJs, FaCloud, FaChevronDown, FaInstagram } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiGooglecloud } from "react-icons/si";

export default function Hero() {
  const titles = [
    "Full Stack MERN Developer",
    "Prompt Engineer",
    "Software Developer",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullText = titles[currentTitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(100);
          return;
        }
      }
      setTypingSpeed(isDeleting ? 40 : 80);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Orbiting floating coding icons filled with authentic brand colors
  const floatingIcons = [
    { icon: <FaReact style={{ color: "#61DAFB", filter: "drop-shadow(0 0 8px rgba(97,218,251,0.5))" }} />, size: "text-4xl", initialPos: { top: "15%", left: "12%" }, duration: 6, delay: 0 },
    { icon: <FaNodeJs style={{ color: "#68A063", filter: "drop-shadow(0 0 8px rgba(104,160,99,0.5))" }} />, size: "text-4xl", initialPos: { bottom: "25%", left: "15%" }, duration: 8, delay: 1 },
    { icon: <SiMongodb style={{ color: "#47A248", filter: "drop-shadow(0 0 8px rgba(71,162,72,0.5))" }} />, size: "text-3xl", initialPos: { top: "25%", right: "12%" }, duration: 7, delay: 2 },
    { icon: <FaCloud style={{ color: "#00A1E0", filter: "drop-shadow(0 0 8px rgba(0,161,224,0.5))" }} />, size: "text-5xl", initialPos: { bottom: "15%", right: "10%" }, duration: 9, delay: 0.5 },
    { icon: <SiJavascript style={{ color: "#F7DF1E", filter: "drop-shadow(0 0 8px rgba(247,223,30,0.5))" }} />, size: "text-3xl", initialPos: { top: "50%", left: "8%" }, duration: 7.5, delay: 1.5 },
    { icon: <SiTypescript style={{ color: "#3178C6", filter: "drop-shadow(0 0 8px rgba(49,120,198,0.5))" }} />, size: "text-3xl", initialPos: { top: "18%", right: "45%" }, duration: 8.5, delay: 0.2 },
    { icon: <SiGooglecloud style={{ color: "#4285F4", filter: "drop-shadow(0 0 8px rgba(66,133,244,0.5))" }} />, size: "text-3xl", initialPos: { bottom: "35%", right: "48%" }, duration: 6.5, delay: 2.2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20"
    >
      {/* Background Image Layer — Whole Image Span, Right Side Fully Clear, Left Side Partially Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Whole Background Image across entire viewport */}
        <img
          src="/images/Screenshot 2025-07-07 230254.png"
          alt="Satyam Rajput"
          className="w-full h-full object-cover object-[80%_center] lg:object-right opacity-95 filter brightness-100 scale-100"
        />
        
        {/* Left Side Gradient Mask: Partially dark for text readability, right side 100% crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none w-full md:w-3/4 lg:w-3/5" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              ...item.initialPos,
            }}
            animate={{
              y: [0, -15, 15, 0],
              x: [0, 10, -10, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
            className={`p-3 rounded-xl bg-[#1A1A1A]/40 border border-[#2A2A2A] backdrop-blur-md shadow-lg ${item.size} flex items-center justify-center`}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Main Layout Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-2xl lg:max-w-3xl text-left flex flex-col items-start">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 px-4 py-1.5 rounded-full bg-[#1A1A1A]/80 border border-[#2A2A2A] text-xs font-semibold uppercase tracking-widest text-[#FFD60A] shadow-md flex items-center gap-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            Available For Opportunities
          </motion.div>

          {/* Greeting */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg sm:text-xl font-bold tracking-wide text-slate-300 mb-2"
          >
            Hi, I'm
          </motion.h2>

          {/* Name - Text Reveal letter by letter */}
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-4"
          >
            <span className="text-white drop-shadow-lg">
              {Array.from("Satyam Rajput").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.04,
                    type: "spring",
                    stiffness: 160,
                    damping: 14
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Typewriter Looping Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="h-10 mb-6 text-xl sm:text-3xl font-semibold text-slate-200 flex items-center drop-shadow-md"
          >
            <span>{currentText}</span>
            <span className="w-1 h-6 ml-1.5 inline-block bg-[#FFD60A] animate-pulse" />
          </motion.div>

          {/* Introduction paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="max-w-2xl text-slate-300 text-base sm:text-lg mb-8 leading-relaxed text-left drop-shadow"
          >
            A software engineer specialized in constructing web platforms using the MERN stack, and designing optimized developer systems. 
            I design clean code architectures paired with responsive user design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FFD60A] hover:bg-[#FFC300] text-black font-extrabold transition-all duration-200 shadow-lg cursor-pointer"
            >
              Hire Me
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/Satyam_Resume.pdf"
              download="Satyam_Rajput_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/40 hover:border-[#FFD60A] hover:text-[#FFD60A] text-white font-semibold transition-all duration-200"
            >
              <FaDownload size={13} /> Download Resume
            </motion.a>
          </motion.div>

          {/* Socials Connection */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/Satyam185"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/60 border border-white/20 text-slate-300 hover:text-[#FFD60A] hover:border-[#FFD60A] hover:scale-105 transition-all duration-250 backdrop-blur-md"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/satyam-rajput-4748182b3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/60 border border-white/20 text-slate-300 hover:text-[#FFD60A] hover:border-[#FFD60A] hover:scale-105 transition-all duration-250 backdrop-blur-md"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:satyamrajput0185@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/60 border border-white/20 text-slate-300 hover:text-[#FFD60A] hover:border-[#FFD60A] hover:scale-105 transition-all duration-250 backdrop-blur-md"
              aria-label="Email"
            >
              <FaEnvelope size={17} />
            </a>
            <a
              href="https://www.instagram.com/thakur.satyam_rajput?igsh=bmIxOW5uNTlleGlw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/60 border border-white/20 text-slate-300 hover:text-[#FFD60A] hover:border-[#FFD60A] hover:scale-105 transition-all duration-250 backdrop-blur-md"
              aria-label="Instagram"
            >
              <FaInstagram size={17} />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Arrow Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 drop-shadow">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#FFD60A] hover:text-[#FFC300] cursor-pointer text-xl"
          onClick={() => scrollToSection("about")}
        >
          <FaChevronDown />
        </motion.div>
      </div>
    </section>
  );
}
