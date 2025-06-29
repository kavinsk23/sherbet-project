import React from "react";
import readup from "../../../assets/images/Readup.svg";
import earn from "../../../assets/images/Earn.svg";
import taketest from "../../../assets/images/Taketest.svg";

// TypeScript interface for step props
interface StepProps {
  title: string;
  description: string;
  iconSrc?: string;
  iconAlt?: string;
}

// Individual Step Component
const Step: React.FC<StepProps> = ({
  title,
  description,
  iconSrc,
  iconAlt,
}) => {
  return (
    <div className="flex flex-row items-start text-left flex-1">
      {/* Content */}
      <div className="space-y-2">
        <h3 className="lg:text-lg font-nouvel text-renault-text-primary leading-tight">
          {title}
        </h3>
        <p className="text-renault-text-secondary font-dm-sans lg:text-sm leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
      {/* Icon Circle */}
      <div className="h-24 w-36 sm:h-24 lg:h-28 rounded-full flex items-center justify-center mb-0 lg:mb-6 relative overflow-hidden flex-shrink-0">
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={iconAlt || title}
            className="w-24 h-24 object-contain"
          />
        ) : (
          // Fallback icon if no image provided
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-lg sm:text-xl lg:text-2xl font-nouvel-bold text-white">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// Separator Line Component
const Separator: React.FC = () => {
  return (
    <div className="flex items-center justify-center xl:px-8">
      {/* Vertical line for desktop, horizontal line for mobile */}
      <div className="w-px h-16 mx-4 xl:h-20 bg-renault-orange md:block hidden"></div>
      <div className="w-16 h-px my-4 bg-renault-orange md:hidden block"></div>
    </div>
  );
};

// Main Props Interface
interface HowToLearnEarnProps {
  title?: string;
  subtitle?: string;
  steps?: StepProps[];
  className?: string;
}

// Default steps data matching the exact design
const defaultSteps: StepProps[] = [
  {
    title: "Read up",
    description:
      "Go to the Renault L&D Hub to ensure you are fully unto date on your learning.",
    iconSrc: readup,
    iconAlt: "Person reading with laptop icon",
  },
  {
    title: "Take test",
    description:
      "Get comfy, grab a drink and dive into one of the short tests that we have created for you.",
    iconSrc: taketest,
    iconAlt: "Colorful test blocks icon",
  },
  {
    title: "Earn",
    description:
      "Hit the pass mark to enjoy the fruits of being a genius. That's more points in your account.",
    iconSrc: earn,
    iconAlt: "Person with coins and money icon",
  },
];

// Main Component
const HowToLearnEarn: React.FC<HowToLearnEarnProps> = ({
  title = "How to Learn & Earn",
  subtitle,
  steps = defaultSteps,
  className = "",
}) => {
  return (
    <section
      className={`py-12 px-4 sm:px-6 lg:px-8 bg-renault-bg-section mb-4 rounded-lg ${className}`}
      aria-labelledby="how-to-learn-earn-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Layout Container */}
        <div className="flex flex-col md:flex-row md:items-start lg:justify-between gap-8 lg:gap-12">
          {/* Left Side - Title Section */}
          <div className="lg:flex-shrink-0 w-auto md:w-24">
            <h2
              id="how-to-learn-earn-title"
              className="text-xl sm:text-2xl lg:text-3xl font-nouvel text-renault-text-primary leading-tight mb-4 lg:mb-6"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-renault-text-secondary font-dm-sans text-sm sm:text-base lg:text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Side - Steps Container */}
          <div className="flex-1">
            {/* Responsive Layout - Column on mobile, Row on desktop */}
            <div className="flex flex-col md:flex-row items-start justify-between">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Component */}
                  <Step
                    title={step.title}
                    description={step.description}
                    iconSrc={step.iconSrc}
                    iconAlt={step.iconAlt}
                  />

                  {/* Separator (except after last item) */}
                  {index < steps.length - 1 && <Separator />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Example usage component
export const HowToLearnEarnExample: React.FC = () => {
  const customSteps: StepProps[] = [
    {
      title: "Learn",
      description:
        "Study the latest Renault vehicle features and technology updates through our comprehensive learning materials.",
      iconSrc: "/icons/learn.png",
      iconAlt: "Learning icon",
    },
    {
      title: "Practice",
      description:
        "Take practice quizzes to test your knowledge and build confidence before the real assessment.",
      iconSrc: "/icons/practice.png",
      iconAlt: "Practice icon",
    },
    {
      title: "Succeed",
      description:
        "Pass the assessment with flying colors and earn valuable rewards points for your achievement.",
      iconSrc: "/icons/success.png",
      iconAlt: "Success icon",
    },
  ];

  return (
    <HowToLearnEarn
      title="How to Learn & Earn"
      subtitle="Follow these simple steps to maximize your learning and rewards"
      steps={customSteps}
      className="bg-white"
    />
  );
};

export default HowToLearnEarn;
