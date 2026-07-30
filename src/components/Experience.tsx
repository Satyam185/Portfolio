import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "ETHARA.AI",
      role: "LLM Prompt Engineer Intern ",
      duration: "Apr 2026 - May 2026",
      responsibilities: [
        "Designed and optimized advanced prompts for Large Language Models (LLMs) to improve response accuracy, relevance, and contextual understanding.",
        "Built structured prompt frameworks for tasks like text generation, summarization, and translation.",
        "Improved AI output quality by refining system prompts, temperature control, and token management strategies.",
        "Conducted prompt testing, evaluation, and iterative improvements based on performance metrics.",
        "Reduced token usage by 15% through iterative prompt optimization and systematic temperature control strategies.",
      ],
      technologies: ["LLM" ,"Prompt Optimization" ,"API Integration" ,"Model Evaluation" , "System Prompts" ,"Temperature Control",],
    },
    {
      company: "EIBO Services PVT.LTD",
      role: "Full Stack Web Developer",
      duration: "Oct 2025 - Nov 2025",
      responsibilities: [
        "Developed a responsive e-commerce frontend using React.js and Tailwind CSS, improving user engagement metrics by 20%.",
        "Integrated RESTful APIs to ensure seamless data flow between frontend and backend systems.",
        "Optimized MySQL database schemas for efficient management of product catalogs and user orders.", 
        "Resolved critical bugs and implemented new features, reducing page load time by 15% through optimized component rendering. ",
      ],
      technologies: ["JavaScript", "React", "Tailwind CSS", "Git", "MySQL", "Framer Motion"],
    },
    {
      company: "ITM Gwalior",
      role: "B.Tech (CS) Student",
      duration: "Oct 2022 - July 2026",
      responsibilities: [
        "Participated in academic projects, coding assignments, and technical workshops while pursuing a B.Tech degree.",
        "Developed practical skills in Leadership Skill, problem-solving, and collaborative software development.",
        "Throughout my college journey, I've focused on building practical web applications, learning modern development tools",
      ],
      technologies: ["Problem Solving", "Leadership Skill", "Teamwork"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-black text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#FFD60A]" />
            <span className="font-mono text-xs text-[#FFD60A] tracking-[0.25em] uppercase font-bold">
              03 — THE JOURNEY
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              EXPERIENCE
            </h2>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase italic tracking-wider text-slate-600/80 leading-none">
              &amp; EDUCATION
            </h2>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line (Left-aligned) */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFD60A] via-[#FFD60A]/60 to-[#FFD60A] -translate-x-1/2 z-0" />

          {/* Timeline Items */}
          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, index) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-start"
                >
                  {/* Timeline briefcase icon dot */}
                  <div className="absolute left-6 sm:left-8 top-6 h-8 w-8 rounded-full bg-[#FFD60A] border-4 border-black flex items-center justify-center -translate-x-1/2 z-20 shadow-lg shadow-[#FFD60A]/20">
                    <FaBriefcase className="text-black text-xs" />
                  </div>

                  {/* Horizontal Connector Line */}
                  <div className="absolute left-6 sm:left-8 top-10 w-8 sm:w-10 h-0.5 bg-[#FFD60A]/70 z-10" />

                  {/* Card Content block */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-[calc(100%-3.5rem)] sm:w-[calc(100%-4.5rem)] ml-14 sm:ml-18 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#FFD60A]/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 relative sr-card z-10 overflow-hidden shadow-xl"
                  >
                    {/* Header */}
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="flex-1 min-w-[140px]">
                          <h3 className="text-base sm:text-lg font-bold text-white leading-snug break-words">
                            {exp.role}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-[#FFD60A] mt-0.5 break-words">
                            {exp.company}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black border border-[#2A2A2A] text-slate-300 flex-shrink-0 self-start">
                          <FaCalendarAlt size={10} className="text-[#FFD60A]" /> {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description List */}
                    <ul className="list-disc pl-4 space-y-2 mb-6 text-slate-300 text-xs sm:text-sm leading-relaxed break-words">
                      {exp.responsibilities.map((resp, rIndex) => (
                        <li key={rIndex}>{resp}</li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2A2A2A]">
                      {exp.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-yellow-500/10 text-[#FFD60A] break-normal"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
