import React from "react";
import { ButtonPrimary } from "./Button";
import { IoIosArrowForward } from "react-icons/io";
import img from "../assets/images/logo.svg";

function Footer() {
  const sitemap = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },

    {
      label: "Contact me",
      href: "#contact",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/AbhaySinghShekhawat",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhay-singh-1a617b275/",
    },
  ];
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10 ">
            <h2 className="headling-1 max-w-[12ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-8  bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-4xl leading-tight font-semibold lg:text-[30px] ">
              Let&apos;s work together today!
            </h2>
            {/* <ButtonPrimary
              href="mailto:codewithsadee@gmail.com"
              label="Start project"
              icon={<IoIosArrowForward />}
              classes="h-11 bg-sky-400 text-zinc-950 hover:bg-sky-300 cursor-pointer"
            /> */}
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2">socials</p>
              <ul>
                {socials.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8 ">
          <a href="" className="">
            <img src={img} width={40} height={40} alt="Logo" />
          </a>
          <p className="text-zinc-500 text-sm ">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-zinc-200">codewithsadee</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
