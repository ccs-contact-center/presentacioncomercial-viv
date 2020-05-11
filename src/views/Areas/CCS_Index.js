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
            <p>
              Somos un contact center 100% mexicano fundado en 2003, conformado
              por un equipo de profesionales con más de 25 años de experiencia
              en la gestión de clientes.
            </p>

            <p>
              Nos caracterizamos por ofrecer un servicio boutique, desarrollando
              soluciones innovadoras a la medida para nuestros clientes. Siempre
              buscando brindar la mejor experiencia con las mejores
              herramientas. Personas trabajando para personas.
            </p>
            <p>
              Nos especializamos en implantación, operación y diseño de
              soluciones optimizadas para centros de contacto que nos permiten
              entregar servicios de excelencia a los clientes de nuestros
              clientes.
            </p>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
