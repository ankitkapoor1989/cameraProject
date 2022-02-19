import React, { useState } from "react";
import MobileDetect from "mobile-detect";
import "./App.css";

function App() {
  const [playing, setPlaying] = useState(false);

  const HEIGHT = 500;
  const WIDTH = 500;

  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };
  const deviceChange = new MobileDetect(window.navigator.userAgent);
  let deviceName = "";
  if (deviceChange.os() === "iOS") {
    deviceName = "Model: iPhone";
  } else if (deviceChange.os() === "AndroidOS") {
    deviceName = "Model: Android";
  } else if (deviceChange.os() === "BlackBerryOS") {
    deviceName = "Model: BlackBerry";
  } else if (deviceChange.os() === "WindowsOS") {
    deviceName = "Model: Window";
  } else if (deviceChange.os() === "MacOS") {
    deviceName = "Model: Mac";
  } else {
    deviceName = "Model: Mac";
  }

  return (
    <div className="app">
      <div className="app__container">
        <video
          height={HEIGHT}
          width={WIDTH}
          muted
          autoPlay
          className="app__videoFeed"
        ></video>
      </div>
      <div className="app__input">
        {playing ? (
          <button onClick={stopVideo}>Stop</button>
        ) : (
          <button onClick={startVideo}>Start</button>
        )}
      </div>
      <div className="app__deviceName">{deviceName}</div>
    </div>
  );
}

export default App;
