import React from "react";
import { MdMail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { toast } from "react-toastify";
import useTheme from "../hook/useTheme";

const Contact = () => {
  const { theme } = useTheme();
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Email
  const handleEmailClick = () => {
    const email = "ashadulislam6156rs@gmail.com";
    if (isMobile) window.location.href = `mailto:${email}`;
    else
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank"
      );
  };

  // Phone
  const handlePhoneClick = async () => {
    const phone = "+8801859246156";
    if (isMobile) window.location.href = `tel:${phone}`;
    else {
      await navigator.clipboard.writeText(phone);
      toast.success("Phone number copied 📞");
    }
  };

  // WhatsApp
  const handleWhatsappClick = () => {
    const phone = "8801859246156";
    const message = "Hello, I visited your portfolio";
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    isMobile ? (window.location.href = waLink) : window.open(waLink, "_blank");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    toast.success(`Thank you ${name}! Your message has been received 🚀`);
    e.target.reset();
  };

  /* ================= THEME COLORS ================= */
  const sectionBg = theme === "dark" ? "bg-background-dark" : "bg-[#f8fafc]";

  const headingText = theme === "dark" ? "text-white" : "text-slate-800";

  const mutedText = theme === "dark" ? "text-[#ffffff83]" : "text-slate-600";

  const cardBg =
    theme === "dark"
      ? "bg-[#182934] border-[#315168]"
      : "bg-white border-slate-200 shadow-sm";

  const inputBg =
    theme === "dark"
      ? "bg-[#182934] text-white border-[#315168]"
      : "bg-white text-slate-800 border-slate-300";

  /* ================================================= */

  return (
    <section id="contact" className={`flex-1 py-7 md:py-20 ${sectionBg}`}>
      <div className="px-4 sm:px-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h2 className={`text-4xl sm:text-5xl font-black ${headingText}`}>
            Get In Touch
          </h2>
          <p className={`mt-3 max-w-md ${mutedText}`}>
            Have a question, a project in mind, or just want to say hello? I'd
            love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className={`h-14 px-4 rounded-lg border focus:ring-2 focus:ring-[#04bfff]/50 outline-none ${inputBg}`}
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className={`h-14 px-4 rounded-lg border focus:ring-2 focus:ring-[#04bfff]/50 outline-none ${inputBg}`}
                />
              </div>

              <input
                placeholder="Subject"
                className={`h-14 px-4 rounded-lg border focus:ring-2 focus:ring-[#04bfff]/50 outline-none ${inputBg}`}
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className={`px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#04bfff]/50 outline-none resize-y ${inputBg}`}
              />

              <button className="h-12 px-6 bg-[#04bfff] text-black font-bold rounded-lg hover:bg-[#04bfff]/90 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div
              className={`flex flex-col gap-6 p-6 rounded-xl border ${cardBg}`}
            >
              <InfoItem
                theme={theme}
                icon={<MdMail size={24} />}
                label="Email"
                value="ashadulislam6156rs@gmail.com"
                onClick={handleEmailClick}
              />
              <InfoItem
                theme={theme}
                icon={<FaPhone size={20} />}
                label="Phone"
                value="+8801859246156"
                onClick={handlePhoneClick}
              />
              <InfoItem
                theme={theme}
                icon={<FaWhatsapp size={20} />}
                label="WhatsApp"
                value="01859246156"
                onClick={handleWhatsappClick}
              />
              <InfoItem
                theme={theme}
                icon={<MdLocationOn size={24} />}
                label="Location"
                value="Uttara, Dhaka - Bangladesh"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= INFO ITEM ================= */

const InfoItem = ({ icon, label, value, onClick, theme }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-4 ${
      onClick ? "cursor-pointer hover:opacity-90" : ""
    }`}
  >
    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#04bfff]/20 text-[#04bfff]">
      {icon}
    </div>
    <div>
      <p
        className={`text-sm ${
          theme === "dark" ? "text-[#ffffff83]" : "text-slate-500"
        }`}
      >
        {label}
      </p>
      <p
        className={`font-medium transition ${
          theme === "dark"
            ? "text-white hover:text-[#04bfff]"
            : "text-slate-800 hover:text-[#04bfff]"
        }`}
      >
        {value}
      </p>
    </div>
  </div>
);

export default Contact;
