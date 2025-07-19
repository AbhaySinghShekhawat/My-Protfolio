import React from "react";
import ProjectCArd from "./ProjectCArd";
import img from "../assets/images/productListing.png";
import img1 from "../assets/images/backery.png";
import img2 from "../assets/images/weather.png";
import img3 from "../assets/images/zometo.png";
import img4 from "../assets/images/figmafile.png";
import img5 from "../assets/images/spotify.png";

function Project() {
  const works = [
    {
      imgSrc: img,
      title: "Product Listing ",
      tags: ["API", "Development"],
      projectLink: "https://product-listing-indol.vercel.app/",
    },
    {
      imgSrc: img1,
      title: "Bakery website",
      tags: ["Media Query", "jquery slick slider"],
      projectLink: "https://abhaysinghshekhawat.github.io/Bakery/",
    },
    {
      imgSrc: img2,
      title: "Weather App",
      tags: ["Development", "API"],
      projectLink: "https://abhaysinghshekhawat.github.io/WeatherApp/",
    },
    {
      imgSrc: img3,
      title: "Zomato first page",
      tags: ["Web-design", "Development"],
      projectLink: "https://zometo-single-page.vercel.app/",
    },
    {
      imgSrc: img4,
      title: "Figma file first page",
      tags: ["Web-design", "Development"],
      projectLink:
        "https://figma-wscubetech-mvpwqhqxp-abhay-singhs-projects-43885cb3.vercel.app/",
    },
    {
      imgSrc: img5,
      title: "Spotify first page",
      tags: ["Web-design", "Development"],
      projectLink: "https://abhaysinghshekhawat.github.io/spotify_clone/",
    },
  ];
  return (
    <section id="projects" className="section pb-20 pt-20 lg:pt-32 ">
      <div className="container">
        <h2 className="headline-2 mb-8 text-3xl leading-tight font-semibold lg:text-4xl lg:leading-tight">
          My portfolio highlights
        </h2>
        <div className="grid grid-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, index) => (
            <ProjectCArd
              key={index}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="mb-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
