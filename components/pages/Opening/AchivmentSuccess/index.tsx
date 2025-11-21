"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AchivmentSuccess = () => {
    const [show, setShow] = useState(false);
 
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);
 
    useEffect(() => {
        if (!show) return;
        const timer = setTimeout(() => setShow(false), 3000);
        return () => clearTimeout(timer);
    }, [show]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: -120, opacity: 0 }}
                    animate={{ y: 20, opacity: 1 }}
                    exit={{ y: -120, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white z-40 shadow-sm border border-3 p-1 sm:p-2 border-slate-300 absolute left-1/2 -translate-x-1/2 top-0 rounded-md"
                >
                    <div className="flex relative">
                        <img
                            src="/assets/img/achivment/hearth.png"
                            className="sm:w-13 sm:h-13 w-10 h-10 object-cover"
                        />
                        <div className="grid grid-cols-1 mx-1 sm:mx-3">
                            <p className="sm:text-2xl text-md font-bold -mb-2 font-minecraft text-blue-600">
                                Success!
                            </p>
                            <p className="sm:text-xl text-[15px] font-minecraft">amnbil tiketnya</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AchivmentSuccess;
