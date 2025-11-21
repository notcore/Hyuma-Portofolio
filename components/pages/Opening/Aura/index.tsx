"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Aura = () => {
    const [show, setShow] = useState(false);

    // muncul setelah 5 detik
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 700, opacity: 0 }}
                    animate={{ y: 150, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="z-40 absolute left-1/2 -translate-x-1/2 top-0"
                >
                    <div className="flex relative min-w-screen">
                        <img
                            src="/assets/svg/shape/aura.svg"
                            alt="Aura"
                            className="xl:w-screen w-[900px] h-[800px]"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Aura;
