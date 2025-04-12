import React, { useState } from "react";
import "./Welcome.css";
import calav1n from "../../assets/images/calav1n.gif";
import { useNavigate } from "react-router-dom";

const Welcome = ({ handlePlay }) => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    handlePlay();
    setIsExiting(true);
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center min-vh-100 app-container ${
        isExiting ? "fade-out" : ""
      }`}
    >
      <img
        src={calav1n}
        onClick={handleClick}
        alt="Calavera invitando a entrar"
      />
      <p className="display-6" onClick={() => alert("La imagen, subnormal")}>
        Pulsa la imagen
      </p>
    </div>
  );
};

export default Welcome;
