import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "Skill", to: "skill" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);
    
    
   const handleHireMe = () => {
     window.location.href = "mailto:ashadulislam6156rs@gmail.com";
   };

  return (
    <div className="fixed top-0 left-0 w-full z-50 dark:bg-gray-900 shadow-sm shadow-gray-600">
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a className="text-2xl font-bold dark:text-white" href="#">
              Asha<span className="text-[#00bfff]">dul</span> islam
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true} // scroll অনুসারে active class
                smooth={true}
                offset={-80} // Navbar height adjust
                duration={500}
                className="text-sm font-medium cursor-pointer dark:text-gray-300 hover:text-[#00bfff]"
                activeClass="text-white border-b-2 border-[#00bfff] pb-1"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* CTA + Dark Mode Toggle + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-700 text-white text-sm hover:bg-gray-600 transition-colors"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              className="hidden cursor-pointer sm:inline-block bg-[#00bfff] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#00bfff]/90 transition-all shadow-lg hover:shadow-xl"
              onClick={() => {
                handleHireMe();
              }}
            >
              Hire Me
            </button>

            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="md:hidden flex flex-col space-y-1.5 p-2"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 animate-slideDown">
            <nav className="flex flex-col items-start p-4 space-y-3">
              {links.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium cursor-pointer text-gray-600 dark:text-gray-300 hover:text-[#00bfff]"
                  activeClass="text-[#00bfff]"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
