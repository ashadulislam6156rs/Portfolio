import React from "react";
import { MdSchool } from "react-icons/md";
import Container from "./Container";

const educationData = [
  {
    year: "2022 - Present",
    title: "B.Sc in CSE",
    institution: "Northen University Bangladesh",
    description: "Currently studying Computer Science & Engineering",
  },
  {
    year: "2019-2021",
    title: "HSC",
    institution: "Royel Media College Mymensingh",
    description: "Science group, GPA 4.10",
  },
  {
    year: "2018",
    title: "SCC",
    institution: "Ashujia J.N.C Institution, Kendua, Netrokona",
    description: "Science group, GPA 4.50",
  },
];

const EducationTimeline = () => {
  return (
    <Container>
      <section
        id="education"
        className="bg-background-light dark:bg-background-dark font-display antialiased py-5"
      >
        <div>
          {/* Section Header */}
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#04bfff] dark:text-slate-200 pb-3">
              EDUCATION
            </h2>
            <div className="absolute inset-x-0 top-13 -z-10 flex justify-center items-center">
              <div className="h-px w-full max-w-lg bg-slate-300 dark:bg-slate-700"></div>
            </div>
            
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto p-6">

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-300"></div>

              {/* Timeline Items */}
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-10 mb-10">
                  {/* Marker */}
                  <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>

                  {/* Content Card */}
                  <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}{" "}
                      <span className="text-blue-500">({item.year})</span>
                    </h3>
                    <p className="text-sm text-gray-500">{item.institution}</p>
                    <p className="text-gray-700 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default EducationTimeline;
