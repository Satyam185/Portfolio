/**
 * Navbar.tsx — Clean Floating Capsule Navbar
 * Simplified:
 * - Links: ABOUT, EXPERIENCE, PROJECTS, CONTACT (SKILLS link removed)
 * - Fixed floating capsule at top without hide/show scroll transitions
 */

import { useState, useEffect } from "react";
import { FaDownload, FaArrowRight, FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const navLinks = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        if (currentScrollY < lastScrollY) {
          // Scrolling Up -> Reveal navbar
          setVisible(true);
        } else {
          // Scrolling Down -> Hide navbar
          setVisible(false);
        }
      } else {
        // At top -> Reveal navbar
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoTitles = ["SATYAM_RAJPUT", "WEB_DEVELOPER"];
  const [logoIndex, setLogoIndex] = useState(0);
  const [logoText, setLogoText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullText = logoTitles[logoIndex];

    const handleType = () => {
      if (!isDeleting) {
        setLogoText(fullText.substring(0, logoText.length + 1));
        if (logoText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setLogoText(fullText.substring(0, logoText.length - 1));
        if (logoText === "") {
          setIsDeleting(false);
          setLogoIndex((prev) => (prev + 1) % logoTitles.length);
          return;
        }
      }
    };

    timer = setTimeout(handleType, isDeleting ? 70 : 130);
    return () => clearTimeout(timer);
  }, [logoText, isDeleting, logoIndex]);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 90,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none transition-all duration-300 ${
      visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
    }`}>
      <div className="max-w-6xl mx-auto rounded-full bg-[#0A0A0A]/90 border border-[#2A2A2A] backdrop-blur-xl px-5 sm:px-7 py-2.5 flex items-center justify-between shadow-2xl pointer-events-auto">
        
        {/* LEFT: Animated Typewriter Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavLinkClick(e, "home")}
          className="flex items-center gap-0.5 group min-w-[130px]"
        >
          <span className="font-mono text-sm sm:text-base font-extrabold tracking-widest uppercase text-white group-hover:text-[#FFD60A] transition-colors">
            {logoText}<span className="text-[#FFD60A]">_</span>
          </span>
          <span className="inline-block w-2.5 h-4.5 bg-[#FFD60A] animate-pulse ml-0.5" />
        </a>

        {/* CENTER: Navigation Links Capsule */}
        <div className="hidden lg:flex items-center px-6 py-2 rounded-full bg-[#141414] border border-[#2A2A2A]">
          <nav>
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavLinkClick(e, link.id)}
                    className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-slate-300 hover:text-white transition-colors py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* RIGHT: Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Outlined Resume Pill Button */}
          <a
            href="public/Satyam_Rajput.pdf"
            download="Satyam_Rajput_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A2A] hover:border-[#FFD60A] bg-[#141414] text-[#FFD60A] hover:text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-200"
          >
            RESUME <FaDownload size={10} />
          </a>

          {/* Solid White Hire Me Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, "contact")}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-[#FFD60A] text-black font-mono text-xs font-bold tracking-widest uppercase shadow-md transition-all duration-200 group"
          >
            HIRE ME <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, "contact")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black font-mono text-[10px] font-bold tracking-wider uppercase"
          >
            HIRE ME <FaArrowRight size={9} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <FaTimes size={14} /> : <HiMenuAlt3 size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="max-w-6xl mx-auto mt-3 rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A]/95 backdrop-blur-xl p-5 shadow-2xl pointer-events-auto">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavLinkClick(e, link.id)}
                  className="block py-2.5 px-4 rounded-xl font-mono text-xs font-bold tracking-widest uppercase text-slate-300 hover:bg-[#1A1A1A] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 mt-3 border-t border-[#2A2A2A] flex items-center justify-between">
            <a
              href="/Satyam_resume.pdf"
              download="Satyam_Rajput_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A2A] text-[#FFD60A] font-mono text-xs font-bold tracking-widest uppercase"
            >
              RESUME <FaDownload size={10} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
