import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import beggingOrcs from "../../assets/images/begging-orcs.png";

const UnderConstruction = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div>Estamos trabajando, señor...</div>
      <img className="my-4" src={beggingOrcs} alt="Orcos con cara de pena" />
      <Button variant="outline-primary" onClick={() => navigate("/home")}>
        Volver
      </Button>
    </div>
  );
};

export default UnderConstruction;
