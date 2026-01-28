import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  // Scroll handler
  const scrollToSection = (id = "services") => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Motion value for scroll
  const scrollY = useMotionValue(0);
  const yBackground = useTransform(scrollY, [0, 500], [0, -50]); // parallax effect

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50 overflow-hidden perspective-1000"
    >
      {/* Background Image with Zoom + Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613914-85f342c6d3ff?auto=format&fit=crop&w=1740&q=80')",
          y: yBackground, // <- parallax
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* 3D Content Container */}
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        {/* Movable Welcome Text */}
        <motion.p
          className="text-gray-200 uppercase tracking-widest mb-4 text-sm md:text-base"
          animate={{ x: ["-15px", "15px", "-15px"], rotateY: [0, 5, -5] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          Welcome to AK-GYM
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-heading font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gymRed to-red-700 drop-shadow-2xl"
          animate={{
            y: [0, -15, 0],
            rotateX: [0, 5, -5, 0],
            rotateY: [0, -5, 5, 0],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          Transform Your Body, Transform Your Life
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          Join AK-GYM and achieve your fitness goals with our world-class facilities, expert trainers, and motivating environment.
        </motion.p>

        {/* Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Join Now Button */}
          <motion.button
            whileHover={{ scale: 1.05, rotateX: -5, rotateY: 5 }}
            whileTap={{ scale: 0.95, rotateX: 2, rotateY: -2 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(255,0,0,0.5)",
                "0 0 20px rgba(255,0,0,0.7)",
                "0 0 10px rgba(255,0,0,0.5)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-gradient-to-r from-gymRed to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-3 px-8 rounded-lg shadow-2xl transition-all"
            onClick={() => scrollToSection("pricing")}
            type="button"
          >
            Join Now
          </motion.button>

          {/* Learn More Button */}
          <motion.button
            whileHover={{ scale: 1.05, rotateX: -3, rotateY: 3 }}
            whileTap={{ scale: 0.95, rotateX: 2, rotateY: -2 }}
            animate={{
              boxShadow: [
                "0 0 5px rgba(128,128,128,0.3)",
                "0 0 15px rgba(128,128,128,0.5)",
                "0 0 5px rgba(128,128,128,0.3)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-xl transition-all"
            onClick={() => scrollToSection("services")}
            type="button"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Secondary Text */}
        <motion.p
          className="text-gray-300 text-sm mt-6"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          Over 1,000 happy members achieving their goals!
        </motion.p>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => scrollToSection("services")}
      >
        <ChevronDownIcon className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
