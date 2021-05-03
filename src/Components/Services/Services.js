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
          <FontAwesomeIcon
            className="icon-font img-fluid"
            icon={["fab", "react"]}
          />
          <div class="card-body text-center">
            <h3 class="card-text text-center">
              Front-End Web Development with React
            </h3>
          </div>
        </div>
        <div
          class="card d-flex justify-content-center align-items-center py-2 mr-4 bg-light"
          style={{ width: "18rem", height: "15rem" }}
        >
          <FontAwesomeIcon className="icon-font img-fluid" icon={faCode} />
          <div class="card-body ">
            <h3 class="card-text text-center">Full Stack Web Development</h3>
          </div>
        </div>
        <div
          class="card d-flex  justify-content-center align-items-center py-2 mr-4 bg-light"
          style={{ width: "18rem", height: "15rem" }}
        >
          <FontAwesomeIcon
            className="icon-font img-fluid"
            icon={["fab", "js"]}
          />
          <div class="card-body">
            <h3 class="card-text text-center">JavaScript Web Development</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
