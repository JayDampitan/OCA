"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import facility1 from "../../../assets/facility1.jpg";
import facility2 from "../../../assets/facility2.jpg";
import facility3 from "../../../assets/facility3.jpg";

function Facility() {
  return (
    <div className="flex flex-col h-auto bg-bodyBackground items-center justify-center">
      <div className="text-offWhite w-full flex flex-col items-center bg-primary pt-36 pb-16 lg:py-44 lg:pb-28 text-center">
        <h2 className="border-b border-offWhite uppercase text-lg lg:text-4xl font-semibold">
          facility
        </h2>
        <p className="text-[13px] lg:text-xl px-10 mt-8 lg:max-w-4xl leading-6 lg:leading-10">
          {`   Our facility is equipped with top-notch training mats, punching bags, and a variety of other training equipment to ensure you have the tools you need for a successful journey in martial arts. We offer a wide range of classes that cater to different interests and skill levels, allowing you to choose the path that suits you best. Whether you're a seasoned martial artist or a beginner, you'll find a community of like-minded individuals here to support you on your martial arts journey. Join us today, and experience the camaraderie and growth that come with training at our friendly combat gym!`}
        </p>
      </div>
      <Image
        alt="image of body shop gym"
        src={facility1}
        className="h-64 lg:h-auto lg:w-[70%] -translate-y-8 lg:-translate-y-16 object-cover rounded-sm"
      />

      <div className="w-full p-2 lg:pl-60 md:flex-row flex flex-col justify-around items-center my-8">
        <Image src={facility2} className="w-[50%] md:w-[40%]"/>
        <p className="p-10 flex items-center md:text-3xl text-offWhite md:w-[50%]">
            {`Forge Warriors on Our High-Quality Training Mats: Join Our Combat Academy for a Foundation of Excellence! Our facility boasts the perfect foundation for your martial arts journey with top-tier, shock-absorbent training mats. Train confidently, knowing you're on the same mats trusted by champions!`}.
        </p>
      </div>
      <div className="w-full p-2 lg:pl-60 md:flex-row-reverse flex flex-col justify-around items-center my-8">
        <Image src={facility3} className="w-[50%] md:w-[40%]"/>
        <p className="p-10 flex items-center md:text-3xl text-offWhite md:w-[50%]">
            {`Unleash Your Potential: Train with Intensity on Our Top-of-the-Line Punching Bags at Our Combat Academy! Our facility is equipped with a diverse range of punching bags, catering to all levels of martial artists. Experience the power and precision of your strikes as you transform into a formidable fighter.`}.
        </p>
      </div>
    
    </div>
  );
}
export default Facility;
