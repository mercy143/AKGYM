import React from "react";
import trainerImg_1 from "../assets/Trainer-1.png";
import { motion } from "framer-motion";

const services = [
  {
    title: "Personal Training",
    desc: "One-on-one coaching to help you achieve faster results.",
    duration: "Per Session",
    price: "$25",
  },
  {
    title: "Group Classes",
    desc: "High-energy classes that keep you motivated and fit.",
    duration: "Monthly",
    price: "$60",
  },
  {
    title: "Nutrition Plans",
    desc: "Custom diet plans designed for your body and fitness goals.",
    duration: "Custom",
    price: "$40",
  },
  {
    title: "Bodybuilding",
    desc: "Professional guidance to build serious muscle mass.",
    duration: "Monthly",
    price: "$80",
  },
  {
    title: "Cardio Zone",
    desc: "Access to modern treadmills, bikes, and ellipticals.",
    duration: "Monthly",
    price: "$50",
  },
  {
    title: "Spa & Recovery",
    desc: "Relax, recover, and rejuvenate after intense workouts.",
    duration: "Per Visit",
    price: "$30",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 text-center overflow-hidden"
    >
      {/* Gradient Background with Texture */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(220,0,0,0.3), rgba(0,0,0,0.3))",
          backgroundBlendMode: "overlay",
          backgroundImage: `url(${trainerImg_1})`,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Moving Title */}
      <motion.h2
        className="relative text-4xl font-heading text-gymRed mb-12 z-10"
        animate={{ x: [-10, 10, -10] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      >
        Our Premium Services
      </motion.h2>

      {/* Services Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative w-80 h-64 perspective"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{
              boxShadow: [
                "0 0 0px rgba(255, 0, 0, 0)",
                "0 0 20px rgba(255, 0, 0, 0.6)",
                "0 0 0px rgba(255, 0, 0, 0)",
              ],
            }}
          >
            {/* 3D Card */}
            <motion.div
              animate={{
                rotateX: [0, 5, 0, -5, 0],
                rotateY: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180"
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-white p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center backface-hidden">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-gradient-to-br from-gymRed to-black text-white p-6 rounded-2xl shadow-2xl rotate-y-180 flex flex-col justify-center items-center backface-hidden">
                <p className="text-lg mb-2 font-semibold">
                  Duration: {service.duration}
                </p>
                <p className="text-2xl font-extrabold mb-4">{service.price}</p>

                {/* Pulsing Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 15px rgba(255,255,255,0.8)",
                      "0 0 0px rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="bg-white text-gymRed font-bold px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
                >
                  Join Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
