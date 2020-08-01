import React from "react";
import Image from "../assets/vector.png";
const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={Image} alt="counter-icone" />
        <h1>React Counter v2</h1>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default Header;
