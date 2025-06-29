import React from "react";
import Question from "../../ui/common/Question";
import QuestionNumber from "../../ui/common/QuestionNumber";
import correct from "../../../assets/icons/correct.svg";
import wrong from "../../../assets/icons/wrong.svg";
import Button from "../../ui/common/Button";
import QuizAnswer from "../../ui/quiz/QuizAnswer";

const Quiz2: React.FC = () => {
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
        <div className="flex lg:justify-center">
          <QuestionNumber questionsRemaining={3} />
        </div>

        <div className="flex-1 flex flex-col space-y-6">
          <Question
            questionNumber={2}
            questionText="What gives the Scenic E-Tech electric a superior cruising range? Select one of the answers below:"
            instructionText="Select one of the following:"
          />

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
                      <QuizAnswer title={option.title} image={option.image} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

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
