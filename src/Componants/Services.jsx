import React, { useEffect } from "react";
import {
  FaReact,
  FaServer,
  FaFigma,
  FaDatabase,
  FaTools,
  FaMobile,
} from "react-icons/fa";
import AOS from "aos";

import Container from "./Container";
import useTheme from "../hook/useTheme";

const Services = () => {
  const { theme } = useTheme(); // custom theme: "dark" | "light"

  useEffect(() => {
    AOS.refresh();
  }, []);

  const services = [
    {
      icon: <FaReact className="text-[#04bfff] text-4xl" />,
      title: "Frontend Development",
      description:
        "Building high-performance, SEO-friendly, interactive web applications with React.js & Next.js. Clean UI, fast rendering, and modern design principles.",
    },
    {
      icon: <FaServer className="text-[#04bfff] text-4xl" />,
      title: "MERN Stack Development",
      description:
        "End-to-end full-stack web applications using MongoDB, Express.js, React.js, and Node.js with secure authentication and scalable API structure.",
    },
    {
      icon: <FaDatabase className="text-[#04bfff] text-4xl" />,
      title: "API & Backend Integration",
      description:
        "Custom REST APIs, backend logic, JWT authentication, and database design using Node.js, Express.js, and MongoDB.",
    },
    {
      icon: <FaFigma className="text-[#04bfff] text-4xl" />,
      title: "UI/UX to React Conversion",
      description:
        "Convert Figma, XD, or any modern UI design into clean, pixel-perfect, and reusable React components using Tailwind CSS.",
    },
    {
      icon: <FaMobile className="text-[#04bfff] text-4xl" />,
      title: "Responsive Web Design",
      description:
        "Fully responsive, mobile-friendly, and cross-browser compatible layouts that deliver smooth user experience on all devices.",
    },
    {
      icon: <FaTools className="text-[#04bfff] text-4xl" />,
      title: "Website Optimization & Fixing",
      description:
        "Performance optimization, bug fixing, code refactoring, speed improvement, and maintaining high Lighthouse scores.",
    },
  ];

  return (
    <Container>
      <section
        id="services"
        className={`py-3 font-display ${
          theme === "dark" ? "bg-background-dark" : "bg-background-light"
        }`}
      >
        <div>
          {/* Section Title */}
          <div className="text-center mb-12" data-aos="zoom-in">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-slate-800"
              }`}
            >
              My <span className="text-[#04bfff]">Services</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 120}
                data-aos-duration="800"
                data-aos-easing="ease-out-cubic"
                className={`
                  rounded-lg p-8 flex flex-col items-start text-left
                  transform hover:-translate-y-2 transition-transform duration-300

                  ${
                    theme === "dark"
                      ? "bg-[#1d293b] shadow-lg hover:shadow-[#04bfff]"
                      : "bg-white shadow-md hover:shadow-lg"
                  }
                `}
              >
                {/* Icon */}
                <div className="mb-5">{service.icon}</div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    theme === "dark" ? "text-white" : "text-slate-800"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`mb-6 flex-grow ${
                    theme === "dark" ? "text-[#ffffff83]" : "text-slate-600"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Services;
