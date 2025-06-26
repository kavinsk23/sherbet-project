import React from "react";
import HeroSection from "./components/ui/hero-section/HeroSection";
import Navbar from "./components/layout/navbar/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-renault-bg-dark">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
