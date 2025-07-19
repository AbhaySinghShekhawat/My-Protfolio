import React from "react";
import img from "../assets/images/avatar.jpg";
import img1 from "../assets/images/hero-banner.png";
import { ButtonOutline } from "./Button.jsx";
import { IoMdArrowDown } from "react-icons/io";

function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container  lg:flex items-center lg:justify-between lg:gap-8">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src={img}
                width={40}
                height={40}
                alt="Henry clark portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide ">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400 ">
                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headling-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10  bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15]">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon={<IoMdArrowDown />}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src={img1}
              width={600}
              height={800}
              alt="Henry clark"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
