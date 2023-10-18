"use client";
import service1Image from "../../../assets/services1.jpg";
import service2Image from "../../../assets/kidFighting.jpg";
import service3Image from "../../../assets/services3.jpg";
import service4Image from "../../../assets/services4.jpg";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { TRAINING__SERVICES } from "../../../assets/data";

const images = [service1Image, service2Image, service3Image, service4Image];

function Services() {
  return (
    <div className="flex bg-bodyBackground flex-col h-auto items-center justify-center">
      <div className="text-offWhite w-full flex flex-col items-center bg-primary pt-36 pb-16 lg:py-44 lg:pb-28 text-center">
        <h2 className="border-b border-offWhite uppercase text-lg lg:text-4xl font-semibold">
          services
        </h2>
        <p className="text-[13px] lg:text-xl px-10 mt-8 lg:max-w-4xl leading-6 lg:leading-10">
          {`   Transform Together: Join Our Family-Friendly Combat Academy for a Thrilling Journey of Martial Arts Mastery! Our academy welcomes all ages, providing a safe and inclusive environment where families can bond while building strength, discipline, and confidence. Our experienced instructors blend traditional martial arts with modern teaching methods to ensure each family member develops essential self-defense skills and enjoys the journey. Discover the power of unity and unleash your potential at our family-focused combat academy!`}
        </p>
      </div>
      {/* -----------services cards section----------------- */}
      <div className="flex flex-col items-center justify-center my-10 lg:my-20">
        <h2 className="uppercase text-offWhite text-lg lg:text-4xl font-semibold">
          training plans
        </h2>

        {TRAINING__SERVICES.map((service, index) => {
          return (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="w-[80%] lg:w-[70%] shadow-lg flex flex-col items-center justify-between   lg:flex-row bg-cardColor rounded-md px-6 py-6 mt-10 "
            >
              <div className="lg:w-[50%] h-60 lg:h-[450px]">
                <Image
                  src={images[index]}
                  className="h-full object-cover"
                  alt="random images of people working out"
                />
              </div>
              <div className="lg:w-1/4 text-center  lg:text-start font-semibold lg:mr-32">
                <h2 className="my-4">{service.title}</h2>
                <h3 className=" my-2 lg:my-4">{service.header}</h3>
                <p className="text-[13px] lg:text-base font-normal leading-6 lg:leading-7">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default Services;
