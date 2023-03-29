import React from "react";
import { FaHandScissors, FaHandPaper, FaHandRock } from "react-icons/fa";

const Header = ( {showsIcons = false}) => {



  return (
    <div className="main-container">
        <h1>Hakuna Matata time </h1>
    {showsIcons  &&  <div className="fonts-main">
          <FaHandScissors className="fonts" />
          <FaHandPaper className="fonts" />
          <FaHandRock className="fonts" />
        </div> }
        </div>
  );
};

export default Header;
