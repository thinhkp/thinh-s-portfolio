import React from "react";
import Bgcaro from "./Bgcaro";

const Hero = () => {
  return (
    <section className=" section-padding relative z-0 flex flex-col  items-center w-full pt-[150px]">
      <Bgcaro />
      <div className=" lg:max-w-[60rem] w-full flex flex-col lg:items-center">
        <h1 className=" text-5xl font-bold lg:text-7xl  text-center ">
          Creating More Than Websites,
          <span className="text-[#CBACF9]"> Building User Experiences</span>
        </h1>
        <h5 className="font-medium mt-8 text-xl leading-7 text-[#E4ECFF] text-center">
          Hi! my name is Thinh, I&apos;am Frontend Developer
        </h5>
        <button className=" border-gradient relative mt-8 py-5 px-10 bg-gradient-to-r from-[#161A31] to-[#06091F] rounded-[14px] dark:bg-white ">
          <a href="#projects">See my work</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
