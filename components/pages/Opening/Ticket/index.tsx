"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Ticket = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
 
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.location.href = "/user";
  };

  const ticketVariants = {
    initial: { y: isMobile ? 1020 : 500, opacity: 1 },
    animate: { y: isMobile ? 90 : 150, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={ticketVariants.initial}
          animate={ticketVariants.animate}
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
