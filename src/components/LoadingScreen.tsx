import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <div className="relative flex flex-col items-center max-w-xs w-full px-4">
        {/* Animated Custom Hoodie Developer Logo — Minimalist Glowing Hood & Laptop Line Art */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: [1, 1.05, 1], opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 relative flex items-center justify-center"
        >
          {/* Glowing backdrop aura */}
          <div className="absolute -inset-4 rounded-full bg-[#FFD60A]/20 blur-2xl animate-pulse" />

          {/* Outer Circle Badge Container */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#0A0A0C] border-2 border-[#FFD60A] shadow-[0_0_30px_rgba(255,214,10,0.25)]">
            <svg
              className="w-14 h-14"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hood Silhouette Contour */}
              <path
                d="M32 8C21.5 8 14 16.5 14 27C14 33.5 17.5 38.5 22 41.5V45H42V41.5C46.5 38.5 50 33.5 50 27C50 16.5 42.5 8 32 8Z"
                fill="#121214"
                stroke="#FFD60A"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              {/* Inner Hood Dark Shadow */}
              <path
                d="M32 14C25 14 20 19.5 20 27C20 32 23 36 27 38.5V40H37V38.5C41 36 44 32 44 27C44 19.5 39 14 32 14Z"
                fill="#0A0A0C"
              />

              {/* Laptop Screen Body */}
              <rect
                x="21"
                y="35"
                width="22"
                height="11"
                rx="1.5"
                fill="#0A0A0C"
                stroke="#FFD60A"
                strokeWidth="1.75"
              />

              {/* Laptop Base Keyboard */}
              <path
                d="M16 49.5L20 46H44L48 49.5H16Z"
                fill="#FFD60A"
                fillOpacity="0.25"
                stroke="#FFD60A"
                strokeWidth="1.75"
                strokeLinejoin="round"
              />

              {/* Glowing Code Symbols inside Laptop Screen */}
              <path
                d="M25.5 39L24 40.5L25.5 42"
                stroke="#FFD60A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M38.5 39L40 40.5L38.5 42"
                stroke="#FFD60A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="33" y1="38.5" x2="31" y2="42.5" stroke="#FFD60A" strokeWidth="1.25" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        {/* Text Loader */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-sm font-semibold tracking-widest text-slate-400 uppercase"
        >
          Initializing Portfolio
        </motion.h2>

        {/* Progress Bar Container */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-900 border border-[#2A2A2A]">
          <motion.div
            className="h-full bg-[#FFD60A]"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Percentage Label */}
        <span className="mt-2 text-xs font-mono text-slate-500">{Math.min(progress, 100)}%</span>
      </div>
    </div>
  );
}
