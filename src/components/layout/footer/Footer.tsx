import React from "react";

// TypeScript interfaces
interface FooterProps {
  onSubscribe?: () => void;
  className?: string;
}

// Footer Component - Exact match to design with curved top
const Footer: React.FC<FooterProps> = ({ onSubscribe, className = "" }) => {
  return (
    <footer
      className={`bg-renault-bg-dark relative overflow-hidden ${className}`}
    >
      {/* White curved section at top */}
      <div className="absolute top-0 w-full h-32">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C480,160 960,160 1440,0 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Main footer content with proper spacing */}
      <div className="relative z-10 pt-24">
        {/* Newsletter Section */}
        <div className="bg-renault-yellow mx-8 mb-8 rounded-lg absolute w-[94%] top-[-20%] ">
          <div className="max-w-7xl mx-auto px-8 py-8 min-h-40 flex justify-center">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Left Side - Newsletter Text */}
              <div className="flex-1">
                <h2 className="text-xl lg:text-3xl font-nouvel text-renault-bg-dark leading-tight">
                  Sign up for exclusive Renault reward updates
                </h2>
              </div>

              {/* Right Side - Subscribe Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={onSubscribe}
                  className="bg-renault-bg-dark hover:bg-renault-gray-800 text-white  font-dm-sans font-medium px-8 py-4 rounded-md text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-renault-bg-dark"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="pt-16 pb-8 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Renault Group Logo */}
            <div className="text-center mb-16">
              <div className="text-4xl lg:text-5xl font-nouvel-bold text-white leading-tight">
                Renault
                <br />
                Group
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Left Side - Links */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <a
                  href="#terms"
                  className="text-white font-dm-sans text-base hover:text-renault-yellow transition-colors duration-200"
                >
                  Terms of use
                </a>
                <span className="hidden sm:inline text-white">|</span>
                <a
                  href="#support"
                  className="text-white font-dm-sans text-base hover:text-renault-yellow transition-colors duration-200"
                >
                  Registration Support
                </a>
              </div>

              {/* Right Side - Powered by Sherbet */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="text-right">
                  <div className="text-renault-yellow font-nouvel-bold text-2xl leading-none">
                    powered
                  </div>
                  <div className="text-white font-nouvel text-xl leading-none">
                    by<span className="font-nouvel-bold">Sherbet.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
