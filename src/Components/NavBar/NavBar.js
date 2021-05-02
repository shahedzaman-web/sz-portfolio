import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <h3 className="text-danger">Md. Shaheduzzaman</h3>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active pr-5">
            <Link className="nav-link " to="/">
              Home
            </Link>
          </li>
          <li className="nav-item pr-5">
            <Link className="nav-link " to="/about">
              About
            </Link>
          </li>
          <li className="nav-item pr-5">
            <Link className="nav-link " to="/projects">
              Projects
            </Link>
          </li>

          <li className="nav-item pr-5">
            <Link className="nav-link text-white" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-item pr-5">
            <Link className="nav-link text-white" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
