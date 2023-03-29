import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage"
import Gamepage from './Gamepage';
import TwoPlayer from './TwoPlayer';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/twoPlayers" element={<TwoPlayer/>}/>
        <Route exact path="/home" element={<Homepage/>}/>
        <Route exact path="/gamearea" element={<Gamepage/>}/>
      </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
