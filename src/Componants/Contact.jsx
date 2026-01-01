import React from "react";
import { MdMail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const handleEmailClick = () => {
    const email = "ashadulislam6156rs@gmail.com";
    isMobile
      ? (window.location.href = `mailto:${email}`)
      : window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
          "_blank"
        );
  };

  const handlePhoneClick = async () => {
    const phone = "+8801859246156";
    if (isMobile) window.location.href = `tel:${phone}`;
    else {
      await navigator.clipboard.writeText(phone);
      toast.success("Phone number copied 📞");
    }
  };

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

  return (
    <section
      id="contact"
      className="py-16 md:py-24 dark:from-background-dark dark:to-background-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-800 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            Have a question, a project in mind, or just want to say hello? Feel
            free to reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleFormSubmit}
              className="bg-white dark:bg-[#182934]
              border border-slate-200 dark:border-[#315168]
              rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col gap-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Input name="name" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
              </div>

              <Input placeholder="Subject" />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border resize-none
                bg-white dark:bg-[#182934]
                text-slate-800 dark:text-white
                border-slate-300 dark:border-[#315168]
                focus:ring-2 focus:ring-[#04bfff]/50 outline-none"
              />

              <button className="h-12 rounded-lg bg-[#04bfff] text-black font-bold tracking-wide hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div
              className="h-full flex flex-col gap-6
              bg-white dark:bg-[#182934]
              border border-slate-200 dark:border-[#315168]
              rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <InfoItem
                icon={<MdMail size={22} />}
                label="Email"
                value="ashadulislam6156rs@gmail.com"
                onClick={handleEmailClick}
              />
              <InfoItem
                icon={<FaPhone size={20} />}
                label="Phone"
                value="+8801859246156"
                onClick={handlePhoneClick}
              />
              <InfoItem
                icon={<FaWhatsapp size={20} />}
                label="WhatsApp"
                value="01859246156"
                onClick={handleWhatsappClick}
              />
              <InfoItem
                icon={<MdLocationOn size={22} />}
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

/* ================= INPUT ================= */

const Input = ({ type = "text", ...props }) => (
  <input
    type={type}
    className="w-full h-12 px-4 rounded-lg border
    bg-white dark:bg-[#182934]
    text-slate-800 dark:text-white
    border-slate-300 dark:border-[#315168]
    focus:ring-2 focus:ring-[#04bfff]/50 outline-none"
    {...props}
  />
);

/* ================= INFO ITEM ================= */

const InfoItem = ({ icon, label, value, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-4 p-3 rounded-lg transition
    ${
      onClick ? "cursor-pointer hover:bg-slate-100 dark:hover:bg-[#1f3442]" : ""
    }`}
  >
    <div className="h-11 w-11 flex items-center justify-center rounded-full bg-[#04bfff]/20 text-[#04bfff]">
      {icon}
    </div>
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <p className="font-medium text-slate-800 dark:text-white">{value}</p>
    </div>
  </div>
);

export default Contact;
