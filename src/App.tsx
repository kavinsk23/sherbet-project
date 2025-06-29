import React from "react";
import HeroSection from "./components/ui/hero-section/HeroSection";
import Navbar from "./components/layout/navbar/Navbar";
import Landing from "./components/layout/landing/Landing";
import Introduction from "./components/layout/introduction/Introduction";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Landing />
      <Introduction />
    </div>
  );
};

export default App;
