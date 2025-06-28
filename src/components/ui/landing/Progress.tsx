import React from "react";
import Button from "../common/Button";

// TypeScript interfaces
interface ProgressCardProps {
  current: number;
  total: number;
  label?: string;
  className?: string;
}

interface SpotlightQuizProps {
  title?: string;
  subtitle?: string;
  bonusPoints?: number;
  description?: string;
  onStartClick?: () => void;
  className?: string;
}

interface ProgressProps {
  title?: string;
  progressCard?: ProgressCardProps;
  spotlightQuiz?: SpotlightQuizProps;
  className?: string;
}

// Progress Card Component
const ProgressCard: React.FC<ProgressCardProps> = ({
  current,
  total,
  label = "Quizzes Taken",
  className = "",
}) => {
  return (
    <div
      className={`bg-renault-yellow rounded-2xl p-8 text-center ${className}`}
    >
      {/* Progress Fraction */}
      <div className="text-6xl font-nouvel-bold text-renault-bg-dark leading-none mb-4">
        {current}/{total}
      </div>

      {/* Label */}
      <div className="text-lg font-dm-sans font-medium text-renault-bg-dark">
        {label}
      </div>
    </div>
  );
};

// Spotlight Quiz Card Component
const SpotlightQuizCard: React.FC<SpotlightQuizProps> = ({
  title = "SPOT LIGHT QUIZ:",
  subtitle = "Take the Q4 Powered Quiz",
  bonusPoints = 2000,
  description = "Test your Q4 'Powered' knowledge before December 31 and secure your place in the Q4 Race the World Incentive",
  onStartClick,
  className = "",
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Quiz Title */}
      <div className="space-y-2">
        <h3 className="text-xl font-nouvel-bold text-renault-text-primary tracking-wide">
          {title}
        </h3>
        <p className="text-lg font-dm-sans text-renault-text-secondary">
          {subtitle}
        </p>
      </div>

      {/* Bonus Points Card */}
      <div className="bg-renault-blue rounded-2xl p-6 text-white relative overflow-hidden">
        {/* Trophy Icon */}
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {/* Trophy SVG */}
            <div className="w-16 h-16 relative">
              {/* Trophy Base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-yellow-600 rounded-sm"></div>

              {/* Trophy Cup */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-t-lg"></div>

              {/* Trophy Handles */}
              <div className="absolute bottom-4 left-2 w-3 h-4 border-2 border-yellow-400 rounded-full"></div>
              <div className="absolute bottom-4 right-2 w-3 h-4 border-2 border-yellow-400 rounded-full"></div>

              {/* Star */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-yellow-400 text-2xl">
                ⭐
              </div>
            </div>
          </div>

          {/* Points Text */}
          <div className="flex-1">
            <div className="text-2xl font-nouvel-bold text-white mb-1">
              Earn {bonusPoints.toLocaleString()}
            </div>
            <div className="text-xl font-nouvel-bold text-white">
              Bonus Points
            </div>
            <div className="text-lg font-dm-sans text-white/90">Today</div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-renault-text-secondary font-dm-sans text-base leading-relaxed">
        {description}
      </p>

      {/* Start Button */}
      <div className="flex justify-end">
        <Button
          variant="primary"
          size="md"
          onClick={onStartClick}
          className="px-8 py-3 font-dm-sans font-medium"
        >
          Start!
        </Button>
      </div>
    </div>
  );
};

// Main Progress Component
const Progress: React.FC<ProgressProps> = ({
  title = "Your 2025 Progress",
  progressCard = { current: 1, total: 6 },
  spotlightQuiz = {},
  className = "",
}) => {
  return (
    <aside
      className={`py-8 px-6 bg-renault-bg-section rounded-lg ${className}`}
      aria-labelledby="progress-title"
    >
      <div className="max-w-sm mx-auto space-y-8">
        {/* Section Title */}
        <div>
          <h2
            id="progress-title"
            className="text-2xl font-nouvel-bold text-renault-text-primary mb-3"
          >
            {title}
          </h2>
          {/* Blue underline */}
          <div className="w-16 h-1 bg-renault-blue rounded-full"></div>
        </div>

        {/* Progress Card */}
        <ProgressCard
          current={progressCard.current}
          total={progressCard.total}
          label={progressCard.label}
          className={progressCard.className}
        />

        {/* Spotlight Quiz */}
        <SpotlightQuizCard
          title={spotlightQuiz.title}
          subtitle={spotlightQuiz.subtitle}
          bonusPoints={spotlightQuiz.bonusPoints}
          description={spotlightQuiz.description}
          onStartClick={spotlightQuiz.onStartClick}
          className={spotlightQuiz.className}
        />
      </div>
    </aside>
  );
};

// Example usage component
export const ProgressExample: React.FC = () => {
  const handleStartQuiz = () => {
    console.log("Starting Q4 Powered Quiz...");
    alert("Starting quiz!");
  };

  // Custom progress data
  const customProgressCard = {
    current: 3,
    total: 10,
    label: "Courses Completed",
  };

  const customSpotlightQuiz = {
    title: "FEATURED QUIZ:",
    subtitle: "Advanced Vehicle Technology",
    bonusPoints: 5000,
    description:
      "Master the latest automotive innovations and earn massive bonus points for your expertise.",
    onStartClick: () => console.log("Starting advanced quiz..."),
  };

  return (
    <div className="min-h-screen bg-renault-bg-dark">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Default Progress */}
          <div>
            <h3 className="text-xl font-nouvel-bold text-renault-text-inverse mb-4">
              Default Progress
            </h3>
          </div>

          {/* Custom Progress */}
          <div>
            <h3 className="text-xl font-nouvel-bold text-renault-text-inverse mb-4">
              Custom Progress
            </h3>
            <Progress
              title="Your Learning Journey"
              progressCard={customProgressCard}
              spotlightQuiz={customSpotlightQuiz}
              className="bg-white"
            />
          </div>
        </div>

        {/* Standalone Components */}
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-nouvel-bold text-renault-text-inverse text-center">
            Standalone Components
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Progress Cards */}
            <ProgressCard current={1} total={6} />
            <ProgressCard current={5} total={8} label="Modules Done" />
            <ProgressCard current={12} total={15} label="Achievements" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
