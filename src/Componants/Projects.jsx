import React from "react";
import {
  AiOutlineEye,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { IoMdCode } from "react-icons/io";
import Container from "./Container";
import plateShareImg from "../assets/banner-2.png"
import coffeeGardenImg from "../assets/17.png";
import toyTalesImg from "../assets/toy-2.png";

const projects = [
  {
    title: "PlateShare Community",
    description:
      "PlateShare is a community-driven platform connecting food donors with those in need, reducing waste and fostering local connections.",
    image: `${plateShareImg}`,
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    live: "https://plateshare-community.netlify.app/",
    code: "https://github.com/ashadulislam6156rs/PlateShare-Community-Client.git",
  },
  {
    title: "Coffee Garden",
    description:
      "Coffee Garden is a modern Next.js application that allows users to discover different coffee types, explore detailed flavor profiles, and save their favorite brews to a personalized collection.",
    image: `${coffeeGardenImg}`,
    tags: ["Next.js", "React.js", "Express.js", "MongoDB"],
    live: "https://coffee-garden-delta.vercel.app/",
    code: "https://github.com/ashadulislam6156rs/Coffee-Garden-With-Next.js.git",
  },
  {
    title: "Toy Store Platform",
    description: `ToyTales is a modern React-based web app where users can view information about various types of toys, learn more, and add their favorite toys.
    `,
    image: `${toyTalesImg}`,
    tags: ["React.js", "Tailwind CSS", "Swiper", "Axios"],
    live: "https://toy-store-platform-toytales.web.app/",
    code: "https://github.com/ashadulislam6156rs/Toy-Store-Platform-ToyTales.git",
  },
];

const Projects = () => {
  return (
    <Container>
      <section
        id="projects"
        className="py-7 sm:py-5 font-display bg-background-light dark:bg-background-dark"
      >
        <div>
          <h2 className="text-3xl text-center font-bold pb-5 pt-7 leading-tight tracking-tight text-[#04bfff] dark:text-white sm:text-4xl">
            My Projects
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="flex transform flex-col overflow-hidden rounded-xl bg-[#2D3748]/20 ring-1 ring-inset ring-slate-900/10 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[#04bfff] hover:shadow-md dark:bg-[#1A202C]/50 dark:ring-white/10"
              >
                <div
                  className="w-full bg-cover bg-center bg-no-repeat aspect-video"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-medium text-white dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#ffffffae] dark:text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-[#04c0ff38] px-3 py-1 text-xs font-medium text-[#04bfff] dark:text-primary/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-1 items-end gap-4">
                    <a
                      href={project.live}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#04bfff] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#04c0ff96]"
                    >
                      <AiOutlineEye size={18} />
                      View Live
                    </a>
                    <a
                      href={project.code}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#324155] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:text-[#324155] transition-colors hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                    >
                      <IoMdCode size={18} />
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
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-slate-200/50 dark:text-slate-400 dark:hover:bg-slate-800/50"
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
                            ? "border border-[#04bfff] text-[#04bfff]"
                            : "text-white hover:bg-slate-200/50 dark:text-slate-400 dark:hover:bg-slate-800/50"
                        } transition-colors`}
                        href="#"
                      >
                        {page}
                      </a>
                    ) : (
                      <span className="flex h-9 w-9 items-center justify-center text-white dark:text-slate-400">
                        {page}
                      </span>
                    )}
                  </li>
                ))}
                <li>
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-slate-200/50 dark:text-slate-400 dark:hover:bg-slate-800/50"
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
    </Container>
  );
};

export default Projects;
