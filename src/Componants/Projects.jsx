import React from "react";
import {
  AiOutlineEye,
  AiOutlineCode,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

const projects = [
  {
    title: "Analytics Dashboard",
    description:
      "A powerful, real-time analytics dashboard for monitoring web traffic and user engagement with custom reporting features.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSIHL-zU3ZHTiv3VmWjiOI7J_naK-QPHv4OHAOTl-eyoiGHjIUAT44goZnYWBw_0FFKKB-68cQWILFgTWld4C94iEIv2vJK1rgt5ubJU-YTKwKkpQojD49BhGFTKrhBdepdhU0tPOY8nT1SO3NpHNpidVrRC5OeDUuBQp52i1yatzQL_nUHfNQURV6tKVhL4UJv4XfZ_k7O2Po9cjAAqHsuei3eE8eyHJvgucUfgrZLmFbmMRhkRJxck0uqlH809EC5E4POCUKA68z",
    tags: ["React", "Node.js", "D3.js"],
    live: "#",
    code: "#",
  },
  {
    title: "E-commerce App",
    description:
      "A cross-platform mobile application for a seamless online shopping experience, featuring secure payments and order tracking.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3-9MKVy8IlzYx1L9HF0YSHlRdOwf4EeADGV5P41eht44jzbsWeBuhCSIp3k6GUy7rgrMukwdZGSRWxYHKInnB_uLOVDb_k_0oV0Pm7aaSuuYoXkb_wbCvhm4bM5NSONwPI8YgusTSSB7k6O29kdaNx036IgA80-EvGNaseagRosCrpUs8osY0csJ6p7ml835EC4zV_xH0Otxo8P8WqVO2FqmLJ60ugXOwQo8QCHT3AD4VMxh7QhoV1Pxd8H1nJ-XLoTpgCZcWv2B",
    tags: ["React Native", "Firebase", "Stripe"],
    live: "#",
    code: "#",
  },
  {
    title: "Cloud Manager",
    description:
      "A DevOps tool designed to automate cloud infrastructure deployment and management across multiple providers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-U3XKaGrNSxV3cBvesEabckdIqrsMUdv4vmby2guI0DBQZJLjHjMcZg7vKQFvD9EEZ2jqh0oZVVgMFx7h4wquHnW8JkFwzlJpCfUz0T-bpH6VKC9IbrzAJQ6orODnsdXF0-xel0XJT-vwSTpoTHaXNK8P59fzKxR8C9tS69hK0z3ctKreCgiA1-LWM6LEoHucmytHoSc_nMIZe31J-RlEgLe6Ft9hJ3RaLF0P_AIPdBEcqC12_uK5dCKd8nkC4lzJfbEVV4ivHVJg",
    tags: ["Python", "Docker", "AWS"],
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 font-display bg-background-light dark:bg-background-dark"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          My Latest Projects
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex transform flex-col overflow-hidden rounded-xl bg-[#2D3748]/20 ring-1 ring-inset ring-slate-900/10 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl dark:bg-[#1A202C]/50 dark:ring-white/10"
            >
              <div
                className="w-full bg-cover bg-center bg-no-repeat aspect-video"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:text-primary/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-1 items-end gap-4">
                  <a
                    href={project.live}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/80"
                  >
                    <AiOutlineEye size={18} />
                    View Live
                  </a>
                  <a
                    href={project.code}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                  >
                    <AiOutlineCode size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav aria-label="Pagination">
            <ul className="flex items-center gap-2 text-sm">
              <li>
                <a
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-200/50 dark:text-slate-400 dark:hover:bg-slate-800/50"
                  href="#"
                >
                  <span className="sr-only">Previous</span>
                  <AiOutlineLeft size={20} />
                </a>
              </li>
              {[1, 2, 3, "...", 8].map((page, idx) => (
                <li key={idx}>
                  {typeof page === "number" ? (
                    <a
                      aria-current={page === 1 ? "page" : undefined}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        page === 1
                          ? "border border-primary text-primary"
                          : "text-slate-600 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:bg-slate-800/50"
                      } transition-colors`}
                      href="#"
                    >
                      {page}
                    </a>
                  ) : (
                    <span className="flex h-9 w-9 items-center justify-center text-slate-500 dark:text-slate-400">
                      {page}
                    </span>
                  )}
                </li>
              ))}
              <li>
                <a
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-200/50 dark:text-slate-400 dark:hover:bg-slate-800/50"
                  href="#"
                >
                  <span className="sr-only">Next</span>
                  <AiOutlineRight size={20} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Projects;
