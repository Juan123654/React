import React from "react";
import "../css/Registro.css";

function Registro() {
  return (
    <div className="contenedor">
      <h1 className="titulo">Registro Actividades</h1>
      <div>
        <form className="formulario">
          <input
            className="input"
            type="text"
            placeholder="Nombre Usuario"
          ></input>
          <input className="input" type="text" placeholder="Actividad"></input>
          <input className="input" type="date" placeholder="Fecha"></input>
          <input
            className="input"
            type="text"
            placeholder="Hora Inicio"
          ></input>
          <input className="input" type="text" placeholder="Hora Final"></input>
          <button className="boton" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Registro;
