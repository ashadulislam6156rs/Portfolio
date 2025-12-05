import React from "react";
import { MdDevices, MdPhoneAndroid, MdDns } from "react-icons/md";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background-dark text-gray-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Services */}
          <div className="relative pl-8">
            <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-gray-600"></div>

            {/* Website Development */}
            <div className="relative flex items-center mb-12">
              <div className="absolute left-[-2rem] w-4 h-4 rounded-full bg-primary z-10"></div>
              <div className="flex items-center space-x-6">
                <MdDevices className="text-4xl text-gray-300" />
                <h3 className="text-xl font-semibold text-white">
                  Website Development
                </h3>
              </div>
            </div>

            {/* App Development */}
            <div className="relative flex items-center mb-12">
              <div className="absolute left-[-2rem] w-4 h-4 rounded-full bg-primary z-10"></div>
              <div className="flex items-center space-x-6">
                <MdPhoneAndroid className="text-4xl text-gray-300" />
                <h3 className="text-xl font-semibold text-white">
                  App Development
                </h3>
              </div>
            </div>

            {/* Website Hosting */}
            <div className="relative flex items-center">
              <div className="absolute left-[-2rem] w-4 h-4 rounded-full bg-primary z-10"></div>
              <div className="flex items-center space-x-6">
                <MdDns className="text-4xl text-gray-300" />
                <h3 className="text-xl font-semibold text-white">
                  Website Hosting
                </h3>
              </div>
            </div>
          </div>

          {/* Right Side - About Text and Stats */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                About me
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I started my software journey from photography. Through that, I
                learned to love the process of creating from scratch. Since
                then, this has led me to software development as it fulfills my
                love for learning and building things.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:text-left">
              <div>
                <p className="text-4xl font-bold text-white">
                  120<span className="text-primary">+</span>
                </p>
                <p className="text-base text-gray-400 mt-2">
                  Completed Projects
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">
                  95<span className="text-primary">%</span>
                </p>
                <p className="text-base text-gray-400 mt-2">
                  Client satisfaction
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">
                  10<span className="text-primary">+</span>
                </p>
                <p className="text-base text-gray-400 mt-2">
                  Years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
