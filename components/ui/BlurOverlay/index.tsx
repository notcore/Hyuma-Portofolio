"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlurOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1, backdropFilter: "blur(8px) brightness(1.3)" }}
          animate={{ opacity: 0, backdropFilter: "blur(0px) brightness(1)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 bg-white/10 z-30"
        />
      )}
    </AnimatePresence>
  );
}
