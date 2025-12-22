
import React from "react";
import { MdMail, MdLocationOn } from "react-icons/md";
import {
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  // Smart click handlers
  const handleEmailClick = () => {
    const email = "ashadulislam6156rs@gmail.com";
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) window.location.href = `mailto:${email}`;
    else
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank"
      );
  };

  const handlePhoneClick = () => {
    const phone = "+8801859246156";
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) window.location.href = `tel:${phone}`;
    else {
      navigator.clipboard.writeText(phone);
      alert(`${phone} copied to clipboard!`);
    }
  };

  const handleWhatsappClick = () => {
    const phone = "01859246156";
    const message = "Hello, I visited your portfolio";
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) window.location.href = waLink;
    else window.open(waLink, "_blank");
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    // const email = e.target.email.value;
    toast.success(`Thank you ${name}! Your message has been received.`)
    
  }

  return (
    <section id="contact" className="flex-1 py-7 md:py-20 bg-background-dark">
      <div className="px-4 sm:px-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-wrap justify-between gap-3 mb-10">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
              Get In Touch
            </p>
            <p className="text-[#ffffff83] text-base font-normal leading-normal max-w-md">
              Have a question, a project in mind, or just want to say hello? I'd
              love to hear from you. Fill out the form or use the contact
              details provided.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="flex flex-col flex-1">
                  <p className="text-white text-base font-medium pb-2">
                    Your Name
                  </p>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    name="name"
                    className="form-input flex w-full rounded-lg h-14 p-[15px] text-base text-white placeholder:text-[#90b2cb] bg-[#182934] border border-[#315168] focus:outline-0 focus:ring-2 focus:ring-[#04bfff]/50"
                  />
                </label>

                <label className="flex flex-col flex-1">
                  <p className="text-white text-base font-medium pb-2">
                    Your Email
                  </p>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="form-input flex w-full rounded-lg h-14 p-[15px] text-base text-white placeholder:text-[#90b2cb] bg-[#182934] border border-[#315168] focus:outline-0 focus:ring-2 focus:ring-[#04bfff]/50"
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <p className="text-white text-base font-medium pb-2">Subject</p>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="form-input flex w-full rounded-lg h-14 p-[15px] text-base text-white placeholder:text-[#90b2cb] bg-[#182934] border border-[#315168] focus:outline-0 focus:ring-2 focus:ring-[#04bfff]/50"
                />
              </label>

              <label className="flex flex-col">
                <p className="text-white text-base font-medium pb-2">Message</p>
                <textarea
                  placeholder="Write your message here..."
                  rows={6}
                  className="form-textarea flex w-full rounded-lg p-[15px] text-base text-white placeholder:text-[#90b2cb] bg-[#182934] border border-[#315168] focus:outline-0 focus:ring-2 focus:ring-[#04bfff]/50 resize-y"
                ></textarea>
              </label>

              <button className="w-full sm:w-auto h-12 px-6 bg-[#04bfff] text-black font-bold rounded-lg hover:bg-[#04bfff]/90 transition-colors">
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
                {/* Email */}
                <div
                  onClick={handleEmailClick}
                  className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#04bfff]/20 text-[#04bfff]">
                    <MdMail size={24} />
                  </div>
                  <div>
                    <p className="text-[#ffffff83] text-sm">Email</p>
                    <p className="text-white text-base font-medium hover:text-[#04bfff] transition-colors">
                      ashadulislam6156rs@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div
                  onClick={handlePhoneClick}
                  className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#04bfff]/20 text-[#04bfff]">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <p className="text-[#ffffff83] text-sm">Phone</p>
                    <p className="text-white text-base font-medium hover:text-[#04bfff] transition-colors">
                      +8801859246156
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div
                  onClick={handleWhatsappClick}
                  className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#04bfff]/20 text-[#04bfff]">
                    <FaWhatsapp size={20} />
                  </div>
                  <div>
                    <p className="text-[#ffffff83] text-sm">WhatsApp</p>
                    <p className="text-white text-base font-medium hover:text-[#04bfff] transition-colors">
                      01859246156
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#04bfff]/20 text-[#04bfff]">
                    <MdLocationOn size={24} />
                  </div>
                  <div>
                    <p className="text-[#ffffff83] text-sm">Location</p>
                    <p className="text-white text-base font-medium">
                      Uttara, Dhaka-Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

