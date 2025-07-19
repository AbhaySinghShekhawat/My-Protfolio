import React, { useState } from "react";
import img from "../assets/images/logo.svg";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Navbar from "./Navbar.jsx";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const [navOpen, setnavOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
    setnavOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 w-full h-20 flex items-center justify-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center gap-4 md:px-6">
        <h1>
          <a href="#home" className="logo w-[30px] h-[30px] inline-block">
            <img src={img} width={30} height={30} alt="Logo" />
          </a>
        </h1>

        <div className="relative">
          <button
            className="menu-btn md:hidden"
            onClick={() => {
              toggleMenu();
            }}
          >
            <span className="material-icons">
              {isOpen ? (
                <IoMdClose className="cursor-pointer text-2xl text-zinc-100" />
              ) : (
                <MdOutlineMenu className="cursor-pointer text-2xl text-zinc-100" />
              )}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:!hidden md:justify-self-end"
        >
          Contact me
        </a>
      </div>
    </header>
  );
}

export default Header;
