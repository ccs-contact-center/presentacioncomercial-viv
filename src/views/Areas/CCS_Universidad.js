import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Zoom";
import CCS from "../../assets/img/brand/logo.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="operaciones">
        <div className="content">
          <Zoom>
            <img
              src={CCS}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
              }}
            />
          </Zoom>
          <br />
          <Zoom>
            <h1>Universidad CCS</h1>
            <p>
              La Universidad CCS, capacita y desarrolla a nuestros colaboradores
              para el crecimiento interno
            </p>
            <p>
              Los cursos impartidos abarcan habilidades profesionales y
              personales, impartidos por nuestro equipo lider en la industria
              y nuestro reconocido equipo de capacitación
            </p>
            <p>
              Utilizamos tecnología de punta para la impartición de los cursos,
              poor medio de eLearning y microlearning para la capacitación
              continua
            </p>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
