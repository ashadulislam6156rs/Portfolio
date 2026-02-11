import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiCloudflare,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import Container from "./Container";
import AOS from "aos";
import { MdSecurity } from "react-icons/md";

const frontendSkills = [
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "React.js", icon: <FaReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Express.js", icon: <SiExpress size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Firebase", icon: <RiFirebaseFill size={40} /> },
  { name: "NextAuth", icon: <MdSecurity size={40} /> },
];

const toolsSkills = [
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "Vercel", icon: <SiVercel size={40} /> },
  { name: "Netlify", icon: <SiNetlify size={40} /> },
  { name: "Cloudflare", icon: <SiCloudflare size={40} /> },
  { name: "Firebase", icon: <RiFirebaseFill size={40} /> },
];

/* ================= SKILL GROUP ================= */

const SkillGroup = ({ title, skills }) => (
  <div className="mb-12">
    <h3
      data-aos="fade-up"
      className="mb-6 text-center text-2xl font-bold text-[#04bfff]"
    >
      {title}
    </h3>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          data-aos="fade-up"
          data-aos-delay={idx * 100}
          className="
            group flex flex-col items-center justify-center gap-3 rounded-xl p-6
            border transition-all duration-300
            bg-white border-slate-200
            hover:border-[#04bfff]/50 hover:bg-[#04bfff]/10

            dark:bg-slate-900/50 dark:border-slate-800
            dark:hover:border-[#04bfff]/50 dark:hover:bg-[#04bfff]/10
          "
        >
          <div
            className="
            transition-colors duration-300
            text-slate-700 group-hover:text-[#04bfff]
            dark:text-white dark:group-hover:text-[#04bfff]
          "
          >
            {skill.icon}
          </div>

          <h3
            className="
            text-base font-semibold
            text-slate-800
            dark:text-slate-200
          "
          >
            {skill.name}
          </h3>
        </div>
      ))}
    </div>
  </div>
);

/* ================= MAIN COMPONENT ================= */

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <Container>
      <section
        id="skill"
        className="py-16 sm:py-18 font-display
          bg-background-light
          dark:bg-background-dark"
      >
        {/* Section Header */}
        <div data-aos="fade-down" className="text-center mb-12">
          <h2
            className="
            text-3xl sm:text-4xl font-bold
            text-slate-800
            dark:text-white
          "
          >
            My <span className="text-[#04bfff]">Skills</span>
          </h2>

          <p
            className="
            mt-3 text-lg
            text-slate-600
            dark:text-slate-400
          "
          >
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill Groups */}
        <SkillGroup title="Frontend & Backend Development" skills={frontendSkills} />
        <SkillGroup title="Tools & Deployment" skills={toolsSkills} />
      </section>
    </Container>
  );
};

export default Skills;
