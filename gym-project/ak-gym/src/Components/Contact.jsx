import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showOptions, setShowOptions] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation helpers
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    formData.name.trim().length >= 2 &&
    isValidEmail(formData.email) &&
    formData.message.trim() !== "";

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Please fill all fields correctly!");
      return;
    }
    setShowOptions(true);
  };

  // Contact info
  const telegramUsername = "Lbeiyesus";
  const whatsappNumber = "251912345678";
  const instagramUsername = "akgym_official";

  const messageText = encodeURIComponent(
    `Hello AK-GYM 👋,\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
  );

  const handleContactClick = (url) => {
    window.open(url, "_blank");
    setShowOptions(false);
    setShowSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setShowSuccess(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-gymBlack text-center"
    >
      <motion.h2
        className="text-5xl font-heading text-gymRed mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-gymRed transition-all"
              />
              {formData.name.trim().length >= 2 && (
                <CheckCircle className="absolute right-4 top-4 w-6 h-6 text-green-500" />
              )}
            </div>

            {/* Email field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-gymRed transition-all"
              />
              {formData.email && isValidEmail(formData.email) && (
                <CheckCircle className="absolute right-4 top-4 w-6 h-6 text-green-500" />
              )}
            </div>
          </div>

          {/* Message field */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-gymRed transition-all resize-none"
            ></textarea>
            {formData.message.trim() !== "" && (
              <CheckCircle className="absolute right-4 top-4 w-6 h-6 text-green-500" />
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 ${
              isFormValid
                ? "bg-gradient-to-r from-gymRed to-red-700 text-white hover:scale-105 shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
            }`}
          >
            Send Message
          </button>
        </form>

        {/* Contact info */}
        <div className="mt-14 text-gray-700 space-y-2">
          <p className="text-lg">
            📍{" "}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                "Addis Ababa Kara"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gymRed hover:underline"
            >
              Addis Ababa, Kara
            </a>
          </p>
          <p className="text-lg">
            📞{" "}
            <a
              href={`tel:+${whatsappNumber}`}
              className="text-gymRed hover:underline"
            >
              +251 912 345 678
            </a>
          </p>
          <p className="text-lg">
            📧{" "}
            <a
              href="mailto:info@akgym.com"
              className="text-gymRed hover:underline"
            >
              info@akgym.com
            </a>
          </p>
        </div>
      </div>

      {/* Contact Options Popup */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          >
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-80 text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Send via</h3>
              <div className="flex justify-center gap-6 text-4xl">
                <button
                  onClick={() =>
                    handleContactClick(
                      `https://t.me/${telegramUsername}?text=${messageText}`
                    )
                  }
                  className="text-sky-500 hover:scale-110 transition-transform"
                >
                  <FaTelegramPlane />
                </button>

                <button
                  onClick={() =>
                    handleContactClick(
                      `https://wa.me/${whatsappNumber}?text=${messageText}`
                    )
                  }
                  className="text-green-500 hover:scale-110 transition-transform"
                >
                  <FaWhatsapp />
                </button>

                <button
                  onClick={() =>
                    handleContactClick(
                      `https://www.instagram.com/${instagramUsername}/`
                    )
                  }
                  className="text-pink-500 hover:scale-110 transition-transform"
                >
                  <FaInstagram />
                </button>
              </div>

              <button
                onClick={() => setShowOptions(false)}
                className="mt-6 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-10 right-10 bg-green-500 text-white flex items-center gap-3 px-6 py-3 rounded-xl shadow-lg text-lg font-medium"
          >
            <CheckCircle className="w-6 h-6" />
            Message Sent 🎉
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
