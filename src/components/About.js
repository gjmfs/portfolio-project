import { useEffect } from "react";
import { AboutIcons } from "../images/images";

export const About = () => {
  useEffect(() => {
    document.title = "about";
  });
  const aboutPack = AboutIcons.map((AboutIcons, index) => (
    <div className="about-card" key={index}>
      <img src={AboutIcons.icon} className="card-img-top" alt="..." />
      <div className=" text-center">
        <p>{AboutIcons.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="About bg-dark">
      <div className="container">
        <div className=" m-5 bg-transparent ">{aboutPack}</div>
      </div>
    </div>
  );
};
