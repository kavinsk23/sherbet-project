import React from "react";
import Question from "../../ui/common/Question";
import QuestionNumber from "../../ui/common/QuestionNumber";
import Button from "../../ui/common/Button";
import QuizAnswer2 from "../../ui/quiz/QuizAnswer2";

const Quiz3: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-renault-bg-section m-4 rounded-lg">
      <div className="flex flex-col lg:flex-row">
        {/* Question Number Sidebar - Displays on left for desktop, top for mobile */}
        <div className="flex lg:justify-center">
          <QuestionNumber questionsRemaining={2} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col space-y-6">
          {/* Question Header */}
          <Question
            questionNumber={3}
            questionText="Which of the following statements about the all new Scenic E-Tech electric are correct?"
            instructionText="Select one or more of the following:"
          />

          {/* Quiz Answer Component - Multi-select statements */}
          <QuizAnswer2 />

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

export default Quiz3;
