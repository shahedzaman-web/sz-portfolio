import React from "react";
import Intro from "../../Images/intro.jpg";
import "./Header.css";
import svg from "../../Images/svg-blob.svg";

const Header = () => {
  return (
    <div className=" header-section pt-5">
      <div className="row container">
        <div className="col-md-6 col-sm-12">
          <div className="p-5 text-secondary header-div text-dark">
            <img className="svg-bg" src={svg} alt="" srcSet="" />

            <h2 className="text-dark">Hi! I'm Md. Shaheduzzaman</h2>
            <h5 className="my-3">
              A highly passionate and determined web developer with proficiency
              in major Front-End technology as well as the ability to
              communicate effectively in a team setting seeks to apply for the
              position of Intern or job as a Front-End Developer.T
            </h5>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner text-center">
                <div className="carousel-item active">
                  <h5 className="d-block w-100">Web Developer</h5>
                </div>
                <div className="carousel-item">
                  <h5 className="d-block w-100">Front-end React Developer</h5>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              href={
                "https://docs.google.com/document/d/1rn3lB0vRnyFoTdukqYdpv2TmjdM7phGi5BodBxt59as/edit?usp=sharing"
              }
              rel="noreferrer"
            >
              <button className=" btn btn-success d-flex justify-content-center align-items-center">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <img className="img-fluid rounded intro-img" src={Intro} alt="" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          className="svg-style"
          fillOpacity="0.7"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Header;
