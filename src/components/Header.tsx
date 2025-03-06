import React from "react";

const Header = () => {
  return (
    <header className="px-12 py-6 bg-gradient-to-r from-[#04071D] to-[#0C0E23] fixed top-12 left-[50%] rounded-xl translate-x-[-50%] border z-10 ">
      <div className="flex gap-8">
        <a
          className="font-medium text-[#C1C2D3] hover:text-white text-base leading-4"
          href=""
        >
          About
        </a>
        <a
          className="font-medium text-[#C1C2D3] hover:text-white text-base leading-4"
          href=""
        >
          Project
        </a>
        <a
          className="font-medium text-[#C1C2D3] hover:text-white text-base leading-4"
          href=""
        >
          Testimonials
        </a>
        <a
          className="font-medium text-[#C1C2D3] hover:text-white text-base leading-4"
          href=""
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
