import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import Container from "./Container";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <Container>
      <div className="py-4">
        <div className="container mx-auto px-3 md:px-6 flex justify-between items-center text-background-dark">
          <p className="md:text-xl text-xs font-semibold text-[#182934]">
            © 2025 <span className="font-bold">Ashadul islam</span>. All
            Rights Reserved
          </p>
          <button
            onClick={() => scroll.scrollToTop({ duration: 500 })}
            className="w-10 cursor-pointer bg-[#182934] h-10 bg-card-dark text-white flex items-center justify-center rounded-md hover:bg-opacity-80 transition-opacity"
          >
            <MdKeyboardArrowUp size={24} />
            <span className="sr-only">Back to top</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
