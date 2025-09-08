import Image, { StaticImageData } from "next/image";
import React from "react";

// Define props type
type CardProps = {
  heading: string;
  desc: string;
  image: StaticImageData | string;
  webLink: string;
};

const Card: React.FC<CardProps> = ({ heading, desc, image, webLink }) => {
  return (
    <a
      href={webLink}
      className="w-full bg-white p-[24px] rounded-[8px] cursor-pointer"
    >
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-lg font-semibold">{heading}</h1>
          <p>{desc}</p>
        </div>
        <Image
          className="w-[300px] h-[200px] rounded-[10px]"
          src={image}
          alt={heading}
        />
      </div>
    </a>
  );
};

export default Card;
