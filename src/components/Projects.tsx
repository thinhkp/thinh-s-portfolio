import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { projects } from "@/data";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="section-padding w-full">
      <h1 className=" section-title block text-4xl leading-9 mb-6">
        Small Selection of{" "}
        <span className="text-[--sub-foreground]">recent projects</span>
      </h1>
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
        {projects.map(({ id, title, des, iconLists, img, link }) => {
          return (
            <div
              key={id}
              className=" py-5 px-[14px] lg:px-6 lg:py-9 bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-3xl border border-[#3637496E] flex flex-col "
            >
              <AspectRatio
                ratio={5 / 3}
                className="px-11 py-7 rounded-[14px]  "
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 40% -50% ,rgba(0,212,255,0.5), transparent)",
                }}
              >
                <div className="w-full h-full relative lg:rounded-lg overflow-hidden">
                  <Image src={`${img}`} fill alt="1" className="object-cover" />
                </div>
              </AspectRatio>
              <div className="lg:my-9 flex flex-col grow mt-5">
                <h2 className="font-bold text-2xl leading-6 text-[32px] mb-3 lg:mb-[18px]">
                  {title}
                </h2>
                <p className="text-[--fade-foregroud] font-normal text-[14px] lg:text-xl leading-[130%] mb-[14px] lg:mb-6 flex-1">
                  {des}
                </p>
                <div className=" flex justify-between items-center">
                  <div className="icon-container flex">
                    {iconLists.map((i, index) => {
                      return (
                        <span
                          key={i}
                          className={clsx(
                            "p-2 box-content border border-[rgba(255,255,255,0.3)] rounded-full flex justify-center items-center bg-[#04071D]",
                            index != 0 && "-ml-1"
                          )}
                        >
                          <Image
                            key={i}
                            src={i || ""}
                            alt="i"
                            width={24}
                            height={24}
                          />
                        </span>
                      );
                    })}
                  </div>
                  <a
                    href={link}
                    className="flex items-center gap-[10px] text-[#CBACF9] hover:underline"
                  >
                    {" "}
                    check live site
                    <ArrowUpRight className="text-[#CBACF9]" stroke="#CBACF9" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
