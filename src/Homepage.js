import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/header";



function Homepage() {
  const navigate = useNavigate()
 
  return (
    <div>
     <Header showsIcons />
        <h2 style={{justifyContent:"center", textAlign:"center"}}>
          Rock, Paper, Scissors game <br />
          <span >Online</span>
        </h2>
      
      <div className="tag-p1">
        <p className="p-box" style={{ fontSize: "25px" }}>
          Do you have a dispute <br />
          with your friend?
          <br />
          Resolve it online!{" "}
         </p>
   
      </div>
      <br/> <br/>
      <div className="start-btn-main">
       
      <div  className="start-btn">  <p className="para-player">You can play separately... </p>
      <button
            onClick={() => navigate("/gamearea")}
            className="start-btn1"
       
            type="button"
          >
            {" "}
     Get Started
          </button>
      </div>
     
      <div  className="start-btn"> <p className="para-player">You can play offline also... </p> 
      <button
            onClick={() => navigate("/twoPlayers")}
            className="start-btn1"
       
            type="button"
          >
            {" "}
     Two Players
          </button>
      </div></div>
      
      <Footer/>
    </div>
  );
}

export default Homepage;
