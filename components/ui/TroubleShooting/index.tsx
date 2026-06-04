        // <div className="border-t border-slate-200 pt-2 max-w-2xl">
        //   <button 
        //     onClick={() => {
        //       setIsTroubleOpen(!isTroubleOpen);
        //       setActiveQuestion(null);
        //     }}
        //     className="w-full flex items-center justify-between text-left py-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
        //   >
        //     <span className="font-coolvetica text-base">Troubleshooting</span>
        //     {isTroubleOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        //   </button>

        //   {isTroubleOpen && (
        //     <div className="space-y-2 pt-2 border-t border-slate-100 mt-1">
              
        //       {/* Dropdown Tingkat 2: Pertanyaan 1 */}
        //       <div className="border-b border-slate-100 pb-1">
        //         <button
        //           onClick={() => toggleQuestion("q1")}
        //           className="w-full flex items-center justify-between text-left py-1.5 text-xs font-medium text-slate-800 hover:text-slate-600"
        //         >
        //           <span>bagaimana jika perangkat router tidak terdeteksi?</span>
        //           {activeQuestion === "q1" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        //         </button>
        //         {activeQuestion === "q1" && (
        //           <ul className="list-decimal pl-4 pb-2 pt-1 text-xs text-slate-500 space-y-1.5 leading-relaxed">
        //             <li>pastikan router terkoneksi dengan PC anda</li>
        //             <li>pastikan kabel RJ45 benar-benar terhubung dan lampu indikator menyala</li>
        //             <li>pastikan kabel RJ45 tidak memiliki cacat atau kesalahan pembuatan, dan jika dicek menggunakan tester lampu berhasil menyala dengan urut</li>
        //             <li>pastikan port router tidak memiliki cacat</li>
        //           </ul>
        //         )}
        //       </div>

        //       {/* Dropdown Tingkat 2: Pertanyaan 2 */}
        //       <div className="border-b border-slate-100 pb-1">
        //         <button
        //           onClick={() => toggleQuestion("q2")}
        //           className="w-full flex items-center justify-between text-left py-1.5 text-xs font-medium text-slate-800 hover:text-slate-600"
        //         >
        //           <span>tidak bisa masuk kedalam konfigurasi?</span>
        //           {activeQuestion === "q2" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        //         </button>
        //         {activeQuestion === "q2" && (
        //           <ul className="list-decimal pl-4 pb-2 pt-1 text-xs text-slate-500 space-y-1.5 leading-relaxed">
        //             <li>pastikan anda masuk menggunakan mac address</li>
        //             <li>copot kabel RJ45 pada PC yang tersambung ke router lalu pasang ulang</li>
        //             <li>update atau reset ulang winbox</li>
        //             <li>pastikan kabel RJ45 tidak memiliki cacat atau kesalahan pembuatan, dan jika dicek menggunakan tester lampu berhasil menyala dengan urut</li>
        //           </ul>
        //         )}
        //       </div>

        //     </div>
        //   )}
        // </div>