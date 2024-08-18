import { Link } from "react-router-dom";
import astronaut from "../images/astronaut.svg";
import { useEffect } from "react";
export const NotFound = () => {
  useEffect(() => {
    document.title = "Not-Found";
  });
  return (
    <div className="NotFound bg-dark ">
      <div className="container">
        <div className="row row-cols-2 p-5 align-items-center">
          <div className="col text-center ">
            <h1 className="text-info display-1">4 X 4</h1>
            <h2 className="text-light display-5 pb-4">page not found</h2>
            <Link to={"/"}>Home</Link>
          </div>
          <div className="col">
            <img className="img-fluid" src={astronaut} alt="astronaut" />
          </div>
        </div>
      </div>
    </div>
  );
};
