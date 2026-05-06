import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaDatabase,
  FaServer,
  FaReact,
  FaNodeJs,
  FaCalendarAlt,
  FaCode,
} from "react-icons/fa";

const Experience = () => {
  return (
    <div id="experience" className="bg-[#f5f7fb] dark:bg-[#1d232a] text-gray-900 dark:text-[#dae2fd] min-h-screen transition-colors duration-300">

      <main className="pt-10 pb-10 max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-3">Work Experience</h1>
          <div className="h-1 w-24 bg-blue-500"></div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-[#171f33] border border-gray-300 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 transition"
        >

          {/* Top Info */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

            <div>
              <h2 className="text-xl text-blue-500 dark:text-blue-400 font-semibold">
                MERN Stack Developer (Intern)
              </h2>
              <h3 className="text-lg font-bold">DeshIT-BD</h3>

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                <FaCalendarAlt />
                <span>Feb 2026 – Apr 2026</span>
              </div>
            </div>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <FaCode className="text-blue-500 dark:text-blue-400" />
                <h4 className="font-bold">SALIS ERP System</h4>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Worked on an ERP platform to manage large-scale business workflows
                with scalable architecture and optimized performance.
              </p>

              <ul className="space-y-3">
                {[
                  "Full-stack ERP using MySQL, Express, React, Node",
                  "Built REST APIs for data synchronization",
                  "Optimized database queries & performance",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-2"
                  >
                    <FaCheckCircle className="text-blue-500 dark:text-blue-400 mt-1" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid grid-cols-4 gap-3 text-center text-xs">
                {[
                  { icon: <FaDatabase />, name: "MySQL" },
                  { icon: <FaServer />, name: "Express" },
                  { icon: <FaReact />, name: "React" },
                  { icon: <FaNodeJs />, name: "Node" },
                ].map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-200 dark:bg-gray-800 p-3 rounded"
                  >
                    <div className="mx-auto text-blue-500 dark:text-blue-400">
                      {tech.icon}
                    </div>
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default Experience;