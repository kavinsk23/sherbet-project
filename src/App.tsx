import React from "react";
import HeroSection from "./components/ui/hero-section/HeroSection";
import Navbar from "./components/layout/navbar/Navbar";
import Landing from "./components/layout/landing/Landing";
import Introduction from "./components/layout/introduction/Introduction";
import Footer from "./components/layout/footer/Footer";
import Quiz1 from "./components/layout/quiz-1/Quiz1";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Landing />
      <Introduction />
      <Quiz1 />
      <Footer />
    </div>
  );
};

export default App;
