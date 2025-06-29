import React from "react";
import Question from "../../ui/common/Question";
import QuestionNumber from "../../ui/common/QuestionNumber";
import CarDropZones from "../../ui/quiz/CarDropZones";
import FeatureTags from "../../ui/quiz/FeatureTags";

const Quiz1 = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row">
        {/* Question Number - Sidebar on desktop, top on mobile */}
        <div className="flex lg:justify-center">
          <QuestionNumber />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col space-y-6">
          <Question />
          <div className="space-y-6">
            <FeatureTags />
            <CarDropZones />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz1;
