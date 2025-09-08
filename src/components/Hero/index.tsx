"use client";
import React from "react";
import dynamic from "next/dynamic"; // ✅ dynamic import to fix hydration
import Card from "../Card";
import Profiler from "../../../public/profiler.png";
import Web3Image from "../../../public/web3.png";
import ES201 from "../../../public/er201.png";

// ✅ Load ReactTyped only on client
const ReactTyped = dynamic(
  () => import("react-typed").then((mod) => mod.ReactTyped),
  { ssr: false }
);

const Hero = () => {
  // ✅ Single array of objects (no separate variables)
  const cards = [
    {
      heading: "Profiler (Web3)",
      desc: "Web3 wallet Profiler that shows the wallet details, like PNLs, transactions, and summary along with all supported chains.",
      image: Profiler,
      link: "https://prismai-profiler-page.netlify.app/",
    },
    {
      heading: "Web3Go",
      desc: "A sleek, modern, and fully responsive template built for blockchain, crypto, and Web3 startups.",
      image: Web3Image,
      link: "https://web3go-template-usman.netlify.app/",
    },
    {
      heading: "ES201-Web",
      desc: "A sleek, modern, and fully responsive template built for blockchain, crypto, and Web3 startups.",
      image: ES201,
      link: "https://er201-web-developed-by-usman-basharat.netlify.app/",
    },
  ];
  const whatsappNumber = "923181512749";

  return (
    <div className="w-full h-[130vh] bg-image flex flex-col gap-10 items-center justify-center ">
      <div className="flex flex-col gap-[62px] mt-10">
        <div className="w-full flex flex-col gap-10 mt-35">
          <h1 className="text-[30px] lg:text-[59px] font-[500] text-center leading-[1.2] px-1">
            Software{" "}
            <ReactTyped
              strings={["Developer", "Engineer", "Creator"]}
              typeSpeed={100}
              backSpeed={50}
              loop={true}
              showCursor={true}
            />
            <br />
            <span className="text-center">Web Application</span>
          </h1>
          <div>
            <h1 className="text-center text-[#000000b3] w-[90%] lg:w-[48%] xl:w-[51%] mx-auto">
              I’m a software developer specializing in building sleek,
              functional web applications. With a passion for clean code and
              user-centric design, I turn ideas into digital experiences that
              work beautifully and deliver results.
            </h1>
          </div>
        </div>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          id="work"
          className="bg-white font-semibold cursor-pointer hover:bg-black hover:text-white transition-all duration-200 px-[20px] py-[8px] w-fit mx-auto rounded-[40px]"
        >
          Get in touch
        </a>
      </div>

      {/* ✅ Render cards dynamically from array */}
      <div className="lg:w-[59.7%] grid grid-cols-1 lg:grid-cols-2 gap-10 p-[24px] rounded-[8px] lg:mt-16 work">
        {cards.map((card, index) => (
          <Card
            key={index}
            heading={card.heading}
            desc={card.desc}
            image={card.image}
            webLink={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
