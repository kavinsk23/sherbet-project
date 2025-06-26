import React from "react";
import Navbar from "./components/layout/navbar/navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-renault-bg-dark">
      <Navbar />

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-nouvel-bold text-renault-text-inverse mb-4">
            Welcome to Renault Group Rewards
          </h1>
          <p className="text-renault-text-secondary font-dm-sans">
            Your navbar is now integrated and ready to use!
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
