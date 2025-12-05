import React from "react";
import myImg from "../assets/my-img.jpg";
import Container from "./Container";

const About = () => {
  return (
    <Container>
      <section id="about" className="pt-10 pb-16 md:pt-20 md:pb-24 bg-background-light dark:bg-background-dark font-display dark:text-slate-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ----------- IMAGE SECTION ----------- */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-72 sm:w-80 md:w-96">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-lg"></div>

              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src={myImg}
                  alt="Professional portrait"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* ----------- TEXT SECTION ----------- */}
          <div className="space-y-6 text-center md:-ml-25 lg:text-left px-2 lg:px-0">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wider uppercase text-[#04bfff] dark:text-white">
              ABOUT ME
            </h2>

            <p className="text-base sm:text-lg leading-relaxed">
              Hello, I’m Ashadul Islam. I’m a passionate MERN Stack Developer
              with a strong focus on building modern, clean, and scalable web
              applications. I work with JavaScript, React, Node.js, Express, and
              MongoDB to create fast, secure, and user-friendly full-stack
              solutions. My coding philosophy is simple: write clean code, build
              meaningful projects, and improve every single day.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center lg:text-left mt-6">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">
                  35<span className="text-[#04bfff]">+</span>
                </p>
                <p className="text-sm sm:text-base text-gray-400 mt-1">
                  Completed Projects
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">
                  95<span className="text-[#04bfff]">%</span>
                </p>
                <p className="text-sm sm:text-base text-gray-400 mt-1">
                  Client satisfaction
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">
                  0<span className="text-[#04bfff]">+</span>
                </p>
                <p className="text-sm sm:text-base text-gray-400 mt-1">
                  Years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
