import React from "react";
import SkillCard from "./SkillCard";
import img from "../assets/images/html.png";
import img1 from "../assets/images/css3.svg";
import img2 from "../assets/images/javascript.svg";
import img3 from "../assets/images/nodejs.svg";
import img4 from "../assets/images/expressjs.svg";
import img5 from "../assets/images/mongodb.svg";
import img6 from "../assets/images/react.svg";
import img7 from "../assets/images/tailwindcss.svg";

function Skill() {
  const skillItem = [
    {
      imgSrc: img,
      label: "Html",
      desc: "structure content",
    },
    {
      imgSrc: img1,
      label: "CSS",
      desc: "User Interface",
    },
    {
      imgSrc: img2,
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc: img3,
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc: img4,
      label: "ExpressJS",
      desc: "Node Framework",
    },
    {
      imgSrc: img5,
      label: "MongoDB",
      desc: "Database",
    },
    {
      imgSrc: img6,
      label: "React",
      desc: "Framework",
    },
    {
      imgSrc: img7,
      label: "TailwindCSS",
      desc: "User Interface",
    },
  ];
  return (
    <section className="section pb-20 pt-20 lg:pt-10   ">
      <div className="container">
        <h2 className="headline-2 text-3xl leading-tight font-semibold lg:text-4xl lg:leading-tight">
          Essential Tools I use
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]  ">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, index) => (
            <SkillCard key={index} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
