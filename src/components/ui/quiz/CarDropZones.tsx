import React from "react";
import car from "../../../assets/images/car.png";

interface CarStylingLayoutProps {
  className?: string;
}

const CarStylingLayout: React.FC<CarStylingLayoutProps> = ({
  className = "",
}) => {
  return (
    <div className={`mt-6 sm:mt-8 ${className}`}>
      {/* Main container with justify-between */}
      <div className="flex justify-between items-center">
        {/* Left side - Styling section */}
        <div className="flex flex-col mb-auto">
          <div className="flex items-center mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg lg:text-xl font-dm-sans text-renault-text-primary mr-2 sm:mr-4">
              Styling
            </h3>
            <svg
              className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          {/* Left drop zones */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <div className="w-20 sm:w-32 md:w-40 lg:w-48 xl:w-64 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="w-20 sm:w-32 md:w-40 lg:w-48 xl:w-64 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
          </div>
        </div>

        {/* Center - Car image */}
        <div className="flex justify-center items-center mx-2 sm:mx-4 lg:mx-8">
          <img
            src={car}
            alt="Renault Scenic E-Tech electric"
            className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 object-contain max-w-full"
          />
        </div>

        {/* Right side - Comfort & Safety section */}
        <div className="flex flex-col items-end">
          <div className="flex items-center mb-4 sm:mb-6">
            <svg
              className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-2 sm:mr-4 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <h3 className="text-base sm:text-lg lg:text-xl font-dm-sans text-renault-text-primary">
              Comfort & Safety
            </h3>
          </div>

          {/* Right drop zones */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <div className="w-20 sm:w-32 md:w-40 lg:w-48 xl:w-64 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="w-20 sm:w-32 md:w-40 lg:w-48 xl:w-64 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="w-20 sm:w-32 md:w-40 lg:w-48 xl:w-64 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="w-20 sm:w-32 md:w-40 lg:w-48 xl:w-64 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarStylingLayout;
