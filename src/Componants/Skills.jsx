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

const skills = [
  {
    name: "HTML5",
    icon: (
      <FaHtml5
        size={40}
        className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <FaCss3Alt
        size={40}
        className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <FaJs
        size={40}
        className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    name: "Python",
    icon: (
      <FaPython
        size={40}
        className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    name: "React",
    icon: (
      <FaReact
        size={40}
        className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <FaNodeJs
        size={40}
        className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    name: "Git",
    icon: (
      <FaGitAlt
        size={40}
        className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    name: "GitHub",
    icon: (
      <FaGithub
        size={40}
        className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    name: "SQL",
    icon: (
      <FaDatabase
        size={40}
        className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    name: "Docker",
    icon: (
      <FaDocker
        size={40}
        className="text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors"
      />
    ),
  },
];

const Skills = () => {
  return (
    <section
      id="skill"
      className="py-16 sm:py-24 font-display bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
    >
      <div className="w-full max-w-4xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
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
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
