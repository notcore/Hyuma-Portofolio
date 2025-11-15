"use client";

import { useRef, ChangeEvent, useState, useEffect } from "react";
import { redirect } from "next/navigation";
import LocationButton from "../components/LocationButton";

export default function Suksess() {




  return (
    <div className="bg-white w-full min-h-screen">
      <div className="w-full h-[90px] flex justify-start border-b border-stone-300">
        <img
          src="/assets/image.png"
          alt="Logo"
          className="h-[60px] mx-5 my-3"
        />
      </div>

<div className="flex w-max-[300px]  mx-auto p-10 mt-20 flex-col items-center justify-center">
    <div>

        <div>
            <div className="grid-cols-1 place-items-center mb-12 text-center">
                <h1 className="text-4xl font-bold text-black">Berhasil!</h1>
                <p className="text-lg text-black">
                Mohon untuk menunggu verifikasi dari owner untuk mengkonsfirmasi pembayaaran otomatis,<br></br> <span className="font-mono text-slate-400 mt-6">bukti pembayaran akan dikirim melalui whatsapp owner secara otomatis</span>.
                </p>
            </div>
        

    <h1 className="text-2xl font-semibold text-center text-black ">Lihat siapa toko tersultan di daerahmu</h1>
               <LocationButton />
               
    <div className="relative flex flex-col text-gray-700 mb-20 bg-white rounded-xl bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            {["Nama Market", "Penghasilan", "Usaha", ""].map((title, i) => (
              <th
                key={i}
                className="p-4 border-b border-slate-300 bg-blue-gray-50"
              >
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  {title}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <tr key={i}>
                <td className="p-4 border-b border-slate-200">
                  <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
                </td>
                <td className="p-4 border-b border-slate-200">
                  <div className="h-4 w-16 bg-gray-300 rounded animate-pulse"></div>
                </td>
                <td className="p-4 border-b border-slate-200">
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                </td>
                <td className="p-4 border-b border-slate-200"></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>

        </div>
            
    
</div>
</div>
    </div>
  );
}
