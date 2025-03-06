import React from "react";

const Hero = () => {
  return (
    <section className=" section-padding px-5 md:px-10 bg-caro flex flex-col items-center w-full">
      <h4 className="uppercase lg:mt-60 tracking-widest">
        dynamic web magic with next.js{" "}
      </h4>
      <h1 className="lg:max-w-[60rem] font-bold text-7xl mt-6 ">
        Transforming Concepts into Seamless
        <span className="text-[#CBACF9]"> User Experiences</span>
      </h1>
      <h5 className="mt-8 text-2xl leading-7 text-[#E4ECFF] ">
        Hi! I’m Adrian, a Next.js Developer based in Croatia.
      </h5>
      <button className="mt-8 mb-32 py-5 px-10 bg-gradient-to-r from-[#161A31] to-[#06091F] rounded-[14px] dark:bg-white ">
      See my work
      </button>
    </section>
  );
};

export default Hero;
