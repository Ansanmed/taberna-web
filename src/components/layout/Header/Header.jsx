import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="mx-auto mb-0">La taberna del orco 3.0</h1>
          <p>Más allá de la decrepitud</p>
        </div>
        <nav className="col-12 col-md-6">
          <div className="d-flex flex-md-row-reverse">
            <p className="mr-2">
              <Link to="/under-construction">Inicio</Link>
            </p>
            <p className="mx-2">
              <Link to="/under-construction">Acerca</Link>
            </p>
            <p className="ml-2">
              <Link to="/under-construction">Contacto</Link>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
