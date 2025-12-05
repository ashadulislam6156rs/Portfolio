import React from "react";
import { MdMail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="flex-1 py-12 md:py-20 bg-background-dark">
      <div className="px-4 sm:px-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-wrap justify-between gap-3 mb-10">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
              Get In Touch
            </p>
            <p className="text-[#90b2cb] text-base font-normal leading-normal max-w-md">
              Have a question, a project in mind, or just want to say hello? I'd
              love to hear from you. Fill out the form or use the contact
              details provided.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="flex flex-col flex-1">
                  <p className="text-white text-base font-medium pb-2">
                    Your Name
                  </p>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="form-input flex w-full rounded-lg h-14 p-[15px] text-base text-white placeholder:text-[#90b2cb] bg-[#182934] border border-[#315168] focus:outline-0 focus:ring-2 focus:ring-primary/50"
                  />
                </label>

                <label className="flex flex-col flex-1">
                  <p className="text-white text-base font-medium pb-2">
                    Your Email
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="form-input flex w-full rounded-lg h-14 p-[15px] text-base text-white placeholder:text-[#90b2cb] bg-[#182934] border border-[#315168] focus:outline-0 focus:ring-2 focus:ring-primary/50"
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <p className="text-white text-base font-medium pb-2">Subject</p>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="form-input flex w-full rounded-lg h-14 p-[15px] text-base text-white placeholder:text-[#90b2cb] bg-[#182934] border border-[#315168] focus:outline-0 focus:ring-2 focus:ring-primary/50"
                />
              </label>

              <label className="flex flex-col">
                <p className="text-white text-base font-medium pb-2">Message</p>
                <textarea
                  placeholder="Write your message here..."
                  rows={6}
                  className="form-textarea flex w-full rounded-lg p-[15px] text-base text-white placeholder:text-[#90b2cb] bg-[#182934] border border-[#315168] focus:outline-0 focus:ring-2 focus:ring-primary/50 resize-y"
                ></textarea>
              </label>

              <button className="w-full sm:w-auto h-12 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-8 p-6 rounded-xl bg-[#182934] border border-[#315168]">
              <h3 className="text-white text-xl font-bold">
                Contact Information
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <MdMail size={24} />
                  </div>
                  <div>
                    <p className="text-[#90b2cb] text-sm">Email</p>
                    <a
                      href="mailto:hello@developer.com"
                      className="text-white text-base font-medium hover:text-primary transition-colors"
                    >
                      hello@developer.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <MdLocationOn size={24} />
                  </div>
                  <div>
                    <p className="text-[#90b2cb] text-sm">Location</p>
                    <p className="text-white text-base font-medium">
                      San Francisco, USA
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#315168]"></div>

              <h3 className="text-white text-xl font-bold">Follow Me</h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#315168] text-[#90b2cb] hover:bg-primary hover:text-white transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#315168] text-[#90b2cb] hover:bg-primary hover:text-white transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#315168] text-[#90b2cb] hover:bg-primary hover:text-white transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
