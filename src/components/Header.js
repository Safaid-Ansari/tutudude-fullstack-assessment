import React from "react";
import "../styles/Header.css";
import vector from "../images/vector.png";
import aeroVector from "../images/aeroVector.png";

function Header() {
  return (
    <>
      <div className="mainHeader">
        <div className="logo"></div>
        <div className="section">
          <div className="assignment">My Assignment</div>
          <div className="chat">Chat with Mentor</div>
          <div className="vector">
            <img src={vector} alt="vector" className="profileLogo"></img>
            <div className="profileName">ProfileName</div>
            <img src={aeroVector} alt="aeroVector" className="aeroVector"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
