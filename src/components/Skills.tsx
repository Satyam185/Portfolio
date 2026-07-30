/**
 * Skills.tsx — GSAP ScrollTrigger Pinned Horizontal Skills Section
 * Refactored with dynamic multi-color accents per category (Cyan, Emerald, Amber, Indigo, Rose)
 * Progress indicators, category underlines, badge text, and ambient background glows seamlessly
 * synchronize with each category's distinct accent color.
 */

import { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPrisma,
  SiClaude,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiFigma,
  SiAntdesign,
  SiGithubcopilot,
  SiCplusplus,
  SiGoogleauthenticator,
  SiMongodb,
  SiPhp,
  SiGsap,
  
} from "react-icons/si";
import { FiGlobe, FiZap, FiSettings, FiShield } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { RiGeminiLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

// ─── Types ────────────────────────────────────────────────────────────────────

interface Skill {
  name: string;
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  iconColor: string;
}

interface Category {
  id: string;
  num: string;
  label: string;
  accentColor: string; // Signature color per category
  heading: string[];
  description: string;
  skills: Skill[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  {
    id: "01",
    num: "01",
    label: "FRONTEND",
    accentColor: "#38BDF8", // Cyan
    heading: ["FRONTEND", "DEVELOPMENT"],
    description:
      "Crafting performant, accessible, and pixel-perfect interfaces with the modern web stack. From semantic markup to complex React architectures.",
    skills: [
      { name: "C++", Icon: SiCplusplus, iconColor: "#00599C" },
      { name: "HTML", Icon: SiHtml5, iconColor: "#E34F26" },
      { name: "CSS", Icon: SiCss, iconColor: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, iconColor: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, iconColor: "#3178C6" },
      { name: "React", Icon: SiReact, iconColor: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, iconColor: "#FFFFFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, iconColor: "#06B6D4" },
      { name: "Framer Motion", Icon: SiFramer, iconColor: "#FF0055" },
      
    ],
  },
  {
    id: "02",
    num: "02",
    label: "BACKEND",
    accentColor: "#34D399", // Emerald Green
    heading: ["BACKEND", "DEVELOPMENT"],
    description:
      "Building scalable server-side systems, RESTful APIs, and secure authentication flows that power modern web applications.",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, iconColor: "#339933" },
      { name: "Php", Icon: SiPhp, iconColor: "#787CB5" },
      { name: "NextAuth", Icon: FiShield, iconColor: "#FFFFFF" },
      { name: "REST API", Icon: FiGlobe, iconColor: "#FFD60A" },
      { name: "Claude Code", Icon: SiClaude, iconColor: "#D97706" },
      { name: "Antigravity", Icon: SiAntdesign, iconColor: "#1677FF" },
      { name: "GitHub Copilot", Icon: SiGithubcopilot, iconColor: "#00C4B3" },
      { name: "GoogleAuth", Icon: SiGoogleauthenticator, iconColor: "#EA4335" },
    ],
  },
  {
    id: "03",
    num: "03",
    label: "DATABASE",
    accentColor: "#F59E0B", // Amber Gold
    heading: ["DATABASE", "MANAGEMENT"],
    description:
      "Designing efficient relational schemas and managing cloud-hosted databases for speed, data integrity, and scale.",
    skills: [
      { name: "MySQL", Icon: SiMysql, iconColor: "#4479A1" },
      { name: "Prishma", Icon: SiPrisma, iconColor: "#5A67D8" },
      { name: "PostgreSQL", Icon: SiPostgresql, iconColor: "#4169E1" },
      { name: "Supabase", Icon: SiSupabase, iconColor: "#3ECF8E" },
      { name: "Mongodb", Icon: SiMongodb, iconColor: "#47A248" },
    ],
  },
  {
    id: "04",
    num: "04",
    label: "AI & CLOUD",
    accentColor: "#818CF8", // Indigo
    heading: ["AI &", "CLOUD"],
    description:
      "Integrating generative AI models and deploying intelligent, production-ready applications on Google Cloud infrastructure.",
    skills: [
      { name: "Gemini API", Icon: RiGeminiLine, iconColor: "#ffffffff" },
      { name: "Vertex AI", Icon: SiGooglecloud, iconColor: "#4285F4" },
      { name: "Google Cloud", Icon: SiGooglecloud, iconColor: "#FBBC04" },
      { name: "Prompt Engineering", Icon: FiSettings, iconColor: "#ffffffff" },
      { name: "Groq", Icon: FiZap, iconColor: "#ff0000ff" },
      { name: "Gmail api", Icon: FaEnvelope, iconColor: "#f53c2fff" },
    ],
  },
  {
    id: "05",
    num: "05",
    label: "TOOLS",
    accentColor: "#FB7185", // Rose Pink
    heading: ["DEV", "TOOLS"],
    description:
      "Mastering the essential instruments of software craft — from version control and testing to deployment and design collaboration.",
    skills: [
      { name: "Git", Icon: SiGit, iconColor: "#F05032" },
      { name: "GitHub", Icon: SiGithub, iconColor: "#FFFFFF" },
      { name: "VS Code", Icon: VscVscode, iconColor: "#007ACC" },
      { name: "GSAP", Icon: SiGsap, iconColor: "#C9FE6E" },
      { name: "Vercel", Icon: SiVercel, iconColor: "#FFFFFF" },
      { name: "Figma", Icon: SiFigma, iconColor: "#F24E1E" },
    ],
  },
];

const N = CATEGORIES.length;

// ─── SkillCard Component ──────────────────────────────────────────────────────

const SkillCard = memo(function SkillCard({
  skill,
  index,
  accentColor,
}: {
  skill: Skill;
  index: number;
  isActive: boolean;
  accentColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: (index % 4) * 0.04,
        ease: "easeOut",
      }}
      className="group relative flex flex-col items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-default overflow-hidden"
    >
      {/* Glow highlight on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          boxShadow: `inset 0 0 30px ${skill.iconColor}25, 0 0 20px ${accentColor}15`,
        }}
      />

      <div className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-115">
        <skill.Icon style={{ color: skill.iconColor }} />
      </div>

      <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-slate-300 group-hover:text-white transition-colors text-center">
        {skill.name}
      </span>
    </motion.div>
  );
});

// ─── Skills Main Component ────────────────────────────────────────────────────

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = CATEGORIES[activeIndex] || CATEGORIES[0];

  useEffect(() => {
    const mm = gsap.matchMedia();

    // ── Desktop Horizontal Pinned Scroll (>= 768px) ───────────────────────────
    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getScrollDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: () => "+=" + getScrollDistance(),
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          snap: {
            snapTo: 1 / (N - 1),
            duration: 0.35,
            ease: "power2.out",
          },
          onUpdate: (self) => {
            const index = Math.round(self.progress * (N - 1));
            setActiveIndex(index);
          },
        },
      });

      const handleLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", handleLoad);
      document.fonts?.ready.then(handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative bg-black text-white w-full min-h-screen md:h-screen md:overflow-hidden py-12 md:py-0 flex flex-col justify-between select-none"
    >
      {/* Ambient Grid & Dynamic Category Glow Background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 z-0"
        style={{
          backgroundColor: `${activeCategory.accentColor}12`,
          transform: `translate(${(activeIndex - 2) * 15}%, -50%)`,
        }}
      />

      {/* Top Header & Indicator */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full pt-4 md:pt-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#FFD60A]" />
          <span className="font-mono text-xs text-[#FFD60A] tracking-[0.25em] uppercase font-bold">
            02 — EXPERTISE
          </span>
        </div>
      </div>

      {/* Single Horizontal Track (Desktop) / Vertical Stack (Mobile) */}
      <div
        ref={trackRef}
        className="flex flex-col md:flex-row md:w-[500vw] h-full items-center relative z-10 will-change-transform gap-12 md:gap-0 py-6 md:py-0"
      >
        {CATEGORIES.map((cat, catIdx) => {
          const isActive = activeIndex === catIdx;
          return (
            <div
              key={cat.id}
              className="w-full md:w-[100vw] md:min-w-[100vw] px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-center flex-shrink-0 relative overflow-hidden py-6 md:py-0"
            >
              {/* Background Typography Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <span className="text-[18vw] font-black uppercase text-white/[0.025] tracking-widest leading-none whitespace-nowrap">
                  {cat.label}
                </span>
              </div>

              <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-16 items-center relative z-10">
                
                {/* LEFT: Skill Cards Grid */}
                <div className="md:col-span-7 order-2 md:order-1">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {cat.skills.map((skill, sIdx) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        index={sIdx}
                        isActive={isActive}
                        accentColor={cat.accentColor}
                      />
                    ))}
                  </div>
                </div>

                {/* RIGHT: Category Info & Heading */}
                <div className="md:col-span-5 order-1 md:order-2 space-y-3 lg:space-y-6">
                  {/* Category Pill / Badge with unique color */}
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#111111] border border-[#2A2A2A]">
                    <span
                      className="font-mono text-xs font-bold transition-colors"
                      style={{ color: cat.accentColor }}
                    >
                      {cat.num}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">—</span>
                    <span
                      className="text-xs font-mono font-bold tracking-widest uppercase"
                      style={{ color: cat.accentColor }}
                    >
                      {cat.label}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none">
                    <span className="block">{cat.heading[0]}</span>
                    <span
                      className="block transition-colors duration-300"
                      style={{ color: cat.accentColor }}
                    >
                      {cat.heading[1]}
                    </span>
                  </h3>

                  {/* Matching accent color underline */}
                  <div
                    className="h-1 w-20 rounded-full transition-all duration-300"
                    style={{ backgroundColor: cat.accentColor }}
                  />

                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
                    {cat.description}
                  </p>

                  <div className="pt-1 flex items-center gap-4 text-xs font-mono text-slate-500">
                    <span>{cat.skills.length} TECHNOLOGIES</span>
                    <span>•</span>
                    <span style={{ color: cat.accentColor }}>PRODUCTION READY</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}