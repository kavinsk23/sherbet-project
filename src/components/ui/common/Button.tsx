import React from "react";

// TypeScript interface for button props
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "ghost" | "retake";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

// Button Component
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = "",
  type = "button",
  ariaLabel,
}) => {
  // Base styles
  const baseStyles =
    "font-dm-sans font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center";

  // Variant styles
  const variantStyles = {
    primary:
      "bg-renault-blue hover:bg-renault-blue-dark text-white focus:ring-renault-blue",
    secondary:
      "bg-renault-green hover:bg-renault-green-dark text-white focus:ring-renault-green",
    success:
      "bg-renault-yellow hover:bg-renault-yellow-dark text-renault-bg-dark focus:ring-renault-yellow",
    ghost:
      "bg-renault-gray-200 hover:bg-renault-gray-300 text-renault-text-primary focus:ring-renault-gray-400",
    retake:
      "bg-renault-gray-200 hover:bg-renault-gray-300 text-renault-text-primary focus:ring-renault-gray-400 relative",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  // Combine styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

// Example usage component showing all variations
export const ButtonShowcase: React.FC = () => {
  return (
    <div className="p-8 bg-renault-bg-section min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Title */}
        <h1 className="text-3xl font-nouvel-bold text-renault-text-primary text-center mb-12">
          Renault Button Components
        </h1>

        {/* Primary Button - Browse All Programmes */}
        <div className="space-y-4">
          <h2 className="text-xl font-nouvel-bold text-renault-text-primary">
            Primary Button
          </h2>
          <Button
            variant="primary"
            size="lg"
            onClick={() => console.log("Browse All Programmes clicked")}
          >
            Browse All Programmes
          </Button>
        </div>

        {/* Secondary Button - Start Quiz */}
        <div className="space-y-4">
          <h2 className="text-xl font-nouvel-bold text-renault-text-primary">
            Secondary Button
          </h2>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => console.log("Start Quiz clicked")}
          >
            Start Quiz
          </Button>
        </div>

        {/* Success Button - Subscribe Now */}
        <div className="space-y-4">
          <h2 className="text-xl font-nouvel-bold text-renault-text-primary">
            Success Button (with background)
          </h2>
          <div className="bg-renault-yellow p-8 rounded-2xl">
            <div className="bg-renault-bg-dark rounded-xl p-6 inline-block">
              <Button
                variant="success"
                size="lg"
                className="bg-renault-bg-dark text-renault-text-inverse border-2 border-renault-text-inverse hover:bg-renault-gray-800"
                onClick={() => console.log("Subscribe Now clicked")}
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        {/* Retake Button with confetti */}
        <div className="space-y-4">
          <h2 className="text-xl font-nouvel-bold text-renault-text-primary">
            Retake Button (with confetti effect)
          </h2>
          <div className="relative">
            {/* Confetti background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-2 left-4 w-3 h-3 bg-renault-red transform rotate-45"></div>
              <div className="absolute top-6 left-12 w-2 h-2 bg-renault-blue rounded-full"></div>
              <div className="absolute top-1 right-8 w-4 h-2 bg-renault-yellow"></div>
              <div className="absolute bottom-4 left-8 w-2 h-4 bg-renault-green transform rotate-12"></div>
              <div className="absolute bottom-2 right-12 w-3 h-3 bg-renault-purple rounded-full"></div>
              <div className="absolute top-4 right-4 w-2 h-3 bg-renault-orange transform -rotate-12"></div>
            </div>

            <Button
              variant="retake"
              size="lg"
              onClick={() => console.log("Retake clicked")}
            >
              Retake
            </Button>
          </div>
        </div>

        {/* All size variations */}
        <div className="space-y-4">
          <h2 className="text-xl font-nouvel-bold text-renault-text-primary">
            Size Variations
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
            <Button variant="primary" size="xl">
              Extra Large
            </Button>
          </div>
        </div>

        {/* Disabled state */}
        <div className="space-y-4">
          <h2 className="text-xl font-nouvel-bold text-renault-text-primary">
            Disabled State
          </h2>
          <div className="flex gap-4">
            <Button variant="primary" disabled>
              Disabled Primary
            </Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-4">
          <h2 className="text-xl font-nouvel-bold text-renault-text-primary">
            Interactive Examples
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Browse All Programmes */}
            <div className="bg-white p-4 rounded-xl shadow-card">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => alert("Browsing all programmes...")}
              >
                Browse All Programmes
              </Button>
            </div>

            {/* Start Quiz */}
            <div className="bg-white p-4 rounded-xl shadow-card">
              <Button
                variant="secondary"
                size="md"
                className="w-full"
                onClick={() => alert("Starting quiz...")}
              >
                Start Quiz
              </Button>
            </div>

            {/* Subscribe Now */}
            <div className="bg-renault-yellow p-4 rounded-xl">
              <Button
                variant="success"
                size="md"
                className="w-full bg-renault-bg-dark text-renault-text-inverse border border-renault-text-inverse hover:bg-renault-gray-800"
                onClick={() => alert("Subscribing...")}
              >
                Subscribe Now
              </Button>
            </div>

            {/* Retake */}
            <div className="bg-white p-4 rounded-xl shadow-card relative overflow-hidden">
              {/* Mini confetti */}
              <div className="absolute top-1 left-2 w-1 h-1 bg-renault-red"></div>
              <div className="absolute top-3 right-3 w-1 h-1 bg-renault-blue rounded-full"></div>
              <div className="absolute bottom-2 left-4 w-1 h-1 bg-renault-green"></div>

              <Button
                variant="retake"
                size="md"
                className="w-full"
                onClick={() => alert("Retaking quiz...")}
              >
                Retake
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
