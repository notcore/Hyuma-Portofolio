"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface AccordionItem {
  id: string;
  question: string;
  answers: string[];
}

export interface AccordionSectionProps {
  title: string;

  /** Data pertanyaan + jawaban */
  items: AccordionItem[];

  /**
   * Tampilkan nomor urut otomatis di tiap jawaban?
   * @default true
   */
  showAnswerNumbers?: boolean;

  /**
   * Tampilkan nomor urut otomatis di tiap pertanyaan (header row)?
   * @default false
   */
  showQuestionNumbers?: boolean;

  /**
   * Mode layout: "row" = pertanyaan seperti baris tabel, "default" = stacked biasa
   * @default "default"
   */
  layout?: "default" | "row";

  /** Class tambahan untuk wrapper terluar */
  className?: string;

  /**
   * Controlled: indikator apakah section ini terbuka (opsional, pakai uncontrolled jika tidak di-pass)
   */
  isOpen?: boolean;
  onToggle?: () => void;
}

// ─── Sub-komponen: satu baris pertanyaan ─────────────────────────────────────

interface QuestionRowProps {
  item: AccordionItem;
  index: number;
  isActive: boolean;
  onToggle: () => void;
  showAnswerNumbers: boolean;
  showQuestionNumbers: boolean;
  layout: "default" | "row";
}

function QuestionRow({
  item,
  index,
  isActive,
  onToggle,
  showAnswerNumbers,
  showQuestionNumbers,
  layout,
}: QuestionRowProps) {
  return (
    <div
      className={`border-b border-slate-100 pb-1 ${
        layout === "row" ? "flex flex-col" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between text-left py-1.5 text-xs font-medium text-slate-800 hover:text-slate-600 transition-colors ${
          layout === "row" ? "gap-4" : ""
        }`}
      >
        <span className="flex items-start gap-1.5">
          {showQuestionNumbers && (
            <span className="shrink-0 w-4 text-right text-slate-400 font-mono select-none">
              {index + 1}.
            </span>
          )}
          {item.question}
        </span>
        {isActive ? (
          <ChevronUp className="w-3 h-3 shrink-0" />
        ) : (
          <ChevronDown className="w-3 h-3 shrink-0" />
        )}
      </button>

      {isActive && (
        <ul
          className={`${
            showAnswerNumbers ? "list-none" : "list-disc"
          } pl-4 pb-2 pt-1 text-xs text-slate-500 space-y-1.5 leading-relaxed`}
        >
          {item.answers.map((answer, i) => (
            <li key={i} className="flex items-start gap-1.5">
              {showAnswerNumbers && (
                <span className="shrink-0 w-4 text-right text-slate-400 font-mono select-none">
                  {i + 1}.
                </span>
              )}
              <span>{answer}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Komponen Utama ───────────────────────────────────────────────────────────

export function AccordionSection({
  title,
  items,
  showAnswerNumbers = true,
  showQuestionNumbers = false,
  layout = "default",
  className = "",
  isOpen: controlledIsOpen,
  onToggle: controlledOnToggle,
}: AccordionSectionProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;

  const handleSectionToggle = () => {
    if (controlledOnToggle) {
      controlledOnToggle();
    } else {
      setInternalOpen((prev) => !prev);
    }
    setActiveQuestion(null);
  };

  const toggleQuestion = (id: string) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`border-t border-slate-200 pt-2 max-w-2xl ${className}`}>
      <button
        onClick={handleSectionToggle}
        className="w-full flex items-center justify-between text-left py-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
      >
        <span className="font-coolvetica text-base">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-3.5 h-3.5" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5" />
        )}
      </button>

      {/* Konten */}
      {isOpen && (
        <div className="space-y-2 pt-2 border-t border-slate-100 mt-1">
          {items.map((item, index) => (
            <QuestionRow
              key={item.id}
              item={item}
              index={index}
              isActive={activeQuestion === item.id}
              onToggle={() => toggleQuestion(item.id)}
              showAnswerNumbers={showAnswerNumbers}
              showQuestionNumbers={showQuestionNumbers}
              layout={layout}
            />
          ))}
        </div>
      )}
    </div>
  );
}
