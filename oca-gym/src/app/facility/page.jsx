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
          {`   The Body Shop Health Club offers everything you need to effectively
        achieve and maintain your fitness goals including a large selection of
        cardio and strength training equipment, a full supplement shop, a
        medical grade infrared light sauna and shake bar. We've designed our
        club to be a "one stop shop" for getting results. With a variety of
        membership options to choose from, it's easy to see why The Body Shop
        Health Club is the choice for so many.`}
        </p>
      </div>
      <Image
        alt="image of body shop gym"
        src={facility1}
        className="h-64 lg:h-auto lg:w-[70%] -translate-y-8 lg:-translate-y-16 object-cover rounded-sm"
      />

      <div className="w-full p-2 lg:pl-60 flex justify-around">
        <Image src={facility2} className="w-[30%]"/>
        <p className="p-10 flex items-center text-3xl text-offWhite w-[50%]">
            {`Forge Warriors on Our High-Quality Training Mats: Join Our Combat Academy for a Foundation of Excellence! Our facility boasts the perfect foundation for your martial arts journey with top-tier, shock-absorbent training mats. Train confidently, knowing you're on the same mats trusted by champions.`}.
        </p>
      </div>
      <div className="w-full p-2 lg:pr-60 flex flex-row-reverse">
        <Image src={facility3} className="w-[30%] justify-around" />
        <p className="p-10 flex items-center text-3xl text-offWhite w-[50%]">
            {`Unleash Your Potential: Train with Intensity on Our Top-of-the-Line Punching Bags at Our Combat Academy! Our facility is equipped with a diverse range of punching bags, catering to all levels of martial artists. Experience the power and precision of your strikes as you transform into a formidable fighter.`}.
        </p>
      </div>
    </div>
  );
}
export default Facility;
