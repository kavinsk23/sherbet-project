import React from "react";
import Question from "../../ui/common/Question";
import QuestionNumber from "../../ui/common/QuestionNumber";
import correct from "../../../assets/icons/correct.svg";
import wrong from "../../../assets/icons/wrong.svg";
import Button from "../../ui/common/Button";

interface OptionProps {
  title: string;
  image: string;
}

const Option: React.FC<OptionProps> = ({ title, image }) => {
  return (
    <div className="relative p-6 rounded-xl cursor-pointer transition-all duration-200 bg-renault-bg-section h-52 w-52 flex items-center justify-center">
      <div className="text-center flex flex-col items-center">
        {/* Display the image above the title */}
        <h3 className="text-base font-dm-sans text-renault-text-primary leading-snug">
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

const Quiz2: React.FC = () => {
  // Added image paths for each option
  const options = [
    {
      title: "Blind Spot Monitor",
      isCorrect: false,
      image: wrong,
    },
    {
      title: "Heated driver & front passenger seats",
      isCorrect: false,
      image: wrong,
    },
    {
      title: '20" Alloy wheels',
      isCorrect: false,
      image: wrong,
    },
    {
      title: '12.3" HD Smart Connect',
      isCorrect: false,
      image: wrong,
    },
    {
      title: "Energy Saving Heat Pump",
      isCorrect: true,
      image: correct,
    },
    {
      title: "Emergency steering Assist",
      isCorrect: false,
      image: wrong,
    },
  ];
  // Function to chunk the options into groups of 3 for 3 per row
  const chunkArray = (array: any[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const optionRows = chunkArray(options, 3);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row">
        {/* Question Number - Sidebar on desktop, top on mobile */}
        <div className="flex lg:justify-center">
          <QuestionNumber questionsRemaining={3} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col space-y-6">
          <Question
            questionNumber={2}
            questionText="What gives the Scenic E-Tech electric a superior cruising range? Select one of the answers below:"
            instructionText="Select one of the following:"
          />

          {/* Multiple Choice Options */}
          <div className="space-y-4">
            {optionRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap gap-4 justify-start"
              >
                {row.map((option, index) => {
                  const absoluteIndex = rowIndex * 3 + index;
                  return (
                    <div key={absoluteIndex} className="w-64 flex-shrink-0">
                      <Option title={option.title} image={option.image} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <Button
              variant="secondary"
              size="lg"
              className="px-6 py-2 h-10 font-dm-sans font-medium"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz2;
