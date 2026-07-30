/**
 * About.tsx — Ultra-Premium Agency Profile Section
 * - 01 — PROFILE top header
 * - MASSIVE "FULL STACK DEVELOPER" title with faint 01 background watermark
 * - Glowing status badge: "● AVAILABLE FOR WORK"
 * - Description Card with B.Tech CS @ ITM University Gwalior details & GET IN TOUCH CTA
 * - Interactive macOS Terminal Window with realistic colored CLI output
 * - 4 Key Metrics Cards Grid: 15+ Projects Completed, 12+ Technologies Learned, 1+ Internships, 5+ Certificates
 */

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaProjectDiagram, FaBookReader, FaCertificate } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl font-extrabold text-[#FFFFFF]">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const stats = [
    { label: "PROJECTS COMPLETED", value: 10, suffix: "+", icon: <FaProjectDiagram className="text-[#FFD60A]" /> },
    { label: "TECHNOLOGIES LEARNED", value: 15, suffix: "+", icon: <FaBookReader className="text-[#FFD60A]" /> },
    { label: "INTERNSHIPS", value: 2, suffix: "+", icon: <FaBriefcase className="text-[#FFD60A]" /> },
    { label: "CERTIFICATES", value: 8, suffix: "+", icon: <FaCertificate className="text-[#FFD60A]" /> },
  ];

  return (
    <section id="about" className="py-24 bg-black text-white transition-colors relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD60A]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section Header: 01 — PROFILE */}
        <div className="flex items-center gap-3 mb-8 sr-heading">
          <div className="h-px w-8 bg-[#FFD60A]" />
          <span className="font-mono text-xs text-[#FFD60A] tracking-[0.25em] uppercase font-bold">
            01 — PROFILE
          </span>
        </div>

        {/* Hero Row: Left (Huge Title + Bio Card) vs Right (Terminal Window) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-6 space-y-8 relative">
            
            {/* Background Watermark 01 */}
            <div className="absolute -top-12 left-0 select-none pointer-events-none z-0 opacity-[0.03]">
              <span className="font-black text-[180px] sm:text-[220px] leading-none text-white font-mono">
                01
              </span>
            </div>

            {/* Huge Bold Heading */}
            <div className="relative z-10 space-y-1">
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.88] sr-heading">
                FULL STACK
              </h2>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.88] sr-heading">
                DEVELOPER<span className="text-[#FFD60A]">.</span>
              </h2>
            </div>

            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111] border border-[#2A2A2A] relative z-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD60A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD60A]"></span>
              </span>
              <span className="font-mono text-[11px] font-bold text-slate-300 tracking-[0.2em] uppercase">
                AVAILABLE FOR WORK
              </span>
            </div>

            {/* Description Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-[#2A2A2A] shadow-xl relative z-10 space-y-6">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                <span className="text-[#FFD60A] font-semibold">I'm</span> a Full Stack Developer who builds modern web applications that are fast, scalable, and user-centric. I works across the entire development stack—from designing databases and APIs to crafting responsive user interfaces—with a growing focus on AI-powered solutions and automation.
              </p>

              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono font-bold text-[#FFD60A] uppercase tracking-widest hover:bg-[#FFD60A] hover:text-black hover:border-[#FFD60A] transition-all duration-300 group"
                >
                  GET IN TOUCH
                  <FaArrowUpRightFromSquare size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: macOS Terminal Mockup */}
          <div className="lg:col-span-6 sr-right">
            <div className="rounded-2xl border border-[#FFD60A]/60 bg-[#0A0A0A] overflow-hidden shadow-[0_0_30px_rgba(255,214,10,0.08)] font-mono text-xs sm:text-sm">
              
              {/* Terminal Window Header */}
              <div className="px-5 py-3.5 bg-[#0F0F0F] border-b border-[#2A2A2A]/80 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[12px] text-slate-500 font-mono tracking-wide ml-2">
                  satyam@portfolio ~ %
                </div>
              </div>

              {/* Terminal Body CLI Content */}
              <div className="p-6 sm:p-8 space-y-4 font-mono leading-relaxed text-slate-300">
                
                {/* Row 1 */}
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-bold">&gt;</span>
                  <span className="text-[#FFD60A] font-bold min-w-[80px]">name</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-100 font-semibold">"Satyam Rajput"</span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-bold">&gt;</span>
                  <span className="text-[#FFD60A] font-bold min-w-[80px]">role</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-100 font-semibold">"Fullstack Dev + AI Engineer"</span>
                </div>

                {/* Row 3 */}
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-bold">&gt;</span>
                  <span className="text-[#FFD60A] font-bold min-w-[80px]">location</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-100 font-semibold">"Gwalior, India"</span>
                </div>

                {/* Row 4 */}
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-bold">&gt;</span>
                  <span className="text-[#FFD60A] font-bold min-w-[80px]">status</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-100 font-semibold">"Open to work"</span>
                </div>

                {/* Row 5 */}
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-bold">&gt;</span>
                  <span className="text-[#FFD60A] font-bold min-w-[80px]">bugs_fixed</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-300 font-semibold">"999+"</span>
                </div>

{/* Row 6 */}
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-bold">&gt;</span>
                  <span className="text-[#FFD60A] font-bold min-w-[80px]">dark_mode</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-300 font-semibold">"true"</span>
                </div>
                {/* Active Prompt Cursor */}
                <div className="pt-2">
                  <span className="inline-block w-2.5 h-5 bg-[#FFD60A] animate-pulse" />
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 4 Metrics Cards Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-[#2A2A2A] sr-group">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#2A2A2A] hover:border-[#FFFFFF] flex items-center gap-4 transition-all duration-300 shadow-md group sr-item"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-[#2A2A2A] text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                {stat.icon}
              </div>
              <div>
                <div className="flex items-baseline">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 font-mono">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
