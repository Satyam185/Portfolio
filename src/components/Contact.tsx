/**
 * Contact.tsx — Ultra-Premium Agency "START A PROJECT" Contact Section
 * - 05 — LET'S WORK TOGETHER top section indicator
 * - Massive bold heading: "START A" (Solid) + "PROJECT" (Stroked Outlined typography)
 * - Bio copy + Interactive direct email pill with arrow button & copy action
 * - Right column profile picture frame with high contrast monochrome aesthetic
 */

import { useState } from "react";
import { FaArrowUpRightFromSquare, FaCopy, FaCheck } from "react-icons/fa6";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("satyamrajput0185@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background ambient yellow glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FFD60A]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Layout: Left Typography vs Right Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Section Indicator + START A PROJECT Headline + Email Pill */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Indicator: 05 — LET'S WORK TOGETHER */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#FFD60A]" />
              <span className="font-mono text-xs text-[#FFD60A] tracking-[0.25em] uppercase font-bold">
                05 — LET'S WORK TOGETHER
              </span>
            </div>

            {/* Massive Heading */}
            <div className="space-y-1">
              <h2 className="text-6xl sm:text-8xl lg:text-[110px] font-black uppercase tracking-tight text-white leading-[0.88] select-none">
                START A
              </h2>
              <h2
                className="text-6xl sm:text-8xl lg:text-[110px] font-black uppercase italic tracking-wider leading-[0.88] text-transparent select-none"
                style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.9)" }}
              >
                PROJECT
              </h2>
            </div>

            {/* Sub-description copy */}
            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Open to freelance contracts, full-time roles, and collaboration on ambitious, boundary-pushing digital products.
            </p>

            {/* Interactive Email Pill Card */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 p-2 pl-5 pr-2 rounded-full bg-[#111111] border border-[#2A2A2A] hover:border-[#FFD700] transition-all group">
                <a
                  href="mailto:satyamrajput0185@gmail.com"
                  className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-[#FFD700] transition-colors"
                >
                  satyamrajput0185@gmail.com
                </a>
                <a
                  href="mailto:satyamrajput0185@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-slate-300 group-hover:bg-[#FFD60A] group-hover:text-black group-hover:border-[#FFD60A] transition-all"
                  aria-label="Send Email"
                >
                  <FaArrowUpRightFromSquare size={13} />
                </a>
              </div>

              {/* Quick Copy Button */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111111] border border-[#2A2A2A] hover:border-[#FFD60A] text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <FaCopy className="text-slate-400" /> Copy
                  </>
                )}
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Clean Rectangular Profile Picture Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl border border-[#2A2A2A] overflow-hidden bg-[#0D0D0D] relative shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5] group">
              
              {/* Rectangular Profile Image — Fills card directly without circle */}
              <img
                src="/images/59cf6999-0441-4e0a-b56e-b0a0bfd84c6a.png"
                alt="Satyam Rajput"
                className="w-full h-full object-cover object-[75%_center] group-hover:scale-105 transition-all duration-700"
              />

              {/* Subtle bottom gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
