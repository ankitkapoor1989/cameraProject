import React, { useState, useEffect } from "react";
import {
  osName
} from 'react-device-detect'
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const [playing, setPlaying] = useState('Pristine OS');

  useEffect(() => {
    let deviceName = "";
    if (osName === "iOS") {
      deviceName = "iPhone"
    } else if (osName === "Android") {
      deviceName = "Android"
    } else if (osName === "Mac OS") {
      deviceName = "Mac"
    } else if (osName === "BlackBerry") {
      deviceName = "BlackBerry"
    } else {
      deviceName = "Window"
    }
    setPlaying(deviceName);
    console.log(osName)
  }, [])

  const videoConstraints = {
    facingMode: "user"
  };

  return (
    <div className="app">
      <div className="app__container">
      <Webcam
        width='100%'
        height='100%'
        videoConstraints={videoConstraints}
      />
      </div>
      <div className="app__deviceName"> Device - {playing}</div>
    </div>
  );
}

export default App;
