import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-primary py-4">
      <div className="container mx-auto px-6 flex justify-between items-center text-background-dark">
        <p className="text-sm">
          © 2021 - 2023 <span className="font-bold">DesignToCodes</span>. All
          Rights Reserved
        </p>
        <a
          href="#"
          className="w-10 h-10 bg-card-dark text-white flex items-center justify-center rounded-md hover:bg-opacity-80 transition-opacity"
        >
          <MdKeyboardArrowUp size={24} />
          <span className="sr-only">Back to top</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
