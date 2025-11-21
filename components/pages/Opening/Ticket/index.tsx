"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Ticket = () => {
    const [show, setShow] = useState(false);
 
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);
 
    const handleClick = () => {
        window.location.href = "/user"; 
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 1020, opacity: 1 }}
                    animate={{ y: 90, opacity: 1 }}
                    transition={{ duration: 3 }}
                    className="z-40 absolute left-1/2 -translate-x-1/2 top-0 cursor-pointer"
                    onClick={handleClick}
                >
                    <div className="flex relative">
                        <img
                            src="/assets/img/ticket/ticket.png"
                            alt="Ticket"
                            className="sm:max-w-[250px]"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Ticket;
