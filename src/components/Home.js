import { Typewriter } from "react-simple-typewriter";
import developer from "../images/developer.svg";
import { arrDescribe, arrIcons, arrSkills } from "../images/images";
import zima from "../images/project-zima.png";
import PrimeClone from "../images/projectPrimeClone.png";
import { Link, NavLink } from "react-router-dom";

const Intro = () => {
  const icons = arrIcons.map((arrIcons, index) => (
    <img
      onClick={() => {
        window.open(`${arrIcons.link}`, "_blank");
      }}
      key={index}
      className="pt-3 me-3"
      src={arrIcons.icon}
      alt="..."
    />
  ));
  return (
    <div className="home">
      <div className="container text-center ">
        <div className="row align-items-center pt-5 pb-5 row-cols-1 row-cols-md-2 ">
          <div className="col ">
            <h1 style={{ fontSize: "clamp(50px,5vw,100px)" }}>
              Hi I'm <span style={{ color: "#570d0d" }}>Mufess</span>
            </h1>
            <h1 style={{ color: "#697689" }}>
              I am a{" "}
              <span style={{ color: "#570d0d" }}>
                <Typewriter
                  words={["Designer", "Developer", "Software Engineer"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  cursorColor="#ff0056"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <div className="row icons-main justify-content-center pb-5">
              {icons}
            </div>
            <Link to={"/contact"} className="contactButton" role="button">
              Let's Talk
            </Link>
          </div>
          <div className="col">
            <img
              id="develope"
              className="img-fluid mt-5"
              src={developer}
              alt="developer-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  const skill = arrSkills.map((arrSkills, index) => (
    <img
      key={index}
      src={arrSkills}
      className="slideImage"
      alt="web-development-skills"
    />
  ));
  return (
    <>
      <div className="logos">
        <div className="logosSlide">{skill}</div>
        <div className="logosSlide">{skill}</div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <div className=" p-5 bg-secondary-subtle">
      <div className="row align-items-center row-cols-1 row-cols-md-2 row-cols-lg-2 ">
        <div className="col  ">
          <h3>Zima Travels</h3>
        </div>
        <div className="col mt-4">
          <NavLink to="https://gjmfs.github.io/ZimaTravels/" target="blank">
            <img
              style={{
                width: "clamp(40vw,100vw,40vh)",
              }}
              src={zima}
              alt="project-proof"
            />
          </NavLink>
        </div>
        <div className="col mt-5">
          <h3>Prime Clone</h3>
        </div>
        <div className="col mt-5">
          <NavLink to="https://gjmfs.github.io/PrimeVideoClone" target="blank">
            <img
              style={{
                width: "clamp(40vw,100vw,40vh)",
              }}
              src={PrimeClone}
              alt="project-proof"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export const Description = () => {
  const cards = arrDescribe.map((arrDescribe, index) => (
    <div key={index} className="ImageCard text-center">
      <div className="cardBody">
        <img src={arrDescribe.icon} alt="Provides" />
        <p className="cardText text-light">{arrDescribe.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="container p-4">
      <h1 className="text-center mb-5 text-success">Our Service</h1>
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
        {cards}
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <>
      <Intro />
      <Skills />
      <Description />
      <Projects />
    </>
  );
};
