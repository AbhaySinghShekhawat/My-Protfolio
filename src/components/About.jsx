import React from "react";
import img from "../assets/images/logo.svg";

function About() {
  const aboutItems = [
    {
      label: "Project done",
      number: 45,
    },
    {
      label: "Years of experience",
      number: 10,
    },
  ];
  return (
    <section id="about" className="section  pt-20 lg:pt-20  ">
      <div className="container">
        <div className="flex items-end bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300  mb-4 md:mb-8 mb:text-xl md:max-w-[60ch]">
            Hi! I'm Abhay Singh, a web developer learning and growing with the
            MERN stack. I'm passionate about building websites and web apps that
            not only look good but also work smoothly. While I consider myself
            at an intermediate level, I'm always exploring new tools and
            improving my skills. From creating user-friendly frontends to
            working with backend logic and databases, I enjoy turning ideas into
            real, working projects—step by step.
          </p>
          <img
            src={img}
            alt="Logo"
            width={30}
            height={30}
            className="ml-auto md:w-[40px] md:h-[40px]"
          />
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {/* {aboutItems.map(({ label, number }, index) => (
              <div key={index}>
                <div className="flex items-center md:mb-2 ">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
