import React, { useState, useEffect } from "react";
import {
  osName
} from 'react-device-detect'
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const [playing, setPlaying] = useState('Pristine OS');

  useEffect(() => {
    setPlaying(osName)
  }, [])

  const videoConstraints = {
    facingMode: "user"
  };

  return (
    <div className="app">
      <div className="app__container">
      <Webcam 
        height='65%'
        videoConstraints={videoConstraints}
      />
      </div>
      <div className="app__deviceName"> Model - {playing}</div>
    </div>
  );
}

export default App;
