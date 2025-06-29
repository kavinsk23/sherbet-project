import React from "react";
import HeroSection from "./components/ui/hero-section/HeroSection";
import Navbar from "./components/layout/navbar/Navbar";
import Landing from "./components/layout/landing/Landing";
import Introduction from "./components/layout/introduction/Introduction";
import Footer from "./components/layout/footer/Footer";
import Quiz1 from "./components/layout/quiz-1/Quiz1";
import Quiz2 from "./components/layout/quiz-2/Quiz2";
import Quiz3 from "./components/layout/quiz-3/Quiz3";
import Quiz4 from "./components/layout/quiz-4/Quiz4";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Landing />
      <Introduction />
      <Quiz1 />
      <Quiz2 />
      <Quiz3 />
      <Quiz4 />
      <Footer />
    </div>
  );
};

export default App;
