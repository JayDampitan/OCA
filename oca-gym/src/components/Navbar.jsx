"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { useTheme } from "next-themes"
import { RiMoonFill, RiSunline } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { NAV_ITEMS } from "../../assets/data";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  const handleNavbar = () => setNavbar(!navbar);

  return (
    <>
      <header className="w-full flex justify-between p-10">
        <div>
          <h2 className="text-red">OCA GYM</h2>
        </div>

        {/*---------- Nav Items --------------*/}
        <div className="md:flex space-x-4 hidden">
          {NAV_ITEMS.map((item, index) => (
            <div className="" key={index}>
              <Link href={item.page}> {item.label}</Link>
            </div>
          ))}
        </div>
        {/* -----------------Mobile Icons ------------*/}
        <div onClick={handleNavbar} className="md:hidden block">
        <IoMdMenu size={30} /> 
        </div>
        {/* ----------Mobile Menu----------- */}
      
          <div className={`${navbar ? "absolute" : "hidden"}  w-full  top-0 bottom-0 bg-gray-800 left-0 transform translate-x-100 duration-700`}>
            <ul className="mx-auto text-xl h-screen flex flex-col gap-4 items-center justify-center font-bold text-primary">
                {NAV_ITEMS.map((item, index) => (
                    <li key={index}>
                        <Link href={item.page}>
                            {item.label}
                        </Link>
                    </li>
                ))}
                <div className="absolute top-10 right-10" onClick={handleNavbar}>
                    <IoMdClose size={30}/>
                </div>

            </ul>
          </div>
       
      </header>
    </>
  );
};
export default Navbar;
