import React from "react";

interface QuestionProps {
  questionNumber?: number;
  questionText?: string;
  instructionText?: string;
  className?: string;
}

const Question: React.FC<QuestionProps> = ({
  questionNumber = 1,
  questionText = "Place the features that are available with Scenic E-Tech electric",
  instructionText = "Drag the correct labels into the corresponding locations:",
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      {/* Question Title */}
      <h2 className="text-2xl font-dm-sans mb-4 mt-4 lg:mt-0">
        <span className="text-renault-orange">Question {questionNumber}:</span>{" "}
        <span className="text-renault-text-primary">{questionText}</span>
      </h2>

      {/* Instructions */}
      <p className="text-lg text-renault-blue font-dm-sans">
        {instructionText}
      </p>
    </div>
  );
};

export default Question;
