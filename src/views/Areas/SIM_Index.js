import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Zoom";
import SIM from "../../assets/img/brand/SIM_Transparente.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="implementacion">
        <div className="content">
          <Zoom>
            <h1>Grupo SIM</h1>
          </Zoom>
          <Zoom>
            <img
              src={SIM}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
              }}
            />
          </Zoom>
          <br />
          <Zoom>
            <p>
              Fundado en el año 2004, somos un grupo de empresas 100% mexicanas
              especializadas en Capital Humano, ofreciendo servicios de
              Outsourcing, Consultoría, Maquila de Nómina y Servicio Técnico.
            </p>
            <p>
              Con más de 15 años de experiencia y presencia en gran parte de
              Latinoamerica, somos reconocidos por la gran calidad de nuestros
              servicios
            </p>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
