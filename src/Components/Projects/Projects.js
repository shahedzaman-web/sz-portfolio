import React from "react";
import RepairGuru from "./../../Images/repair-guru.png";
const Projects = () => {
  return (
    <div>
      <h1 className="text-center my-3">Projects</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div
          class="card d-flex  justify-content-center align-items-center py-2 mr-4 bg-light"
          style={{ width: "18rem", height: "15rem" }}
        >
          <img
            className="img-fluid"
            style={{ width: "18rem", height: "10rem" }}
            src={RepairGuru}
            alt=""
          />
          <div class="card-body text-center">
            <p class="card-text">Repair Guru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
