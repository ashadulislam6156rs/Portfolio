import React from "react";
import myImg from "../assets/my-img.jpg";
import Container from "./Container";
import useInView from "./useInView";
import Counter from "./Counter";
import { motion } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView();


  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });

  return (
    <Container>
      <section
        id="about"
        className="pt-10 pb-16 md:pt-20 md:pb-24 bg-background-light dark:bg-background-dark font-display dark:text-slate-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ----------- IMAGE SECTION ----------- */}
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
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
          </motion.div>

          {/* ----------- TEXT SECTION ----------- */}
          <motion.div
            className="space-y-6 text-center md:-ml-25 lg:text-left px-2 lg:px-0"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wider uppercase text-[#04bfff] dark:text-white">
              ABOUT ME
            </h2>

            <p
              className={`text-base sm:text-lg leading-relaxed text-[#0000009f] dark:text-slate-400`}
            >
              Hello, I’m Ashadul Islam. I’m a passionate MERN Stack Developer
              with a strong focus on building modern, clean, and scalable web
              applications. I work with JavaScript, React, Node.js, Express, and
              MongoDB to create fast, secure, and user-friendly full-stack
              solutions. My coding philosophy is simple: write clean code, build
              meaningful projects, and improve every single day.
            </p>

            {/* Stats */}
            <div
              ref={ref}
              className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center lg:text-left mt-6"
            >
              <motion.div
                variants={fadeInUp(0)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <p
                  className={`text-3xl sm:text-4xl font-bold text-black dark:text-white`}
                >
                  <Counter end={35} start={inView} />
                  <span className="text-[#04bfff]">+</span>
                </p>
                <p className="text-sm text-gray-400 mt-1">Completed Projects</p>
              </motion.div>

              <motion.div
                variants={fadeInUp(0.2)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <p
                  className={`text-3xl sm:text-4xl font-bold text-black dark:text-white`}
                >
                  <Counter end={97} start={inView} />
                  <span className="text-[#04bfff]">%</span>
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Client Satisfaction
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp(0.4)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <p
                  className={`text-3xl sm:text-4xl font-bold text-black dark:text-white`}
                >
                  <Counter end={1} start={inView} />
                  <span className="text-[#04bfff]">+</span>
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Years of Experience
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default About;
