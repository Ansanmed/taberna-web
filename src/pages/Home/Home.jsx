import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";

import orcosImg from "../../assets/images/orcos1.jpg";
import Header from "../../components/layout/Header/Header";
const Home = ({ handlePlay, handlePause }) => {
  const [isPlaying, setisPlaying] = useState(true);

  const switchAudio = () => {
    isPlaying ? handlePause() : handlePlay();
    setisPlaying(!isPlaying);
  };
  return (
    <div className="fade-in">
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 app-container">
        <img className="img-fluid" src={orcosImg} alt="Orcos en marcha" />
        <div className="mt-2">
          Fueron los orcos, una muchedumbre creada con formas desfiguradas por
          el dolor y el odio. La única alegría de estas criaturas era el
          sufrimiento de los demás, porque la sangre que corría por los orcos
          era negra y fría
        </div>
      </div>
      <div className="py-2 d-flex justify-content-center to-bottom">
        <Button variant="outline-primary" onClick={switchAudio}>
          {isPlaying
            ? "Parar la música porque soy una maricona"
            : "Activar la música porque soy un tío"}
        </Button>
      </div>
    </div>
  );
};

export default Home;
