import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");



  const handleEmailClick = () => {
    const email = "ashadulislam6156rs@gmail.com";
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) window.location.href = `mailto:${email}`;
    else
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank"
      );
  };

  const links = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Skill", to: "skill" },
    { name: "Projects", to: "projects" },
    { name: "Services", to: "services" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggol = () => {
    setTheme(darkMode ? "dark" : "light");
  }

    

  return (
    <div
      className="fixed bg-[#000000c5] top-0 left-0 w-full z-50 shadow-sm shadow-gray-600"
      style={{
        backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
      }}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <a className="text-2xl font-bold" href="#">
              Asha<span className="text-[#00bfff]">dul</span> islam
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-sm font-medium cursor-pointer hover:text-[#00bfff]"
                activeClass=" border-b-2 text-[#00bfff] border-[#00bfff] pb-1"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* CTA + Dark Mode Toggle + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                handleThemeToggol();
              }}
              className="p-2 rounded-full cursor-pointer bg-gray-700 text-white text-sm hover:bg-gray-600 transition-colors"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              className="hidden cursor-pointer sm:inline-block bg-[#00bfff] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#00bfff]/90 transition-all shadow-lg hover:shadow-xl"
              onClick={() => {
                handleEmailClick();
              }}
            >
              Hire Me
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center space-y-1.5 p-2"
            >
              {/* Top line */}
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                } ${theme === "dark" ? "bg-white" : "bg-black"}`}
              ></span>

              {/* Middle line */}
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                } ${theme === "dark" ? "bg-white" : "bg-black"}`}
              ></span>

              {/* Bottom line */}
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                } ${theme === "dark" ? "bg-white" : "bg-black"}`}
              ></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
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
                  className="text-sm font-medium cursor-pointer text-gray-600 hover:text-[#00bfff]"
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
