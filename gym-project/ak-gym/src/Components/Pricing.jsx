import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

const plans = [
  {
    name: "Basic",
    daily: 2,
    monthly: 29,
    yearly: 290,
    features: ["Gym Access", "Group Classes", "Locker Access"],
    recommended: false,
  },
  {
    name: "Pro",
    daily: 4,
    monthly: 49,
    yearly: 490,
    features: ["All Basic Features", "Personal Training", "Nutrition Plan", "Sauna Access"],
    recommended: true,
  },
  {
    name: "Premium",
    daily: 6,
    monthly: 79,
    yearly: 790,
    features: ["All Pro Features", "VIP Access", "Unlimited Guest Passes", "Massage Therapy"],
    recommended: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle Join button click
  const handleJoin = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPlan) {
      setError("No plan selected.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        plan: selectedPlan.name,
        billing,
      };

      const res = await axios.post("http://localhost:5000/api/register", payload, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Registration response:", res.data);
      alert(`Thank you ${formData.name}! You have registered for the ${selectedPlan.name} plan (${billing}).`);

      // Reset form and close modal
      setFormData({ name: "", email: "", phone: "" });
      setShowForm(false);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="pricing"
      className="relative py-20 px-6 text-center overflow-hidden bg-gradient-to-br from-gray-50 via-red-50 to-gray-100"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-heading text-gymRed mb-6 relative z-10"
        animate={{ x: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        Membership Plans/Pricing
      </motion.h2>

      {/* Billing Toggle */}
      <div className="flex justify-center gap-4 mb-12 relative z-10">
        {["daily", "monthly", "yearly"].map((type) => (
          <button
            key={type}
            onClick={() => setBilling(type)}
            className={`py-2 px-6 rounded-full font-bold transition ${
              billing === type ? "bg-gymRed text-blue-300" : "bg-gray-300 text-gray-700"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className="relative w-80 h-96 perspective cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="relative w-full h-full rounded-2xl shadow-2xl transform-style-preserve-3d"
              animate={{
                rotateX: [0, 5, 0, -5, 0],
                rotateY: [0, -5, 0, 5, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-white p-6 rounded-2xl shadow-xl flex flex-col justify-between items-center backface-hidden">
                {plan.recommended && (
                  <div className="absolute -top-4 right-0 bg-gymRed text-pink-400 font-bold px-4 py-1 rounded-bl-lg shadow-lg">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                  <p className="text-gymRed text-xl mb-2">
                    ${billing === "daily" ? plan.daily : billing === "monthly" ? plan.monthly : plan.yearly}
                    <span className="text-gray-600 text-base">/{billing}</span>
                  </p>
                  <ul className="text-gray-600 mb-4 text-left space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckIcon className="w-5 h-5 text-gymRed flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleJoin(plan)}
                  className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 ${
                    plan.recommended
                      ? "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 shadow-lg hover:shadow-xl text-lg"
                      : "bg-gradient-to-r from-gymRed to-red-600 hover:from-red-500 hover:to-red-700 shadow-md hover:shadow-lg"
                  }`}
                >
                  Join Now
                </motion.button>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-gradient-to-br from-gymRed to-black text-white p-6 rounded-2xl shadow-2xl rotate-y-180 flex flex-col justify-center items-center backface-hidden">
                <p className="text-lg mb-2 font-semibold">
                  ${billing === "daily" ? plan.daily : billing === "monthly" ? plan.monthly : plan.yearly} / {billing}
                </p>
                <p className="text-sm mb-4">{plan.features.join(", ")}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleJoin(plan)}
                  className="bg-white text-gymRed font-bold px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
                >
                  Join Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Registration Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-8 w-96 max-w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-lg"
              onClick={() => setShowForm(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Register for {selectedPlan?.name} Plan
            </h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gymRed"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gymRed"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gymRed"
              />

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="bg-gymRed text-green-600 font-bold py-3 rounded-lg hover:bg-red-700 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}
