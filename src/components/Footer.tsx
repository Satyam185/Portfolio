/**
 * Footer.tsx — Ultra-Minimalist Modern Agency Footer
 * Designed strictly based on the reference UI mockup:
 * - Top line: Glowing green status indicator "AVAILABLE — FREELANCE & FULL-TIME" vs GITHUB, LINKEDIN, +91 9977298257
 * - Bottom line: Copyright declaration vs Tech stack credits ("Built with React · Tailwind CSS · GSAP")
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#2A2A2A] text-slate-400 py-10 font-mono text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Row 1: Status & Primary Channels */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#1A1A1A]">
          {/* Status Indicator */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-bold text-slate-200 tracking-wider uppercase">
              AVAILABLE — FREELANCE & FULL-TIME
            </span>
          </div>

          {/* Right Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-bold text-slate-400 tracking-widest uppercase">
            <a
              href="https://github.com/Satyam185"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD60A] transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/satyam-rajput-4748182b3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD60A] transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="tel:+919977298257"
              className="hover:text-[#FFD60A] transition-colors text-slate-300"
            >
              +91 9977298257
            </a>
          </div>
        </div>

        {/* Row 2: Copyright & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} Satyam Rajput. All rights reserved.
          </div>
          <div>
            Built with React · Tailwind CSS · GSAP
          </div>
        </div>

      </div>
    </footer>
  );
}
