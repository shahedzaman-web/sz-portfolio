import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";
const Services = () => {
  return (
    <div className="container">
      <h1 className="text-center my-3">Services</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div
          class="card d-flex  justify-content-center align-items-center py-2 mr-4 bg-light"
          style={{ width: "18rem", height: "15rem" }}
        >
          <FontAwesomeIcon className="icon-font" icon={["fab", "react"]} />
          <div class="card-body text-center">
            <h2 class="card-text">Front-End Web Development with React</h2>
          </div>
        </div>
        <div
          class="card d-flex justify-content-center align-items-center py-2 mr-4 bg-light"
          style={{ width: "18rem", height: "15rem" }}
        >
          <FontAwesomeIcon className="icon-font" icon={faCode} />
          <div class="card-body text-center">
            <h2 class="card-text">Full Stack Web Development</h2>
          </div>
        </div>
        <div
          class="card d-flex  justify-content-center align-items-center py-2 mr-4 bg-light"
          style={{ width: "18rem", height: "15rem" }}
        >
          <FontAwesomeIcon className="icon-font" icon={["fab", "js"]} />
          <div class="card-body text-center">
            <h2 class="card-text">JavaScript Web Development</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
