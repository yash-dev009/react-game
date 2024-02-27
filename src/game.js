import React, { useState,useEffect } from "react";
import Footer from "./component/Footer";

// import { useNavigate } from "react-router-dom";
// import Paper from "/assets/Paper.png";
// import Rock from "/assets/Rock.png";
// import Scissors from "/assets/Scissors.png";
// import Video from "/assets/video.gif"; 
// import Modal from 'react-modal'
import Header from "./component/header";
import ConfettiExplosion from 'confetti-explosion-react';
// import useWindowSize from 'react-use/useWindowSize'
// import Confetti from 'react-confetti'



const Gamepage = () => {
  const [playerHand, setPlayerHand] = useState(null);
  const [computerHand, setComputerHand] = useState(null);
  const [result, setResult] = useState(null);
  const [counter, setCounter] = useState(15);
  const [isExploding, setIsExploding] = React.useState(false);
  // const { width, height } = useWindowSize()
  // const [modalRockIsOpen, setRockIsOpen] = React.useState(false);
  // const [modalPaperIsOpen, setPaperIsOpen] = React.useState(false);
  // const [modalScissorsIsOpen, setScissorsIsOpen] = React.useState(false);

  let timer;

console.log(playerHand,"playerHand");


  const handlePlayerSelection = (hand) => {
    setPlayerHand(hand);
    clearTimeout(timer)
    const computerSelection = getComputerSelection();
    setComputerHand(computerSelection);
    setResult(getResult(hand, computerSelection));
  };




 useEffect(() => {
  timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
   return ()=>clearInterval(timer);
   if(counter==0){
    
   }
 }, [counter])
 

  const getComputerSelection = () => {
    const hands = ["Rock","Paper","Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
  };
  
 function removeJhalar() {
  setIsExploding(true)
  setTimeout(() => {
     setIsExploding(false)
  }, 3500);
}

  const getResult = (player, computer) => {
    if (player === computer) {
      return "Tie!🤷‍♂️🤷‍♂️";
    } else if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      
      removeJhalar()
       return "You win!🤩🥳" 
    } 
    else{
      return "You lose!😥"
    }
  
  };


 
  
    
  // const modalResult = (player, computer) => {
  //   if (player === computer) {
  //     return "Tie!🤷‍♂️🤷‍♂️";
  //   } else if (  
  //     (player === "Rock" && computer === "Scissors") ||
  //     (player === "Paper" && computer === "Rock") ||
  //     (player === "Scissors" && computer === "Paper")
  //   ) {
  //     return "You win!🤩🥳";
  //   } else {
  //     r  eturn "You lose!😥";
  //   }
  // };

  
//   function PlayerImageShow(han  d){
//     if(hand){
// if(hand == "Rock"){
//   return Rock
// }else if(hand == "Scissors"){
//   return Scissors
// }else{
//   return Paper
// }
//     }else{
//       return Video
//     }
//   }

//   function ComputerImageShow(){
//     if(computerHand){
// if(computerHand == "Rock"){
//   return Rock
// }else if(computerHand == "Scissors"){
//   return Scissors
// }else{
//   return Paper
// }
//     }else{
//       return Video
//     }
//   }
  // const notchoosen =()=>{
  //   if(counter===0){
  //   setResult("You haven't choose anything!😥")
  //   }
  // }

  const Restart =()=>{
setCounter(15)
setPlayerHand("")
setComputerHand("")
setResult("")
  }

  //***************modals */


  // let subtitle;
  // const customStyles = {
  //   content: {
  //     top: '50%',left: '50%', right: 'auto',   bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)'
  //   },
     
  // };
  // function openModalR() {
  //   setRockIsOpen(true);
  // }
  // function openModalP() {
  //   setPaperIsOpen(true);
  // }
  // function openModalS() {
  //   setScissorsIsOpen(true);
  // }

  // function afterOpenModal() {
   
  //   subtitle.style.color = '#f00';
  // }

  let props = {
    force: 0.8,
    duration: 3000,
    particleCount: 500,
    width: 3000,
  }
 
  return (
    <div>
        {isExploding && <ConfettiExplosion {...props} />}

      <Header />
      <h1 style={{ textAlign: "center", justifyContent: "center",fontFamily:"cursive" }}>
        Rock, Paper, Scissors Game
      </h1>
<div className="video-main">
{ counter==0 ?<img
            className="video1"
            src={`/assets/Rock.png`}
            alt=""/>:<img className="video1" src={playerHand ? `/assets/${playerHand}.png` : `/assets/video.gif`} alt=""/> }  
       { counter==0 ?  <img
            className="video2"
            src={`/assets/Rock.png`}
            alt=""/>: <img className="video2" src={computerHand ? `/assets/${computerHand}.png` : `/assets/video.gif`} alt="" />}
         {/* <img className="video1" src={PlayerImageShow(playerHand)} alt=""/>  
        <img className="video2" src={PlayerImageShow(computerHand)} alt="" /> */}
         {/* <img className="video1" src={playerHand ? playerHand == "Rock" ? Rock : playerHand == "Scissors" ? Scissors : playerHand == "Paper" ? Paper : Video : Video} alt=""/>  
        <img className="video2" src={computerHand ? computerHand == "Rock" ? Rock : computerHand == "Scissors" ? Scissors : computerHand == "Paper" ? Paper : Video : Video} alt="" /> */}
      </div>
      <div className="countdown"> Timer :{counter} </div> 

      <div style={{ margin:"auto" }}>
        {" "}
        <p className="result">{result}</p>{" "}
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          justifyContent: "center",
          fontWeight: "bolder",
        }}
      >
        Choose anyone,out of these three in this specified time.
      </p>
      {counter===0 && <p  style={{
          textAlign: "center",
          fontSize: "1.2rem",
          justifyContent: "center",
          fontWeight: "bolder",
        }}>you haven't choose</p>}


      { counter>1 &&<div style={{ textAlign: "center", justifyContent:"center"}}>

          <img
            className="game-img"
            src={`/assets/Rock.png`}
            alt=""
         
            onClick={() => handlePlayerSelection("Rock")}
            // onClick={openModalR}
          />
          <img
            className="game-img"
            src={`/assets/Paper.png`}
            alt=""
            onClick={() => handlePlayerSelection("Paper")}
            // onClick={openModalP}
          />
          
          <img
            className="game-img"
            src={`/assets/Scissors.png`}
            alt=""
            onClick={()=>handlePlayerSelection("Scissors")}
            // onClick={openModalS}
          />
      </div>}
      {counter==0 ?<div style={{justifyContent:"center",textAlign:"center"}}>
        <button className="round-change" type="button" onClick={Restart}>Restart</button></div>:null}

      <div className="game-div-main">
        <p className="para-player" >You choosed:{playerHand}</p>
        <p className="para-player">Opponent choosed:{computerHand}</p>
      </div>
  
      {/* <Modal
        isOpen={modalRockIsOpen}
        onAfterOpen={afterOpenModal}  
        onRequestClose={()=> setRockIsOpen(false)}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Congratulations🎉</h2>
        <div>You Win</div>
        <button onClick={()=> setRockIsOpen(false)}>close</button>
        </Modal>

      <Modal
        isOpen={modalPaperIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={()=> setPaperIsOpen(false)}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Better Luck Next Time!</h2>
        <div>You Lose</div>
        <button onClick={()=> setPaperIsOpen(false)}>close</button>
      </Modal>

      <Modal
        isOpen={modalScissorsIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={()=> setScissorsIsOpen(false)}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Tie!</h2>
        <div>Tie!</div>
       
   
      </Modal>
       */}
      <Footer />
    </div>
  );
};

export default Gamepage;
