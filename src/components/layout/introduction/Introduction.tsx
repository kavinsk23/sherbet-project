import React from "react";
import Button from "../../ui/common/Button";
import cup from "../../../assets/images/cup.svg";
import powered from "../../../assets/images/powered.png";
import motor from "../../../assets/images/motor.png";

// TypeScript interfaces
interface QuizBadgeProps {
  type?: string;
  bonusPoints?: string;
  badgeImage?: string;
  badgeAlt?: string;
}

interface IntroductionProps {
  title?: string;
  subtitle?: string;
  description?: string[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  heroImage?: string;
  heroImageAlt?: string;
  quizBadge?: QuizBadgeProps;
  onStartQuiz?: () => void;
  className?: string;
}

// Quiz Badge Component - Hardcoded with actual images
const QuizBadge: React.FC<QuizBadgeProps> = () => {
  return (
    <div className="space-y-6 flex lg:flex-col">
      {/* Header with Trophy and Text */}
      <div className="flex items-center lg:flex-row lg:items-start space-x-4 mr-10">
        {/* Trophy Icon - Using imported cup image */}
        <img
          src={cup}
          alt="Trophy icon"
          className="w-20 h-full flex-shrink-0 flex items-center justify-center"
        />

        {/* Text Content - Hardcoded */}
        <div className="flex flex-col mr-5">
          <div className="text-3xl font-dm-sans text-renault-text-primary leading-tight">
            QUIZ
          </div>
          <div className="text-2xl font-dm-sans text-renault-text-primary leading-tight">
            2K Bonus
          </div>
          <div className="text-lg font-dm-sans text-renault-text-secondary">
            Points Available
          </div>
        </div>
      </div>

      {/* Powered Badge Image - Using imported powered image */}
      <div className="w-48 h-72 max-w-xs">
        <img
          src={powered}
          alt="Powered quiz badge"
          className="w-full h-72 object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

// Main Introduction Component
const Introduction: React.FC<IntroductionProps> = ({
  title = "Qualify for Q4 incentive entry",
  subtitle = "Spotlight on the Renault Scenic E-Tech",
  description = [
    "Unlock 2000 reward points effortlessly by taking a short technical knowledge quiz our all new electric vehicle! This is a fantastic opportunity to boost your rewards while enhancing your understanding of the latest advancements in EV technology.",
    "Our quick and informative quiz will test your knowledge and keep you up-to-date with the industry's cutting-edge developments. Don't miss out on this chance to earn extra points and become an EV expert. Get ready to accelerate your rewards today!",
  ],
  ctaTitle = "Take the test before December 31",
  ctaSubtitle = "When you are ready, please click here to begin the quiz:",
  ctaButtonText = "Start Quiz",
  heroImage = "/images/ev-chassis.png", // Replace with actual hero image path
  heroImageAlt = "Electric vehicle chassis and battery technology",
  quizBadge = {},
  onStartQuiz,
  className = "",
}) => {
  function onButtonClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section
      className={`m-4 bg-renault-bg-section rounded-lg p-4 mt-0 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Exact three-column layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Column - Quiz Badge (Fixed width) */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <QuizBadge />
          </div>
          <div className="flex flex-col w-full ">
            <div className="flex flex-col xl:flex-row gap-6">
              {/* Middle Column - Content (Flexible) */}
              <div className="flex-1 max-w-full lg:max-w-2xl space-y-6">
                {/* Main Header */}
                <div className="space-y-4">
                  <h1 className="text-2xl font-dm-sans text-renault-text-primary leading-tight font-semibold">
                    {" "}
                    {title}
                  </h1>
                  <h2 className="text-base lg:text-lg font-dm-sans">
                    {" "}
                    {subtitle}
                  </h2>
                </div>

                {/* Description Paragraphs */}
                <div className="space-y-6">
                  {description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base font-dm-sans leading-relaxed font-light"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right Column - Hero Image (Fixed width) */}
              <div className="flex-shrink-0">
                <div className="bg-renault-bg-section-2 rounded-2xl p-6 w-[360px] h-[260px] relative">
                  <img
                    src={motor}
                    alt={heroImageAlt}
                    className="rounded-2xl absolute top-[-20px] right-[-20px] w-[426px] h-[260px]"
                  />
                </div>
              </div>
            </div>
            {/* Call to Action Section */}
            <section
              className={`bg-renault-bg-section-2 py-4 rounded-lg p-2 pl-2 px-6 mt-4 ${className}`}
            >
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Left Side - Hardcoded Text Content */}
                  <div className="flex-1">
                    <h2 className="text-xl font-dm-sans text-renault-text-primary mb-1 leading-tight">
                      Take the test before December 31
                    </h2>
                    <p className="ml-4 text-base font-dm-sans text-renault-text-secondary">
                      When you are ready, please click here to begin the quiz:
                    </p>
                  </div>

                  {/* Right Side - Hardcoded Button */}
                  <div className="flex-shrink-0">
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={onButtonClick}
                      className="px-6 py-2 h-10 font-dm-sans font-medium"
                    >
                      Start Quiz
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
