import React from "react";
import RepairGuru from "./../../Images/repairGuru.png";
import hungryMonster from "./../../Images/hungryMonster.png";
import eplHunt from "./../../Images/eplHunt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Projects.css";
import { faCodeBranch, faLink } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
  return (
    <div className="container">
      <h1 className="text-center my-3">Projects</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="card d-flex  justify-content-center align-items-center  mr-4 bg-light"
          style={{ width: "18rem", height: "33rem" }}
        >
          <img
            className="img-fluid"
            style={{ width: "18rem", height: "10rem" }}
            src={RepairGuru}
            alt=""
          />
          <div className="card-body">
            <h3 className="card-text text-center">Repair Guru</h3>
            <p className="text-center">
              It’s a full-stack web site that offers different types of device
              repairing service.
            </p>
            <div className="tools">
              <span>ReactJs </span> <span>React router</span>{" "}
              <span>Bootstrap</span>
              <span>Bootstrap</span> <span>Firebase Authentication </span>
              <span>Stripe Payment Method</span>
            </div>
            <div className="card-footer mt-2 ">
              <li className="d-inline mr-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/shahedzaman-web/repair-guru-client
                  "
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </li>
              <li className="d-inline mr-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=" https://github.com/shahedzaman-web/repair-guru-server
                  "
                >
                  <FontAwesomeIcon icon={faCodeBranch} />
                </a>
              </li>

              <li className="d-inline mr-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=" https://repair-guru-sz.web.app/"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </li>
            </div>
          </div>
        </div>
        <div
          className="card d-flex  justify-content-center align-items-center  mr-4 bg-light"
          style={{ width: "18rem", height: "33rem" }}
        >
          <img
            className="img-fluid"
            style={{ width: "18rem", height: "10rem" }}
            src={hungryMonster}
            alt=""
          />
          <div className="card-body ">
            <h3 className="card-text text-center">Hungry Monster</h3>
            <p className="text-center">
              Discover Foods You’ve Never Tried Before.
            </p>
            <div className="tools">
              <span>MealDB Api</span>
              <span>Vanilla JavaScript</span>
              <span>BootStrap</span>
              <span>HTML5</span>
              <span>CSS</span>
            </div>
            <div className="card-footer mt-2 ">
              <li className="d-inline mr-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/shahedzaman-web/assignment-5"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </li>

              <li className="d-inline mr-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://shahedzaman-web.github.io/assignment-5/"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </li>
            </div>
          </div>
        </div>
        <div
          className="card d-flex  justify-content-center align-items-center  mr-4 bg-light"
          style={{ width: "18rem", height: "33rem" }}
        >
          <img
            className="img-fluid"
            style={{ width: "18rem", height: "10rem" }}
            src={eplHunt}
            alt=""
          />
          <div className="card-body ">
            <h3 className="card-text text-center">EPL Hunt </h3>
            <p className="text-center">
              View English Premier League Teams information. You will always
              find something new.
            </p>
            <div className="tools">
              <span>React</span>
              <span>React Router</span>
              <span>Bootstrap</span>
              <span>Font Awesome</span>
              <span>JSX</span>
              <span>Javascript ES6</span>
              <span>CSS</span>
            </div>
            <div className="card-footer mt-2 ">
              <li className="d-inline mr-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/shahedzaman-web/epl-hunt/
                  "
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </li>

              <li className="d-inline mr-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="  https://eplhunt.netlify.app/
                  "
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
