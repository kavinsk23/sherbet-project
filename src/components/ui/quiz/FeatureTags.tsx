import React from "react";

interface FeatureTagsProps {
  className?: string;
}

const FeatureTags: React.FC<FeatureTagsProps> = ({ className = "" }) => {
  const features = [
    '18" Alloy wheels',
    "Advanced Parking Assist",
    "LED Headlights",
    "Energy Saving Heat Pump",
    "Kick-activated Power back door",
    "Panoramic roof",
    "Apple CarPlay™ & Go Navigation",
  ];

  return (
    <div
      className={`p-6 my-4 border border-dashed border-renault-gray-400 ${className}`}
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        {/* First row - 4 items */}
        {features.slice(0, 4).map((feature, index) => (
          <div
            key={index}
            className="bg-renault-orange-light bg-opacity-30 border border-renault-gray-400 border-dashed rounded-lg px-4 py-3 text-center"
          >
            <span className="text-sm font-dm-sans text-renault-text-secondary">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Second row - 3 items */}
        {features.slice(4).map((feature, index) => (
          <div
            key={index + 4}
            className="bg-renault-orange-light bg-opacity-30 border border-renault-gray-400 border-dashed rounded-lg px-4 py-3 text-center"
          >
            <span className="text-sm font-dm-sans text-renault-text-secondary">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTags;
