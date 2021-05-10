import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";
const Services = () => {
  return (
    <div className="container text-light">
      <h1 className="text-center my-3 ">Services</h1>
      <div className="d-flex justify-content-center align-items-center row">
        <div className="card d-flex  justify-content-center align-items-center py-2 m-4 card-style col-md-3 col-sm-12">
          <FontAwesomeIcon
            className="icon-font img-fluid"
            icon={["fab", "react"]}
          />
          <div className="card-body text-center">
            <p className="card-text text-center service-text">
              Front-End Web Development with React
            </p>
          </div>
        </div>
        <div className="card d-flex  justify-content-center align-items-center py-2 m-4 card-style col-md-3 col-sm-12">
          <FontAwesomeIcon className="icon-font img-fluid" icon={faCode} />
          <div className="card-body ">
            <p className="card-text text-center service-text">
              Full Stack Web Development with MERN
            </p>
          </div>
        </div>
        <div className="card d-flex  justify-content-center align-items-center py-2 m-4 card-style col-md-3 col-sm-12">
          <FontAwesomeIcon
            className="icon-font img-fluid"
            icon={["fab", "js"]}
          />
          <div className="card-body">
            <p className="card-text text-center service-text">
              JavaScript Web Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
