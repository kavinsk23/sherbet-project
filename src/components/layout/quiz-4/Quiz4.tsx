import React, { useState, useEffect } from "react"; // Add useEffect import
import Question from "../../ui/common/Question";
import QuestionNumber from "../../ui/common/QuestionNumber";
import Button from "../../ui/common/Button";
import correctIcon from "../../../assets/icons/correct.svg";

const Quiz4: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(218); // Initialize with 218
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Optional: If you want the slider to animate to 218 when the component mounts
  useEffect(() => {
    // You can use a timeout to animate the slider if desired
    let currentValue = 0;
    const interval = setInterval(() => {
      if (currentValue < 218) {
        currentValue += 2;
        setSliderValue(currentValue);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once on mount

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const isCorrect = sliderValue === 218;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-renault-bg-section m-4 rounded-lg">
      <div className="flex flex-col lg:flex-row">
        {/* Question Number Sidebar */}
        <div className="flex lg:justify-center">
          <QuestionNumber questionsRemaining={1} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col space-y-6">
          {/* Question Header */}
          <Question
            questionNumber={4}
            questionText="What is the power output of the 160KW motor & 71.4 KWH battery:"
            instructionText="Drag the slider:"
          />

          {/* Slider Component */}
          <div className="w-full max-w-2xl space-y-2">
            {/* Slider Track with Labels */}
            <div className="relative">
              {/* Visual Slider Track */}
              <div className="flex items-center h-12">
                {/* Left Label (0) */}
                <span className="text-base font-dm-sans font-bold text-renault-text-primary w-8 text-center">
                  0
                </span>

                {/* Track Line */}
                <div className="flex-1 h-1 bg-renault-text-primary relative mx-2">
                  {/* Filled Portion */}
                  <div
                    className="absolute h-full bg-renault-orange" // Added bg-renault-orange for visibility
                    style={{ width: `${(sliderValue / 300) * 100}%` }}
                  ></div>

                  {/* Slider Thumb (Orange Circle) */}
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-renault-orange border-4 border-white shadow-md"
                    style={{
                      left: `${(sliderValue / 300) * 100}%`,
                      marginLeft: "-12px",
                      boxShadow:
                        "0 0 0 2px #FE8E38, 0 2px 8px rgba(0, 0, 0, 0.15)",
                    }}
                  ></div>
                </div>

                {/* Right Label (300) */}
                <span className="text-base font-dm-sans font-bold text-renault-text-primary w-12 text-center">
                  300
                </span>

                {/* Correct Icon (shown when submitted and correct) */}
                {isSubmitted && isCorrect && (
                  <img
                    src={correctIcon}
                    alt="Correct"
                    className="ml-2 w-6 h-6"
                  />
                )}
              </div>

              {/* 218 Label Below */}
              <div className="flex relative justify-center mt-1">
                <span className="absolute right-[29%] text-base font-bold font-dm-sans text-renault-blue">
                  218
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start pt-4 lg:pt-60">
            <Button
              variant="secondary"
              size="lg"
              className="px-6 py-2 h-10 font-dm-sans font-medium"
              onClick={handleSubmit}
              disabled={isSubmitted}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz4;
