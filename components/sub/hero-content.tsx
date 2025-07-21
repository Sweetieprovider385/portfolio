"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const HeroContent = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Blockchain Developer Portfolio
          </h1>
        </div>

        <div className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto">
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            project experience.
          </span>
        </div>

        <p className="text-lg text-gray-400 my-5 max-w-[600px]">
          I&apos;m a Full Stack and Blockchain Software Engineer with experience in Website,
          Mobile, DeFi, DEX, DAO, NFT and Software development. Check out my projects and skills.
        </p>

        <a
          href="/resume"
          className="py-2 px-4 bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-center cursor-pointer rounded-lg max-w-[200px] transition-all duration-300"
        >
          View CV
        </a>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </div>
    </div>
  );
};
