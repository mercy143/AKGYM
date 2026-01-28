import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu after click
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-gymRed cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          AK-GYM
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("hero")} className="text-gray-800 hover:text-gymRed font-medium">
            Home
          </button>
          <button onClick={() => scrollToSection("services")} className="text-gray-800 hover:text-gymRed font-medium">
            Services
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-gray-800 hover:text-gymRed font-medium">
            Pricing
          </button>
          <button onClick={() => scrollToSection("trainers")} className="text-gray-800 hover:text-gymRed font-medium">
            Trainers
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-800 hover:text-gymRed font-medium">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-gymRed focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-2 px-4 py-2">
          <button onClick={() => scrollToSection("hero")} className="text-gray-800 hover:text-gymRed font-medium">
            Home
          </button>
          <button onClick={() => scrollToSection("services")} className="text-gray-800 hover:text-gymRed font-medium">
            Services
          </button>
          <button onClick={() => scrollToSection("trainers")} className="text-gray-800 hover:text-gymRed font-medium">
            Trainers
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-gray-800 hover:text-gymRed font-medium">
            Pricing
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-800 hover:text-gymRed font-medium">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
