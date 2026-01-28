import React from "react";
import trainerImg from "../assets/Trainer.png";
import trainerImg_1 from "../assets/Trainer-1.png";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const trainers = [
  {
    name: "Libeyesus Doe",
    specialty: "Personal Training",
    img: trainerImg_1,
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Guas Be",
    specialty: "Yoga & Pilates",
    img: trainerImg,
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Mike Johnson",
    specialty: "Strength Training",
    img: trainerImg,
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
];

export default function Trainer() {
  return (
    <section id="trainers" className="py-20 px-4 bg-gray-50 text-center">
      <motion.h2
        className="text-4xl font-heading text-gymRed mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Trainers
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer.name}
            className="relative rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-96"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={trainer.img}
              alt={trainer.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/95 via-white/70 to-transparent">
               <h3 className="text-2xl font-bold text-gray-800">{trainer.name}</h3>
               <p className="text-gray-600 mb-4">{trainer.specialty}</p>
               <div className="flex justify-center gap-4 text-gymRed text-xl">
                 <a href={trainer.social.facebook}><FaFacebook /></a>
                 <a href={trainer.social.twitter}><FaTwitter /></a>
                 <a href={trainer.social.instagram}><FaInstagram /></a>
               </div>
             </div>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
