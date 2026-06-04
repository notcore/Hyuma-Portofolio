"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { modeConfig } from "@/components/ui/Types";
import type { Mode } from "@/components/ui/Types";

type Props = {
  active: Mode;
  onChange: (m: Mode) => void;
};

const ModeToggle = ({ active, onChange }: Props) => {
  const modes: Mode[] = ["programming", "jaringan",];
    //  "server", "office"];

  const btnRefs = useRef<Record<Mode, HTMLButtonElement | null>>({
    programming: null,
    jaringan: null,
    // server: null,
    // office: null,
  });

  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = btnRefs.current[active];
    if (el) setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  return (
    <div className="relative flex items-center bg-slate-100 rounded-xl p-1 w-fit gap-0.5">
      {/* sliding pill */}
      <motion.div
        className="absolute top-1 h-[calc(100%-8px)] bg-white rounded-[10px] border border-slate-200"
        animate={{ left: pillStyle.left, width: pillStyle.width }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
        style={{ left: pillStyle.left, width: pillStyle.width }}
      />

      {modes.map((m) => {
        const { label, Icon, activeColor } = modeConfig[m];
        const isActive = active === m;
        return (
          <button
            key={m}
            ref={(el) => { btnRefs.current[m] = el; }}
            onClick={() => onChange(m)}
            className={`relative z-10 flex items-center gap-1.5 px-4 py-2 rounded-[10px] text-sm font-medium transition-colors duration-200
              ${isActive ? activeColor : "text-slate-400 hover:text-slate-600"}`}
          >
            <Icon size={15} strokeWidth={2} />
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default ModeToggle;