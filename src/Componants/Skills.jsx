// import React from "react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
// } from "react-icons/fa";
// import Container from "./Container";
// import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
// import { SiExpress, SiMongodb, SiNextdotjs, SiVercel } from "react-icons/si";

// const frontendSkills = [
//   {
//     name: "HTML5",
//     icon: (
//       <FaHtml5
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
//   {
//     name: "CSS3",
//     icon: (
//       <FaCss3Alt
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
//   {
//     name: "JavaScript",
//     icon: (
//       <FaJs
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
//   {
//     name: "React.js",
//     icon: (
//       <FaReact
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
//   {
//     name: "Next.js",
//     icon: (
//       <SiNextdotjs
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
//   {
//     name: "Tailwind CSS",
//     icon: (
//       <RiTailwindCssFill
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
//   {
//     name: "Node.js",
//     icon: (
//       <FaNodeJs
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
//   {
//     name: "Express.js",
//     icon: (
//       <SiExpress
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
//   {
//     name: "MongoDB",
//     icon: (
//       <SiMongodb
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
//   {
//     name: "Firebase",
//     icon: (
//       <RiFirebaseFill
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
// ];


// const toolsSkills = [
//   {
//     name: "Git",
//     icon: (
//       <FaGitAlt
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
//   {
//     name: "GitHub",
//     icon: (
//       <FaGithub
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
//   {
//     name: "Vercel",
//     icon: (
//       <SiVercel
//         size={40}
//         className="text-white group-hover:text-[#04bfff] transition-colors"
//       />
//     ),
//   },
// ];

// const SkillGroup = ({ title, skills }) => (
//   <div className="mb-12">
//     <h3 className="mb-6 text-center text-2xl font-bold text-[#04bfff]">
//       {title}
//     </h3>

//     <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
//       {skills.map((skill, idx) => (
//         <div
//           key={idx}
//           className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-primary/50 dark:hover:bg-primary/10"
//         >
//           {skill.icon}
//           <h3 className="text-base font-semibold text-white dark:text-slate-200">
//             {skill.name}
//           </h3>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const Skills = () => {
//   return (
//     <Container>
//       <section
//         id="skill"
//         className="py-16 sm:py-18 font-display bg-background-light dark:bg-background-dark"
//       >
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white">
//             My <span className="text-[#04bfff]">Skills</span>
//           </h2>
//           <p className="mt-3 text-lg text-[#ffffffc2] dark:text-slate-400">
//             Technologies and tools I work with
//           </p>
//         </div>

//         {/* Skill Groups */}
//         <SkillGroup title="Frontend Development" skills={frontendSkills} />
//         <SkillGroup title="Tools & Deployment" skills={toolsSkills} />
//       </section>
//     </Container>
//   );
// };

// export default Skills;


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
import { SiCloudflare, SiExpress, SiMongodb, SiNetlify, SiNextdotjs, SiVercel } from "react-icons/si";
import Container from "./Container";
import AOS from "aos";


const frontendSkills = [
  {
    name: "HTML5",
    icon: (
      <FaHtml5
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <FaCss3Alt
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <FaJs
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "React.js",
    icon: (
      <FaReact
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <RiTailwindCssFill
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <FaNodeJs
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "Express.js",
    icon: (
      <SiExpress
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "Firebase",
    icon: (
      <RiFirebaseFill
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
];

const toolsSkills = [
  {
    name: "Git",
    icon: (
      <FaGitAlt
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "GitHub",
    icon: (
      <FaGithub
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "Vercel",
    icon: (
      <SiVercel
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "Netlify",
    icon: (
      <SiNetlify
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "Cloudflare",
    icon: (
      <SiCloudflare
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
  {
    name: "Firebase",
    icon: (
      <RiFirebaseFill
        size={40}
        className="text-white group-hover:text-[#04bfff] transition-colors duration-300"
      />
    ),
  },
];

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
);

const Skills = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <Container>
      <section
        id="skill"
        className="py-16 sm:py-18 font-display bg-background-light dark:bg-background-dark"
      >
        {/* Section Header */}
        <div data-aos="fade-down" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-[#04bfff]">Skills</span>
          </h2>
          <p className="mt-3 text-lg text-[#ffffffc2] dark:text-slate-400">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill Groups */}
        <SkillGroup title="Frontend Development" skills={frontendSkills} />
        <SkillGroup title="Tools & Deployment" skills={toolsSkills} />
      </section>
    </Container>
  );
};

export default Skills;

