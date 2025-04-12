import React from "react";
import "./Welcome.css";
import calav1n from "../../assets/images/calav1n.gif";
import { useNavigate } from "react-router-dom";

const Welcome = ({ handlePlay }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    handlePlay();
    navigate("/home");
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 app-container">
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
