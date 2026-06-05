"use client";
import { useState, useEffect } from "react";

export default function LoadingSpinner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-white/50">
      <div className="h-10 w-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
    </div>
  );
}