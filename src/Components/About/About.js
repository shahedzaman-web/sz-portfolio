import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShahedBg from "./../../Images/Shahed.png";
const About = () => {
  return (
    <section className="container about-body py-4">
      <h1 className="text-center text-light">About Me</h1>
      <div className="row">
        <div className="col-md-3 col-md-offset-0 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12 ms-lg-5">
          <img className="img-fluid rounded-circle" src={ShahedBg} alt="" />
          <div className="d-flex flex-row mx-auto justify-content-center align-items-center">
            <a
              className="rounded"
              target="_blank"
              href={"https://www.facebook.com/Shahedxxaman/"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
            <a
              className="rounded"
              target="_blank"
              href={"https://www.linkedin.com/in/md-shaheduzzaman-a848561aa/"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a
              target="_blank"
              href={"https://github.com/shahedzaman-web"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
        </div>

        <div className="card d-flex  justify-content-center  py-2 m-4 card-style col-md-6 col-sm-12">
          <div className="card-body text-white">
            <div className="card-text  service-text ">
              <p>Name: Md. Shaheduzzaman</p>
              <p>Profile: Student | Web Developer</p>

              <p>Email: physics.shahedzaman@gmail.com</p>
              <p>Phone: +880 1786 233560</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
