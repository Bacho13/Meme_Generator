import React from "react";
import "../componentCss/header.css";
import logo from "/images/troll-face.png";

function Header() {
  return (
    <div className="header">
      <div className="header-cont">
        <div className="logo">
        <img src={logo} alt="troll face png" className="troll-face" />
         <h1 className="meme-generator">Meme Generator</h1>
        </div>
        <p className="react-course">React Course - Project 3</p>
      </div>
    </div>
  );
}

export default Header;
