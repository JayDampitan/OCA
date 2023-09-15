"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { NAV_ITEMS } from "../../assets/data";
import { motion, AnimatePresence } from "framer-motion";
import { topVariant } from "../../assets/data";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [navbar, setNavbar] = useState(false);

  const setLocalStorage = (currentPage) => {
    window.sessionStorage.setItem("currentPage", currentPage);
    setActive(currentPage);
  };

  useEffect(() => {
    const page = window.sessionStorage.getItem("currentPage");
    setActive(page || "/");
  }, []);

  const handleNavbar = () => setNavbar(!navbar);

  return (
    <>
      <nav className="w-full fixed bg-navBg text-offWhite top-0 right-0 left-0 uppercase z-20 shadow-lg p-10">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            onClick={() => setLocalStorage("/")}
            className="text-3xl"
          >
            OCA GYM
          </Link>
          {/* ----------desktop menu */}
          <div className="hidden lg:flex">
            <ul className="flex lg:gap-5 items-center">
              {NAV_ITEMS.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setLocalStorage(item.page)}
                  className={`text-sm font-semibold relative nav-hover ${
                    active === item.page && "active"
                  }`}
                >
                  <Link href={`${item.page}`}>{item.label}</Link>
                </li>
              ))}
              <li className="border-l border-primary">
                <button className=" border border-primary text-primary py-1 rounded-full px-4 uppercase ml-3 hover:text-offWhite hover:bg-primary duration-300">
                  <Link
                    target="_blank"
                    href="https://login.ionos.com/?redirect_url=https%3A%2F%2Fmy.ionos.com%2Fmywebsite-overview%3Fmywebsite.pageid%3D529000&username=www.thebodyshophealthclub.com"
                  >
                    log in
                  </Link>
                </button>
              </li>
            </ul>
          </div>
          {/* ----------hamburger menu----------- */}
          <div onClick={handleNavbar} className="lg:hidden text-2xl">
            <IoMdMenu />
          </div>
        </div>
        {/* -----------mobile menu */}
        <AnimatePresence>
          {navbar && (
            <motion.div
              variants={topVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="block absolute w-full top-0 right-0 left-0 bottom-0 h-screen bg-darkGrey"
            >
              <ul className="mx-auto text-xl h-screen flex flex-col gap-4 items-center justify-center font-bold text-primary">
                {NAV_ITEMS.map((item, index) => (
                  <li key={index}>
                    {" "}
                    <Link onClick={handleNavbar} href={item.page}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="absolute top-8 right-8" onClick={handleNavbar}>
                  <IoMdClose />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
export default Navbar;
