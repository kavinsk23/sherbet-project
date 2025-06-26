import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/images/logo.svg";
import helpButtonBg from "../../../assets/images/helpButtonBg.svg";
import cart from "../../../assets/icons/cart.svg";
import alert from "../../../assets/icons/alert.svg";
import logout from "../../../assets/icons/logout.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="bg-renault-bg-dark border-b border-renault-gray-800 md:relative"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                {/* RG Logo */}
                <img src={logo} alt="Nick's profile" />
                {/* REWARDS Text */}
                <div className="block text-renault-text-inverse font-nouvel text-lg tracking-wide">
                  REWARDS
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block md:absolute md:top-1/2 lg:left-[40%] xl:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
              <div className="flex items-baseline space-x-8">
                {/* Home - Active State */}
                <a
                  href="#home"
                  className="relative text-renault-yellow font-dm-sans text-sm font-medium hover:text-renault-yellow-light transition-colors duration-200 py-2 before:content-[''] before:absolute before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-3 before:h-0.5 before:bg-renault-yellow after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-3 after:h-0.5 after:bg-renault-yellow"
                  aria-current="page"
                >
                  Home
                </a>

                {/* Shop */}
                <a
                  href="#shop"
                  className="text-renault-text-inverse font-dm-sans text-sm font-medium hover:text-renault-yellow transition-colors duration-200"
                >
                  Shop
                </a>

                {/* Points Bank */}
                <a
                  href="#points-bank"
                  className="text-renault-text-inverse font-dm-sans text-sm font-medium hover:text-renault-yellow transition-colors duration-200"
                >
                  Points Bank
                </a>

                {/* Voucher Wallet */}
                <a
                  href="#voucher-wallet"
                  className="text-renault-text-inverse font-dm-sans text-sm font-medium hover:text-renault-yellow transition-colors duration-200"
                >
                  Voucher Wallet
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Help Button */}
            <a
              href="#help"
              className="text-renault-bg-dark font-dm-sans font-medium px-6 py-2 text-sm transition-opacity duration-200 hover:opacity-80 focus:outline-none bg-contain bg-no-repeat bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${helpButtonBg})`,
                width: "80px",
                height: "60px",
              }}
              aria-label="Get help"
            >
              Help
            </a>

            {/* Shopping Cart Icon */}
            <button aria-label="Shopping cart">
              <img src={cart} alt="Nick's profile" />
            </button>

            {/* Notifications Bell */}
            <button aria-label="Notifications">
              <img src={alert} alt="" />{" "}
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <button
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-renault-yellow focus:ring-offset-2 focus:ring-offset-renault-bg-dark rounded-lg p-1"
                aria-label="User profile menu"
              >
                {/* Profile Image */}
                <img
                  className="h-8 w-8 rounded-full object-cover border-2 border-renault-gray-700"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Nick's profile"
                />

                {/* User Info - Hidden on smaller screens */}
                <div className="hidden lg:block text-left">
                  <div className="text-renault-text-inverse font-dm-sans text-sm font-medium">
                    Nick
                  </div>
                  <div className="text-renault-text-muted font-dm-sans text-xs">
                    3.3K Points
                  </div>
                </div>
              </button>

              {/* Logout Icon */}
              <button aria-label="Logout">
                <img src={logout} alt="" />{" "}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:flex lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-renault-text-inverse hover:text-renault-yellow p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-renault-yellow focus:ring-offset-2 focus:ring-offset-renault-bg-dark"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle main menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="sm:flex lg:hidden border-t border-renault-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 w-full">
              {/* Mobile Navigation Links */}
              <a
                href="#home"
                className="block px-3 py-2 text-renault-yellow font-dm-sans text-base font-medium rounded-lg bg-renault-gray-800/50"
                aria-current="page"
              >
                Home
              </a>

              <a
                href="#shop"
                className="block px-3 py-2 text-renault-text-inverse hover:text-renault-yellow hover:bg-renault-gray-800/50 font-dm-sans text-base font-medium rounded-lg transition-colors duration-200"
              >
                Shop
              </a>

              <a
                href="#points-bank"
                className="block px-3 py-2 text-renault-text-inverse hover:text-renault-yellow hover:bg-renault-gray-800/50 font-dm-sans text-base font-medium rounded-lg transition-colors duration-200"
              >
                Points Bank
              </a>

              <a
                href="#voucher-wallet"
                className="block px-3 py-2 text-renault-text-inverse hover:text-renault-yellow hover:bg-renault-gray-800/50 font-dm-sans text-base font-medium rounded-lg transition-colors duration-200"
              >
                Voucher Wallet
              </a>

              {/* Mobile User Section */}
              <div className="pt-4 border-t border-renault-gray-800 mt-4">
                <div className="flex items-center px-3 py-2">
                  <img
                    className="h-10 w-10 rounded-full object-cover border-2 border-renault-gray-700"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Nick's profile"
                  />
                  <div className="ml-3">
                    <div className="text-renault-text-inverse font-dm-sans text-base font-medium">
                      Nick
                    </div>
                    <div className="text-renault-text-muted font-dm-sans text-sm">
                      3.3K Points
                    </div>
                  </div>
                </div>

                {/* Mobile Action Buttons */}
                <div className="px-3 py-2 space-y-2">
                  <button className="w-full bg-renault-yellow hover:bg-renault-yellow-dark text-renault-text-primary font-dm-sans font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-200">
                    Help
                  </button>

                  <div className="flex justify-center space-x-6 pt-2">
                    <button aria-label="Shopping cart">
                      <img src={cart} alt="Nick's profile" />
                    </button>

                    {/* Notifications Bell */}
                    <button aria-label="Notifications">
                      <img src={alert} alt="" />{" "}
                    </button>

                    {/* Logout Icon */}
                    <div className="w-full ml-auto flex justify-end">
                      <button aria-label="Logout">
                        <img src={logout} alt="" />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
