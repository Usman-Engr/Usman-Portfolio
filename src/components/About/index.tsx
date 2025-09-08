"use client";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import { h1 } from "framer-motion/client";

const About = () => {
  const [copied, setCopied] = useState(false);
  const TechImages = [
    "/javascript.svg",
    "/nextjs.svg",
    "/typescript.svg",
    "/vscode.svg",
    "/github.svg",
  ];
  const handleClick = () => {
    navigator.clipboard.writeText("engrusmanbasharat@gmail.com");
    setCopied(!copied);
    toast.success("Email Copied");
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div
      id="about"
      className="w-full h-full flex flex-col items-center justify-center py-[64px] px-[15px] lg:px-[24px]"
    >
      {/* Heading */}
      <div className="w-full h-full flex flex-col gap-[16px] items-center justify-center">
        <h1 className="text-black font-semibold text-[49px] lg:w-[50%] mx-auto text-center">
          About Me
        </h1>
        <p className="w-full lg:w-[48%] text-center text-[#000000b3]">
          Lets build something amazing together. Read more about my journey or
          book a call to discuss your next project!
        </p>
      </div>

      <div className="w-full h-[48px]"></div>

      {/* Main Image + Avatar */}
      <div className="w-full lg:w-[58%] h-full flex flex-col items-center justify-center gap-[32px] overflow-hidden">
        <div className="w-full relative">
          {/* Background */}
          <Image
            width={100}
            height={100}
            src="/aboutimage.avif"
            alt="Cover Image"
            className="w-full h-[300px] lg:h-[420px] object-cover rounded-[8px]"
          />

          {/* Shadow behind Avatar */}
          <Image
            width={100}
            height={100}
            src="/aboutshadow.svg"
            alt="shadow"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[380px] blur-2xl"
          />

          {/* Avatar + Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center lg:items-center lg:gap-2 text-center lg:text-left">
              <Image
                width={100}
                height={100}
                src="/avatar.png"
                alt="Avatar"
                className="w-[120px] lg:w-[140px] rounded-full object-center"
              />
              <div className="mt-4 lg:mt-0">
                <h1 className="text-black font-bold text-xl lg:text-2xl">
                  Usman Basharat
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700">
                  <LuMapPin className="text-red-500" />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second main div  */}
        <div
          id="contact"
          className="w-full flex flex-col lg:flex-row gap-[24px] lg:gap-2 bg-[#dee0e5] rounded-[8px] p-[24px] lg:p-[32px]"
        >
          <div className="w-full flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[8px]">
              <h1 className="text-xl font-semibold">Book a call</h1>
              <p className="text-[#000000b3]">
                Lets have a chat about your next project or idea!
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => (window.location.href = "tel:+923181512749")}
                className="bg-white text-black hover:bg-black hover:text-white cursor-pointer transition-all duration-200 px-[12px] py-[6px] rounded-[40px] w-fit"
              >
                Book a Call
              </button>
              <div
                onClick={handleClick}
                className={`flex items-center gap-2 cursor-pointer transition-all duration-300 px-[12px] py-[6px] rounded-[40px] w-fit ${
                  !copied ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                <div>
                  {!copied ? (
                    <span>
                      <IoCopyOutline />
                    </span>
                  ) : (
                    <span>
                      <FaCheck />
                    </span>
                  )}
                </div>

                <button className="cursor-pointer">
                  {!copied ? <h1>Copy Email</h1> : <h1>Copied!</h1>}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              width={100}
              height={100}
              src="/bookimage.png"
              alt="image"
              className="w-full rounded-[8px]"
            />
          </div>
        </div>
        <div className="w-full bg-[#dee0e5] p-[24px] lg:p-[32px] rounded-[8px] flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[8px]">
            <h1 className="text-black text-xl font-semibold">My tech Stack</h1>
            <p className="text-[#000000b3]">
              Building with: Typescript, React, Next.Js , and more — tools that
              power modern, scalable solutions.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-[16px] mx-auto">
            {TechImages.map((img, idx) => (
              <Image
                width={100}
                height={100}
                src={img}
                alt="Techs Image"
                key={idx}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
