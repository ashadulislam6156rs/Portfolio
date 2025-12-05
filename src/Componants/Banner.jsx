import React from "react";
import { FaDownload, FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import MyImage from "../assets/bg1.png"
import Container from "./Container";

const Banner = () => {
  // className="container mx-auto pt-40 px-5"

  return (
    <div id="home">
      <Container className={`pt-35`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h3 className="text-2xl font-semibold">Hello, It's Me</h3>
            <h1 className="text-5xl md:text-6xl font-bold">Ashadul islam</h1>
            <h2 className="text-3xl font-semibold">
              And I'm a{" "}
              <span className="text-[#04bfff]">
                <Typewriter
                  options={{
                    strings: ["Frontent Developer", "MERN Stack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
            <p className="mt-2 text-slate-300 dark:text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              MERN Stack Developer with strong expertise in React.js and
              Next.js. Skilled in building fast, scalable, and SEO-optimized
              full-stack applications using Node.js, Express.js, and MongoDB.
              Focused on crafting modern, responsive UI with Tailwind CSS and
              delivering high-quality user experiences.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start items-center space-x-4 mt-6">
              {/* Facebook */}
              <a
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#04bfff] text-[#04bfff] hover:bg-[#04bfff] hover:text-[#1f242d] transition-all duration-300"
                href="https://www.facebook.com/ashadulislam6156rs/"
              >
                <svg
                  aria-hidden="true"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              {/* Github */}
              <a
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#04bfff] text-[#04bfff] hover:bg-[#04bfff] hover:text-[#1f242d] transition-all duration-300"
                href="https://github.com/ashadulislam6156rs"
              >
                <FaGithub className="text-[25px]" />
              </a>
              {/* Instagram */}
              <a
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#04bfff] text-[#04bfff] hover:bg-[#04bfff] hover:text-[#1f242d] transition-all duration-300"
                href="https://www.instagram.com/ashadulislam6156rs/"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85C2.165 4.919 3.681 3.376 6.934 3.23c1.266-.058 1.644-.07 4.85-.07zm0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#04bfff] text-[#04bfff] hover:bg-[#04bfff] hover:text-[#1f242d] transition-all duration-300"
                href="https://www.linkedin.com/in/ashadulislam6156rs/"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>

            {/* Download CV Button */}
            <a
              className="mt-8 flex gap-2 items-center self-center lg:self-start bg-[#04bfff] text-black font-medium py-3 px-8 rounded-full shadow-[0_0_15px_#04bfff] hover:shadow-[0_0_30px_#04bfff] transition-shadow duration-300"
              href="https://drive.google.com/file/d/1-mgrVx83xP17RpbdqgXQuTZ0VNKyNH7Y/view?usp=sharing"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          {/* Right Image / Banner */}
          <div className="relative flex justify-center items-center order-first lg:order-last">
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
              {/* Background Blur Circle */}
              <div className="absolute inset-0 bg-[#04bfff] blur-2xl opacity-70 rounded-full"></div>

              <div className="relative flex items-center justify-center">
                <div className="absolute w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-[#04bfff] to-[#04c0ffb7] dark:from-accent-dark dark:to-[#04c0ffb7] opacity-30 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-[95%] max-w-[calc(18rem+10%)] sm:max-w-md aspect-square rounded-full border-4 border-dashed border-[#04bfff] dark:border-[#04bfff] animate-[spin_30s_linear_infinite_reverse]"></div>
                <div className="relative p-4 bg-[#04c0ffb6] dark:bg-[#04bfff] rounded-full shadow-2xl backdrop-blur-sm">
                  <div className="p-6 bg-[#d0d1ce] dark:bg-[#d0d1ce] rounded-full">
                    <img
                      alt="A smiling male web developer wearing glasses and a denim jacket"
                      className="w-full max-w-xs sm:max-w-sm rounded-full aspect-square object-cover"
                      src={MyImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
