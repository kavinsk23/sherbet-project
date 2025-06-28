import React from "react";
import HeroSection from "./components/ui/hero-section/HeroSection";
import Navbar from "./components/layout/navbar/Navbar";
import Landing from "./components/layout/landing/Landing";

const App = () => {
  return (
    <div className="min-h-screen bg-renault-bg-dark">
      <Navbar />
      <HeroSection />
      <Landing />
    </div>
  );
};

export default App;
