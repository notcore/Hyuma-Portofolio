"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

type Props = {
  PhotoUrl?: string;
  ArtUrl?: string;
  className?: string;
  onRevealed?: () => void;
};

const Photo = ({
  PhotoUrl = "/assets/img/profile/photo.png",
  ArtUrl = "/assets/img/profile/art.png",
  className = "",
  onRevealed,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sweepRef = useRef<number | null>(null);
  const revealedRef = useRef(false);
  const onRevealedRef = useRef(onRevealed);

  const [revealed, setRevealed] = useState(false);
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    onRevealedRef.current = onRevealed;
  }, [onRevealed]);

  // Load gambar ke canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = PhotoUrl;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(img, 0, 0);
    };
  }, [PhotoUrl]);

  // Scratch logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isDrawing = false;

    const scratch = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = (clientX - rect.left) * (canvas.width / rect.width);
      const y = (clientY - rect.top) * (canvas.height / rect.height);

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 80, 0, Math.PI * 2);
      ctx.fill();
    };

    const autoSweep = () => {
      const totalCols = canvas.width;
      let col = 0;
      const colsPerFrame = Math.ceil(totalCols / 30);

      const sweep = () => {
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fillRect(col, 0, colsPerFrame, canvas.height);
        col += colsPerFrame;

        if (col < totalCols) {
          sweepRef.current = requestAnimationFrame(sweep);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          setTimeout(() => {
            setCleared(true);
            onRevealedRef.current?.();
          }, 150);
        }
      };

      sweepRef.current = requestAnimationFrame(sweep);
    };

    const checkReveal = () => {
      if (revealedRef.current) return;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      let transparent = 0;
      let total = 0;
      for (let i = 3; i < pixels.length; i += 16) {
        total++;
        if (pixels[i] === 0) transparent++;
      }

      if (transparent / total > 0.7) {
        revealedRef.current = true;
        setRevealed(true);
        autoSweep();
      }
    };

    const onDown = (e: PointerEvent) => { isDrawing = true; scratch(e.clientX, e.clientY); checkReveal(); };
    const onMove = (e: PointerEvent) => { if (!isDrawing) return; scratch(e.clientX, e.clientY); checkReveal(); };
    const onUp = () => { isDrawing = false; };

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      if (sweepRef.current) cancelAnimationFrame(sweepRef.current);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div className={`relative mx-auto lg:mx-0 mt-10 w-fit shrink-0 ${className}`}>

      <img
        src={PhotoUrl}
        alt="cover"
        draggable={false}
        className="block select-none w-[300px] h-auto pointer-events-none relative z-0"
      />

      {/* Scratch canvas */}
      {/* <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 w-[300px] h-auto touch-none custom-cursor z-10"
        animate={{ opacity: cleared ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ pointerEvents: cleared ? "none" : "auto" }}
      /> */}

      {/* Karakter — muncul setelah reveal */}
      {/* <motion.img
        src="/assets/img/characther/ghast.png"
        alt=""
        draggable={false}
        className="absolute bottom-5 right-10 w-[40%] h-auto pointer-events-none z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={revealed ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.img
        src="/assets/img/characther/star.png"
        alt=""
        draggable={false}
        className="absolute md:bottom-10 bottom-10 right-5 w-[90%] h-auto pointer-events-none z-20"
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.img
        src="/assets/img/characther/alay.png"
        alt=""
        draggable={false}
        className="absolute top-10 -left-8 w-[40%] h-auto pointer-events-none z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={revealed ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      /> */}
    </div>
  );
};

export default Photo;