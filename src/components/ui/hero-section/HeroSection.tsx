import React from "react";
import myRewards from "../../../assets/images/my-rewards.jpg";
import heroBg from "../../../assets/images/hero-section-bg.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      role="banner"
      aria-label="Renault Group Rewards hero section"
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-renault-bg-dark/40 via-transparent to-renault-bg-dark/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] py-12 lg:py-20">
          {/* Left Content */}
          <div className="flex-1 max-w-xl lg:max-w-2xl text-center lg:text-left mb-8 lg:mb-0">
            {/* Main Heading */}
            <h1 className="text-4xl ml-10 sm:text-4xl left-0 lg:left-0 text-left lg:text-6xl absolute lg:top-[10%] xl:text-7xl font-nouvel-bold text-renault-yellow leading-tight mb-6">
              Renault Group
              <br />
              <span className="block">Rewards</span>
            </h1>

            {/* Subheading */}
            <div className="space-y-2 mb-8 absolute text-right lg:text-left top-[20%] right-[5%]  lg:top-[40%] lg:left-[10%]">
              <p className="text-xl lg:text-2xl font-nouvel text-renault-text-inverse leading-relaxed">
                Recognising your brilliance
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-nouvel text-renault-text-inverse leading-relaxed">
                with rewards that pop!
              </p>
            </div>
          </div>

          {/* Right Content - My Rewards Card */}
          <div className="flex-1 flex justify-center w-full">
            <div className="relative w-full max-w-2xl">
              {/* Outer Border Card */}
              <div className="md:relative absolute bottom-0 flex items-center  bg-black border-2 border-renault-text-inverse rounded-2xl p-6 w-full h-60 lg:h-72 backdrop-blur-sm">
                {/* Inner Content Card */}
                <div className="backdrop-blur-md rounded-xl w-full">
                  {/* Content Layout - Side by Side */}
                  <div className="flex items-center justify-between gap-6">
                    {/* Left Side - Text Content */}
                    <div className="flex-1 min-w-0">
                      {/* Card Header */}
                      <div className="mb-4">
                        <h2 className="text-renault-yellow font-dm-sans text-sm font-medium mb-1">
                          How much have
                        </h2>
                        <h3 className="text-renault-yellow font-dm-sans text-sm font-medium">
                          your earned?
                        </h3>
                      </div>

                      {/* Card Description */}
                      <div>
                        <p className="text-renault-text-inverse font-dm-sans text-sm leading-relaxed">
                          There are always ways to earn with Renault Rewards –
                          NOW, jump into your points today and enjoy the rewards
                        </p>
                      </div>
                    </div>

                    {/* Right Side - My Rewards Logo */}
                    <div className="flex-shrink-0 border border-renault-text-inverse rounded-md">
                      <img
                        src={myRewards}
                        alt="my Rewards logo with golden diamond background"
                        className="w-64 h-auto object-contain rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-renault-bg-dark/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
