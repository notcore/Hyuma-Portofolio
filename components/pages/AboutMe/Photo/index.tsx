"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

type props = {
  PhotoUrl?: string;
  ArtUrl?: string;
  ClassName?: string;
  onRevealed?: () => void; // dipanggil setelah canvas selesai disapu
};

const Photo = ({
  PhotoUrl = "/assets/img/profile/photo.png",
  ArtUrl = "/assets/img/profile/art.png",
  ClassName = "",
  onRevealed,
}: props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sweepRef = useRef<number | null>(null);

  // Gunakan ref untuk revealed agar tidak trigger re-render + re-run useEffect
  const revealedRef = useRef(false);
  const onRevealedRef = useRef(onRevealed); // simpan di ref biar tidak stale di closure

  useEffect(() => {
    onRevealedRef.current = onRevealed;
  }, [onRevealed]);

  const [revealed, setRevealed] = useState(false);
  const [cleared, setCleared] = useState(false);

  // useEffect 1: Load gambar ke canvas — hanya jalan saat PhotoUrl berubah
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

  // useEffect 2: Setup event listener scratch — hanya jalan sekali (mount)
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

    // Animasi sweep otomatis yang melanjutkan dari progress yang ada.
    // Menyapu canvas dari kiri ke kanan kolom per kolom,
    // sehingga terasa seperti melanjutkan gerakan gesek user.
    const autoSweep = () => {
      const totalCols = canvas.width;
      let col = 0;

      // Selesai dalam ~30 frame (~500ms di 60fps). Naikkan angka = lebih lambat.
      const colsPerFrame = Math.ceil(totalCols / 30);

      const sweep = () => {
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fillRect(col, 0, colsPerFrame, canvas.height);
        col += colsPerFrame;

        if (col < totalCols) {
          sweepRef.current = requestAnimationFrame(sweep);
        } else {
          // Pastikan benar-benar bersih
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Fade out canvas, lalu panggil onRevealed ke parent
          setTimeout(() => {
            setCleared(true);
            onRevealedRef.current?.();
          }, 150);
        }
      };

      sweepRef.current = requestAnimationFrame(sweep);
    };

    const checkReveal = () => {
      // Pakai ref, bukan state — tidak akan stale di dalam closure
      if (revealedRef.current) return;

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      let transparent = 0;
      let total = 0;

      // Sampling biar ringan & akurat
      for (let i = 3; i < pixels.length; i += 16) {
        total++;
        if (pixels[i] === 0) transparent++;
      }

      const percent = transparent / total;

      if (percent > 0.7) {
        revealedRef.current = true; // Set ref dulu biar tidak dipanggil 2x
        setRevealed(true);
        autoSweep(); // Lanjutkan progress gesek secara otomatis
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDrawing = true;
      scratch(e.clientX, e.clientY);
      checkReveal();
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDrawing) return;
      scratch(e.clientX, e.clientY);
      checkReveal();
    };

    const handlePointerUp = () => {
      isDrawing = false;
    };

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      // Batalkan animasi sweep jika komponen unmount saat sweep berjalan
      if (sweepRef.current) cancelAnimationFrame(sweepRef.current);

      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`relative rotate-10 w-fit ${ClassName}`}>

      {/* 🎨 Background (ArtUrl) */}
      <img
        src={ArtUrl}
        alt="cover"
        className="block select-none max-w-sm pointer-events-none relative z-0"
        draggable={false}
      />

      {/* 🎯 Canvas (yang digesek) */}
      <motion.canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full touch-none custom-cursor z-10"
        animate={{
          opacity: cleared ? 0 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      {/* 👻 Character 1 */}
      <motion.img
        src="/assets/img/characther/ghast.png"
        className="absolute bottom-1 right-10 w-[40%] h-auto pointer-events-none z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={revealed ? { scale: 1, opacity: 1 } : {}}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <motion.img
        src="/assets/img/characther/star.png"
        className="absolute bottom-[1%] right-5 w-[90%] h-auto pointer-events-none z-20"
        initial={{ scale: 1, opacity: 0 }}
        animate={revealed ? { scale: 1, opacity: 1 } : {}}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* 🧍 Character 2 */}
      <motion.img
        src="/assets/img/characther/alay.png"
        className="absolute top-10 -left-8 w-[40%] h-auto pointer-events-none z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={revealed ? { scale: 1, opacity: 1 } : {}}
        transition={{
          duration: 0.3,
          delay: 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
};

export default Photo;