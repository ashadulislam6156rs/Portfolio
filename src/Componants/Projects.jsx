import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoMdCode } from "react-icons/io";
import Container from "./Container";
import plateShareImg from "../assets/banner-2.png";
import coffeeGardenImg from "../assets/17.png";
import toyTalesImg from "../assets/toy-2.png";
import eTuitionTrackImg from "../assets/eTuitionTrack.jpg";
import smartAppsImg from "../assets/demo-app.webp";
import boiPokaImg from "../assets/books.jpg";
import bplImg from "../assets/banner-main.png";
import AOS from "aos";
import useTheme from "../hook/useTheme";

const projects = [
  {
    title: "eTuitionTrack",
    description:
      "eTuitionTrack is a modern digital tuition management system that connects students, tutors, and administrators...",
    image: eTuitionTrackImg,
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    live: "https://etuitiontrack.netlify.app/",
    code: "https://github.com/ashadulislam6156rs/eTuitionTrack-Client.git",
  },
  {
    title: "PlateShare Community",
    description:
      "PlateShare is a community-powered food sharing platform that connects generous donors with individuals and families in need.",
    image: plateShareImg,
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    live: "https://plateshare-community.netlify.app/",
    code: "https://github.com/ashadulislam6156rs/PlateShare-Community-Client.git",
  },
  {
    title: "Coffee Garden",
    description:
      "Coffee Garden is a modern Next.js application that allows users to discover different coffee types.",
    image: coffeeGardenImg,
    tags: ["Next.js", "React.js", "Express.js", "MongoDB"],
    live: "https://coffee-garden-delta.vercel.app/",
    code: "https://github.com/ashadulislam6156rs/Coffee-Garden-With-Next.js.git",
  },
  {
    title: "Toy Store Platform",
    description:
      "ToyTales is a modern React-based web app where users can explore different toys.",
    image: toyTalesImg,
    tags: ["React.js", "Tailwind CSS", "Swiper", "Axios"],
    live: "https://toy-store-platform-toytales.web.app/",
    code: "https://github.com/ashadulislam6156rs/Toy-Store-Platform-ToyTales.git",
  },
  {
    title: "Boipoka",
    description:
      "Boipoka is a modern book discovery web application with clean and user-friendly interface.",
    image: boiPokaImg,
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Recharts"],
    live: "https://boipoka-book.netlify.app/",
    code: "https://github.com/ashadulislam6156rs/boiPoka.git",
  },
  {
    title: "Smart Apps",
    description:
      "Smart Apps is a modern web platform for discovering trending mobile and web apps.",
    image: smartAppsImg,
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Axios"],
    live: "https://react-smart-apps.netlify.app/",
    code: "https://github.com/ashadulislam6156rs/react-hero-apps.git",
  },
  {
    title: "BPL Dream",
    description:
      "BPL-Dream 11 is a React-based fantasy cricket app for Bangla Premier League.",
    image: bplImg,
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    live: "https://react-project-bpl-dream.netlify.app/",
    code: "https://github.com/ashadulislam6156rs/React-Project-BPL-Dream.git",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    AOS.refresh();
  }, [currentPage]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <Container>
      <section
        id="projects"
        className={`py-7 sm:py-5 font-display ${
          theme === "dark" ? "bg-background-dark" : "bg-background-light"
        }`}
      >
        <h2
          data-aos="fade-up"
          className={`text-3xl text-center font-bold pb-5 pt-7 sm:text-4xl ${
            theme === "dark" ? "text-white" : "text-[#04bfff]"
          }`}
        >
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className={`
                flex flex-col overflow-hidden rounded-xl transition-all duration-300
                hover:-translate-y-1 hover:shadow-md hover:shadow-[#04bfff]
                ${
                  theme === "dark"
                    ? "bg-[#1A202C]/50 ring-1 ring-white/10"
                    : "bg-white ring-1 ring-slate-200"
                }
              `}
            >
              <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="flex flex-1 flex-col p-6">
                <h3
                  className={`text-lg font-medium ${
                    theme === "dark" ? "text-white" : "text-slate-800"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[#04c0ff38] px-3 py-1 text-xs font-medium text-[#04bfff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#04bfff] px-4 py-2 text-sm font-semibold text-white hover:bg-[#04c0ff96]"
                  >
                    <AiOutlineEye size={18} />
                    View Live
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                      theme === "dark"
                        ? "bg-slate-700 text-white hover:bg-slate-600"
                        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                    }`}
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
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="h-9 w-9 rounded-lg text-[#04bfff]"
            >
              <AiOutlineLeft />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-9 w-9 rounded-lg ${
                  page === currentPage
                    ? "border border-[#04bfff] text-[#04bfff]"
                    : theme === "dark"
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="h-9 w-9 rounded-lg text-[#04bfff]"
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Projects;
