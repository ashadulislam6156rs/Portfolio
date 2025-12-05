import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";
import Container from "./Container";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: (
      <FaHtml5
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors"
      />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <FaCss3Alt
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors"
      />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <FaJs
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors"
      />
    ),
  },
  {
    name: "React.js",
    icon: (
      <FaReact
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors"
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <RiTailwindCssFill
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors"
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <FaNodeJs
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors"
      />
    ),
  },
  {
    name: "Git",
    icon: (
      <FaGitAlt
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors"
      />
    ),
  },
  {
    name: "GitHub",
    icon: (
      <FaGithub
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors"
      />
    ),
  },
  {
    name: "Express.js",
    icon: (
      <SiExpress
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors"
      />
    ),
  },
];

const Skills = () => {
  return (
    <Container>
      <section
        id="skill"
        className="py-16 sm:py-24 font-display bg-background-light dark:bg-background-dark flex flex-col items-center justify-center"
      >
        <div className="w-full">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white">
              My <span className="text-[#04bfff]">Skills</span>
            </h2>
            <p className="mt-3 text-lg text-[#ffffffc2] dark:text-slate-400">
              Technologies and tools I work with.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-primary/50 dark:hover:bg-primary/10"
              >
                {skill.icon}
                <h3 className="text-base font-semibold text-white dark:text-slate-200">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Skills;
