import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";

import orcosImg from "../../assets/images/orcos1.jpg";
const Home = ({ handlePlay, handlePause }) => {
  const [isPlaying, setisPlaying] = useState(true);

  const switchAudio = () => {
    isPlaying ? handlePause() : handlePlay();
    setisPlaying(!isPlaying);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100 app-container">
        <img src={orcosImg} alt="Orcos en marcha" />
      </div>
      <div className="pt-2 d-flex justify-content-center to-bottom">
        <Button variant="outline-primary" onClick={switchAudio}>
          {isPlaying
            ? "Parar la música porque soy una maricona"
            : "Activar la música porque soy un tío"}
        </Button>
      </div>
    </>
  );
};

export default Home;
