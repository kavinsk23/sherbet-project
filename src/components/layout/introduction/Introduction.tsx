import React from "react";
import Button from "../../ui/common/Button";
import cup from "../../../assets/images/cup.svg";
import powered from "../../../assets/images/powered.png";

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

// Quiz Badge Component - Exact match to design
const QuizBadge: React.FC<QuizBadgeProps> = ({
  type = "QUIZ",
  bonusPoints = "2K",
  badgeImage = powered,
  badgeAlt = "Powered quiz badge",
}) => {
  return (
    <div className="space-y-6">
      {/* Header with Trophy and Text */}
      <div className="flex items-start space-x-4">
        {/* Trophy Icon */}
        <img src={cup} alt="" />

        {/* Text Content */}
        <div className="flex flex-col">
          <div className="text-3xl font-dm-sans text-renault-text-primary leading-tight">
            {type}
          </div>
          <div className="text-2xl font-dm-sans text-renault-text-primary leading-tight">
            {bonusPoints} Bonus
          </div>
          <div className="text-lg font-dm-sans">Points Available</div>
        </div>
      </div>

      {/* Powered Badge Image */}
      <div className="w-full max-w-xs">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 relative overflow-hidden">
          {/* Futuristic grid background */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-800"></div>
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          {/* Central content */}
          <div className="relative z-10 text-center">
            {/* MAX text */}
            <div className="text-cyan-300 font-nouvel-bold text-lg mb-4 tracking-wider">
              MAX
            </div>

            {/* Central circle with trophy */}
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-12 h-12 text-white">
                  <svg
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      d="M25 25 L75 25 L75 50 C75 65 60 75 50 75 C40 75 25 65 25 50 Z"
                      fill="currentColor"
                    />
                    <rect
                      x="40"
                      y="75"
                      width="20"
                      height="10"
                      rx="2"
                      fill="currentColor"
                    />
                    <rect
                      x="35"
                      y="85"
                      width="30"
                      height="5"
                      rx="2"
                      fill="currentColor"
                    />
                    <path
                      d="M20 30 C15 30 15 45 20 45 L25 45 L25 30 Z"
                      fill="currentColor"
                    />
                    <path
                      d="M75 30 L75 45 L80 45 C85 45 85 30 80 30 Z"
                      fill="currentColor"
                    />
                    <rect
                      x="22"
                      y="20"
                      width="56"
                      height="8"
                      rx="4"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-30"></div>
            </div>

            {/* Powered text */}
            <div className="text-yellow-400 font-nouvel-bold text-4xl tracking-wider transform -skew-x-12">
              Powered
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-6 left-6 w-1 h-1 bg-cyan-300 rounded-full opacity-80"></div>
          <div className="absolute top-1/2 right-2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent opacity-40"></div>
        </div>
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
  return (
    <section
      className={`m-4 bg-renault-bg-section rounded-lg p-4 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Exact three-column layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Column - Quiz Badge (Fixed width) */}
          <div className="lg:w-80 flex-shrink-0">
            <QuizBadge
              type={quizBadge.type}
              bonusPoints={quizBadge.bonusPoints}
              badgeImage={quizBadge.badgeImage}
              badgeAlt={quizBadge.badgeAlt}
            />
          </div>

          {/* Middle Column - Content (Flexible) */}
          <div className="flex-1 max-w-2xl space-y-6">
            {/* Main Header */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-nouvel-bold text-renault-text-primary leading-tight">
                {title}
              </h1>
              <h2 className="text-xl lg:text-2xl font-dm-sans text-renault-text-secondary">
                {subtitle}
              </h2>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-6">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base font-dm-sans text-renault-text-secondary leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Call to Action Section */}
            <div className="pt-8 space-y-6">
              <h3 className="text-2xl font-nouvel-bold text-renault-text-primary">
                {ctaTitle}
              </h3>
              <p className="text-base font-dm-sans text-renault-text-secondary">
                {ctaSubtitle}
              </p>

              {/* Start Quiz Button */}
              <div className="flex justify-end">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={onStartQuiz}
                  className="px-8 py-4 font-dm-sans font-medium"
                >
                  {ctaButtonText}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image (Fixed width) */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-renault-bg-dark rounded-2xl p-6 shadow-2xl">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
