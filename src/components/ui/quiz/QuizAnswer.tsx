import React from "react";

interface OptionProps {
  title: string;
  image: string;
}

const QuizAnswer: React.FC<OptionProps> = ({ title, image }) => {
  return (
    <div className="relative p-6 rounded-xl cursor-pointer transition-all duration-200 bg-renault-bg-section-2 h-52 w-52 flex items-center justify-center">
      <div className="text-center flex flex-col items-center">
        <h3 className="text-sm font-dm-sans text-renault-text-primary leading-snug">
          {title}
        </h3>
        <img
          src={image}
          alt=""
          className="w-10 h-10 mb-4 object-contain absolute bottom-0 right-2"
        />
      </div>
    </div>
  );
};

export default QuizAnswer;
