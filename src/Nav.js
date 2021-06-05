import React, { useState, useEffect } from "react";
import "./Nav.css";
import netflix from "./main-logo.png";
import avatar from "./avatar.png";
const NavBar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img className="logo" src={netflix} alt="a netflix logo" />
        <img src={avatar} alt="an avtar" className="avatar" />
        {/* <button className="btn">sign out</button> */}
      </div>
    </div>
  );
};
export default NavBar;
