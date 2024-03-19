import React from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <div>
        <img
          className="imagen"
          src={require("../img/img.jpg")}
          alt="imagen 1"
        />
      </div>
      <div>
        <ul>
          <li>
            <Link className="item" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="item" to="/registro">
              Registro Actividad
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
