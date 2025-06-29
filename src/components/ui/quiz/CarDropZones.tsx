import React from "react";
import car from "../../../assets/images/car.png";

interface CarDropZonesProps {
  carImageUrl?: string;
  className?: string;
}

const CarDropZones: React.FC<CarDropZonesProps> = ({
  carImageUrl = "",
  className = "",
}) => {
  return (
    <div className={`mt-6 sm:mt-8 ${className}`}>
      {/* Drop zones and car container */}
      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-center space-y-8 lg:space-y-0">
        {/* Mobile/Tablet: Styling section at top */}
        <div className="lg:hidden">
          <div className="flex items-center justify-center mb-6">
            <h3 className="text-lg sm:text-xl font-dm-sans text-renault-text-primary mr-3 sm:mr-4">
              Styling
            </h3>
            <svg
              className="w-5 sm:w-6 h-5 sm:h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          {/* Mobile styling drop zones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
            <div className="h-12 sm:h-14 lg:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="h-12 sm:h-14 lg:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
          </div>
        </div>

        {/* Desktop: Left side - Styling drop zone */}
        <div className="hidden lg:flex flex-col items-start">
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-dm-sans text-renault-text-primary mr-4">
              Styling
            </h3>
            <svg
              className="w-6 h-6 ml-2"
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

          {/* Desktop left drop zones */}
          <div className="space-y-4">
            <div className="w-48 xl:w-64 h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="w-48 xl:w-64 h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
          </div>
        </div>

        {/* Center - Car image */}
        <div className="flex-shrink-0 flex justify-center">
          <img
            src={car}
            alt="Renault Scenic E-Tech electric"
            className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-contain max-w-full"
          />
        </div>

        {/* Mobile/Tablet: Comfort & Safety section at bottom */}
        <div className="lg:hidden">
          <div className="flex items-center justify-center mb-6">
            <svg
              className="w-5 sm:w-6 h-5 sm:h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <h3 className="text-lg sm:text-xl font-dm-sans text-renault-text-primary ml-3 sm:ml-4">
              Comfort & Safety
            </h3>
          </div>

          {/* Mobile comfort & safety drop zones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="h-12 sm:h-14 lg:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="h-12 sm:h-14 lg:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="h-12 sm:h-14 lg:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="h-12 sm:h-14 lg:h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
          </div>
        </div>

        {/* Desktop: Right side - Comfort & Safety drop zone */}
        <div className="hidden lg:flex flex-col items-end ml-6 xl:ml-8">
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
            <h3 className="text-xl font-dm-sans text-renault-text-primary ml-4">
              Comfort & Safety
            </h3>
          </div>

          {/* Desktop right drop zones */}
          <div className="space-y-4">
            <div className="w-48 xl:w-64 h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="w-48 xl:w-64 h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="w-48 xl:w-64 h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
            <div className="w-48 xl:w-64 h-16 border-2 border-dashed border-renault-gray-300 rounded-lg bg-renault-bg-light"></div>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-start">
        <button className="bg-renault-green hover:bg-renault-green-dark text-white font-dm-sans font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CarDropZones;
