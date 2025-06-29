import React from "react";
import Button from "../common/Button";
import cardImg1 from "../../../assets/images/card-img1.png";
import cardImg2 from "../../../assets/images/card-img2.png";
import cardImg3 from "../../../assets/images/card-img3.png";
import cardImg4 from "../../../assets/images/card-img4.png";
import cardImg5 from "../../../assets/images/card-img5.png";
import cardImg6 from "../../../assets/images/card-img6.png";
import Progress from "./Progress";

// TypeScript interfaces
interface QuizItem {
  id: string;
  title: string;
  image: string;
  imageAlt?: string;
  status: "complete" | "new";
}

interface MonthlyPoint {
  id: string;
  month: string;
  points: string;
  isCurrentMonth?: boolean;
}

interface ProgrammesProps {
  title?: string;
  quizzes?: QuizItem[];
  monthlyPoints?: MonthlyPoint[];
  onBrowseAll?: () => void;
  onQuizClick?: (quizId: string) => void;
  className?: string;
}

// Quiz List Item Component
const QuizListItem: React.FC<{
  quiz: QuizItem;
  onClick?: (id: string) => void;
}> = ({ quiz, onClick }) => {
  return (
    <div
      className="flex items-center justify-between py-2 rounded-lg bg-white p-4 hover:bg-renault-gray-50 transition-colors duration-200 cursor-pointer group"
      onClick={() => onClick?.(quiz.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.(quiz.id);
        }
      }}
    >
      {/* Left Side - Image and Title */}
      <div className="flex items-center space-x-4">
        {/* Quiz Image */}
        <div className="w-16 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-renault-gray-100">
          <img
            src={quiz.image}
            alt={quiz.imageAlt || quiz.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 last:border last:border-renault-green rounded-lg"
          />
        </div>

        {/* Quiz Title */}
        <h3 className="text-lg font-dm-sans font-medium text-renault-text-primary group-hover:text-renault-blue transition-colors duration-200">
          {quiz.title}
        </h3>
      </div>

      {/* Right Side - Status Badge */}
      <div className="flex-shrink-0">
        {quiz.status === "complete" ? (
          <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-dm-sans font-medium bg-renault-orange-dark text-white">
            Complete
          </span>
        ) : (
          <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-dm-sans font-medium bg-renault-green-light text-white">
            New
          </span>
        )}
      </div>
    </div>
  );
};

// Monthly Points Card Component
const MonthlyPointCard: React.FC<{ point: MonthlyPoint }> = ({ point }) => {
  return (
    <div
      className={`rounded-2xl p-8 text-center transition-all duration-200 hover:shadow-lg text-white h-48 w-56 flex justify-center items-center flex-col ${
        point.isCurrentMonth ? "bg-renault-blue" : "bg-renault-teal-green"
      }`}
    >
      {/* Points Value */}
      <div className="text-4xl font-nouvel-bold mb-2">{point.points}</div>

      {/* Month Label */}
      <div className="text-base font-dm-sans">{point.month}</div>
    </div>
  );
};

// Default data
const defaultQuizzes: QuizItem[] = [
  {
    id: "maximise-accessories",
    title: "Maximise Accessories",
    image: cardImg1,
    status: "complete",
  },
  {
    id: "scenic-etech",
    title: "Features Quiz: Scenic E-Tech electric",
    image: cardImg2,
    status: "new",
  },
  {
    id: "renault-finance",
    title: "Renault Finance: Making the right choice",
    image: cardImg3,
    status: "new",
  },
  {
    id: "renault-5-etech",
    title: "Features Quiz: All New Renault 5 E-Tech",
    image: cardImg4,
    status: "new",
  },
  {
    id: "charging-expert",
    title: "Guru Pod: Become a charging expert",
    image: cardImg5,
    status: "new",
  },
  {
    id: "castrol-oil",
    title: "Castrol Oil- Top tips for selling",
    image: cardImg6,
    status: "new",
  },
];

const defaultMonthlyPoints: MonthlyPoint[] = [
  {
    id: "december",
    month: "December",
    points: "25k",
    isCurrentMonth: false,
  },
  {
    id: "january",
    month: "January",
    points: "35k",
    isCurrentMonth: false,
  },
  {
    id: "current",
    month: "This Month",
    points: "2k",
    isCurrentMonth: true,
  },
];

// Main Programmes Component
const Programmes: React.FC<ProgrammesProps> = ({
  title = "Latest Quizzes to earn from",
  quizzes = defaultQuizzes,
  monthlyPoints = defaultMonthlyPoints,
  onBrowseAll,
  onQuizClick,
  className = "",
}) => {
  return (
    <section className={` ${className}`}>
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Latest Quizzes Section */}
          <div className="w-full md:w-3/4 bg-renault-bg-section rounded-lg p-4">
            {/* Section Header */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-xl font-dm-sans text-renault-text-primary mb-2">
                    {title}
                  </h2>
                </div>

                {/* Browse All Button */}
                <div className="flex-shrink-0">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={onBrowseAll}
                    className="px-6 py-3"
                  >
                    Browse All Programmes
                  </Button>
                </div>
              </div>
              {/* Blue underline */}
              <div className="w-full h-1 bg-renault-blue rounded-full mb-4"></div>
              {/* Quiz List */}
              <div className="space-y-2">
                {quizzes.map((quiz) => (
                  <QuizListItem
                    key={quiz.id}
                    quiz={quiz}
                    onClick={onQuizClick}
                  />
                ))}
              </div>
            </div>
            {/* underline */}
            <div className="w-full h-[1px] bg-renault-green-dark/10 rounded-full my-4"></div>
            {/* Monthly Points Section */}
            <div>
              <h2 className="text-lg font-dm-sans font-medium text-renault-text-primary mb-8">
                Monthly Points
              </h2>

              {/* Points Cards Grid */}
              <div className="flex gap-4 justify-center">
                {monthlyPoints.map((point) => (
                  <MonthlyPointCard key={point.id} point={point} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/4">
            <Progress />
          </div>
        </div>
      </div>
    </section>
  );
};

// Example usage component
export const ProgrammesExample: React.FC = () => {
  const handleBrowseAll = () => {
    console.log("Browse all programmes clicked");
  };

  const handleQuizClick = (quizId: string) => {
    console.log(`Quiz clicked: ${quizId}`);
  };

  // Custom quiz data example
  const customQuizzes: QuizItem[] = [
    {
      id: "custom-1",
      title: "Advanced Vehicle Features",
      image: "/images/custom-quiz-1.jpg",
      status: "new",
    },
    {
      id: "custom-2",
      title: "Customer Service Excellence",
      image: "/images/custom-quiz-2.jpg",
      status: "complete",
    },
  ];

  const customMonthlyPoints: MonthlyPoint[] = [
    {
      id: "feb",
      month: "February",
      points: "40k",
      isCurrentMonth: false,
    },
    {
      id: "mar",
      month: "March",
      points: "45k",
      isCurrentMonth: false,
    },
    {
      id: "current",
      month: "This Month",
      points: "5k",
      isCurrentMonth: true,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Default Programmes */}
      <Programmes onBrowseAll={handleBrowseAll} onQuizClick={handleQuizClick} />

      {/* Custom Programmes */}
      <Programmes
        title="Custom Learning Modules"
        quizzes={customQuizzes}
        monthlyPoints={customMonthlyPoints}
        onBrowseAll={handleBrowseAll}
        onQuizClick={handleQuizClick}
        className="bg-white"
      />
    </div>
  );
};

export default Programmes;
