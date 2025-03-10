"use client";
import React, { useEffect } from "react";
import { navItems } from "@/data";

const Header = () => {
  useEffect(() => {
    const header = document.getElementById("header");
    let scrollY = 0;
    let isDown = false;
    header?.classList.remove("opacity-0", "translate-y-[-200%]");
    window.addEventListener("scroll", () => {
      isDown = window.scrollY > scrollY;
      if (isDown) {
        header?.classList.add("opacity-0", "translate-y-[-200%]");
        console.log("down");
      } else {
        header?.classList.remove("opacity-0", "translate-y-[-200%]");
        console.log("up2");
      }
      scrollY = window.scrollY;
    });
  }, []);

  return (
    <header
      id="header"
      className=" transition-all duration-1000 px-12 py-6 bg-gradient-to-r from-[#04071D] to-[#0C0E23] fixed top-12 left-[50%] rounded-xl translate-x-[-50%]  translate-y-[-200%] border border-[rgba(255,255,255,0.3)] z-10 opacity-0' "
    >
      <div className="flex gap-8">
        {navItems.map(({name , link}) => {
          return (
            <a
             key={name}
              className="font-medium text-[#C1C2D3] hover:text-white text-base leading-4"
              href={link}
            >
              {name}
            </a>
          );
        })}
        
      </div>
    </header>
  );
};

export default Header;
