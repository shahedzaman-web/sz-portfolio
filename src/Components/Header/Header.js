import React from "react";
import Bg from "../../Images/Shahed.png";
import "./Header.css";
import svg from "../../Images/svg-blob.svg";
const Header = () => {
  return (
    <div className="container row ">
      <div className="col-md-6 col-sm-12">
        <img src="" alt="" srcset="" />
        <div className="p-5 text-secondary header-div">
          <img className="svg-bg" src={svg} alt="" srcset="" />
          <h3>Hi</h3>
          <h1>I'm Md. Shaheduzzaman</h1>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <img className="img-fluid rounded" src={Bg} alt="" />
      </div>
    </div>
  );
};

export default Header;
