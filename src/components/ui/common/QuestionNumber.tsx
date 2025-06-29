import React from "react";
import powered from "../../../assets/images/powered.png";
import edit from "../../../assets/icons/edit.svg";

interface QuestionNumberProps {
  questionsRemaining?: number;
  className?: string;
}

const QuestionNumber: React.FC<QuestionNumberProps> = ({
  questionsRemaining = 4,
  className = "",
}) => {
  return (
    <div className="flex">
      <div className={`space-y-6 w-60 ${className}`}>
        <div className=""></div>
        {/* Question Counter */}
        <div className="bg-renault-card-bg border-2 border-renault-text-primary rounded-2xl p-6">
          <div className="flex items-center space-x-4">
            {/* Question Count */}
            <div className="flex flex-row mr-4">
              <div>
                <img src={edit} alt="edit" className="h-12 mr-2" />
              </div>
              <div className="text-4xl font-dm-sans-bold mr-2 items-center flex text-renault-text-primary leading-none">
                {questionsRemaining}
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-dm-sans text-renault-text-secondary leading-tight">
                  Questions
                </div>
                <div className="text-lg font-dm-sans text-renault-text-secondary leading-tight">
                  Remaining
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Powered Badge */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src={powered}
            alt="Powered badge"
            className="w-66 h-72 object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="w-[2px] h-[460px] ml-4 mr-8 bg-renault-orange hidden lg:block"></div>
    </div>
  );
};

export default QuestionNumber;
