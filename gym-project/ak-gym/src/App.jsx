import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Services from "./Components/Services.jsx";
import Pricing from "./Components/Pricing.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Trainer from "./Components/Trainer.jsx";

function App() {
  return (
    <div className="font-body bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <Trainer/>
      <Pricing />
    
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
