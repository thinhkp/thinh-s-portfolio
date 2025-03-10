import { socialMedia } from "@/data";
import Image from "next/image";
import React from "react";
import Bgcaro from "./Bgcaro";

const Contact = () => {
  return (
    <section id="contact" className="section-padding z-0 relative pt-[148px] pb-[90px] ">
      <Bgcaro />
      <div className="mx-auto lg:max-w-[720px]">
        <div className="lg:py-40 flex flex-col items-center lg:gap-5">
          <h1 className=" font-bold lg:text-5xl text-center text-4xl ">
            Shall we cooperate ?
          </h1>
          <h2 className=" font-bold text-4xl lg:text-5xl text-center">
            <span className="text-[--sub-foreground] "> Contact </span>
            me now !
          </h2>
          <div className="flex gap-5 mt-5">
            {socialMedia.map(({ id, img, link }) => {
              return (
                <a
                  target="_blank"
                  key={id}
                  href={link}
                  className="p-4 rounded-lg border border-[rgba(255,255,255,0.3)]"
                >
                  <Image src={img} alt="id" width={24} height={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
