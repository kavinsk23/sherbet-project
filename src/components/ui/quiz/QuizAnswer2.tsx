import React from "react";
import correct from "../../../assets/icons/correct.svg";
import wrong from "../../../assets/icons/wrong.svg";

interface OptionProps {
  title: string;
  description: string;
  image: string;
  isSelected?: boolean;
}

/**
 * Option Component - Individual answer option with title, description, and status icon
 * Used for multi-select questions where users can choose multiple correct answers
 */
const Option: React.FC<OptionProps> = ({
  title,
  description,
  image,
  isSelected = false,
}) => {
  return (
    <div className="flex">
      <div className="p-6 border-2 w-full rounded-xl cursor-pointer transition-all duration-200 bg-renault-bg-section min-h-40 flex flex-col justify-between">
        {/* Content container */}
        <div className="flex flex-col space-y-3">
          {/* Title */}
          <h3 className="text-lg font-dm-sans font-semibold text-renault-text-primary leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm font-dm-sans text-renault-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {/* Status icon - positioned at bottom right */}
      <img
        src={image}
        alt="Status icon"
        className="bottom-4 right-4 w-8 h-8 object-contain my-auto ml-2"
      />
    </div>
  );
};

interface QuizAnswer2Props {
  className?: string;
}

/**
 * QuizAnswer2 Component - Multi-select quiz answers for Question 3
 * Displays statements about the Scenic E-Tech electric with checkmark/cross indicators
 * Allows multiple correct answers to be selected
 */
const QuizAnswer2: React.FC<QuizAnswer2Props> = ({ className = "" }) => {
  // Quiz options data - statements about Scenic E-Tech electric features
  const options = [
    {
      title: "Superb handling",
      description:
        "The new AWD X-MODE enhances performance and safety to enable Scenic E-Tech electric to tackle any terrain with fantastic all-wheel drive capabilities.",
      isCorrect: true,
      image: correct,
      isSelected: true,
    },
    {
      title: "Advanced battery technology",
      description:
        "We provide up to 8 years battery warranty with the Scenic E-Tech electric, through an initial 8 years manufacturer warranty from the vehicle's registration date that can be extended with regular servicing at an authorised Renault Retailer.",
      isCorrect: false,
      image: wrong,
      isSelected: false,
    },
    {
      title: "Charging",
      description:
        "You can even plug your Scenic E-Tech electric into a domestic socket, this is the slowest way to charge, but can be convenient.",
      isCorrect: true,
      image: correct,
      isSelected: true,
    },
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Render each option as a full-width statement */}
      {options.map((option, index) => (
        <div key={index} className="w-full">
          <Option
            title={option.title}
            description={option.description}
            image={option.image}
            isSelected={option.isSelected}
          />
        </div>
      ))}
    </div>
  );
};

export default QuizAnswer2;
