import React from "react";
import { MdSchool } from "react-icons/md";

const educationData = [
  {
    degree: "M.S. in Computer Science",
    university: "Stanford University",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Completed a thesis on neural network optimization techniques.",
    period: "SEP 2019 - JUN 2021",
    side: "left",
  },
  {
    degree: "B.S. in Software Engineering",
    university: "University of California, Berkeley",
    description:
      "Graduated Summa Cum Laude. Focused on software development methodologies, data structures, and algorithms. President of the Coding Club.",
    period: "SEP 2015 - JUN 2019",
    side: "right",
  },
  {
    degree: "High School Diploma",
    university: "Palo Alto High School",
    description:
      "Valedictorian. Active in Mathletes and the school's robotics team, competing at the national level.",
    period: "AUG 2011 - MAY 2015",
    side: "left",
  },
];

const EducationTimeline = () => {
  return (
    <section
      id="education"
      className="bg-background-light dark:bg-background-dark font-display antialiased py-16 sm:py-24 px-4"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
            EDUCATION
          </h2>
          <div className="absolute inset-x-0 top-1/2 -z-10 flex justify-center items-center">
            <div className="h-px w-full max-w-lg bg-slate-300 dark:bg-slate-700"></div>
          </div>
          <div className="mx-auto mt-4 h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center">
            <MdSchool className="text-slate-500 dark:text-slate-400 w-6 h-6" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-slate-300 dark:bg-slate-700"></div>
          <div className="space-y-16">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative flex items-center">
                {/* Left side */}
                <div
                  className={`w-1/2 pr-8 sm:pr-12 ${
                    edu.side === "left" ? "text-right" : "text-left"
                  }`}
                >
                  {edu.side === "left" && (
                    <>
                      <p className="font-semibold text-lg text-slate-800 dark:text-slate-200">
                        {edu.degree}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {edu.university}
                      </p>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        {edu.description}
                      </p>
                    </>
                  )}
                  {edu.side === "right" && (
                    <div className="inline-block bg-slate-700 dark:bg-slate-800 text-white font-semibold text-xs sm:text-sm py-2 px-4 rounded-full shadow-md">
                      {edu.period}
                    </div>
                  )}
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background-light dark:bg-background-dark border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>

                {/* Right side */}
                <div
                  className={`w-1/2 pl-8 sm:pl-12 ${
                    edu.side === "right" ? "" : ""
                  }`}
                >
                  {edu.side === "right" && (
                    <>
                      <p className="font-semibold text-lg text-slate-800 dark:text-slate-200">
                        {edu.degree}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {edu.university}
                      </p>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        {edu.description}
                      </p>
                    </>
                  )}
                  {edu.side === "left" && (
                    <div className="inline-block bg-slate-700 dark:bg-slate-800 text-white font-semibold text-xs sm:text-sm py-2 px-4 rounded-full shadow-md">
                      {edu.period}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
