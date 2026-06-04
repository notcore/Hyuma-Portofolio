"use client";
import { useState } from "react";
import { CheckIcon, Copy } from "lucide-react";

const Terminal = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-50 hover:bg-slate-200/50 my-4 rounded-sm border border-slate-100 overflow-hidden max-w-2xl">
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 border-b border-slate-200">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-[11px] text-slate-500 font-mono">terminal</span>
      </div>

      <div className="pl-4 pr-3 py-2 flex w-full items-center gap-2 font-mono text-sm">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-blue-600 select-none">$</span>
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-medium">
            {command}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 border border-slate-200 hover:border-slate-300 bg-slate-100/50 rounded-sm p-1.5 text-[11px] text-slate-400 hover:text-slate-600 transition-colors"
        >
          {copied ? (
            <CheckIcon className="w-3 h-3 text-slate-200" />
          ) : (
            <Copy className="w-3 h-3" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Terminal;
