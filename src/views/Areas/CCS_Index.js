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
            <p>Somos un contact center 100% mexicano fundado en 2003</p>
            <p>
              Nos caracterizamos por ofrecer un servicio boutique, desarrollando
              soluciones a la medida para nuestros clientes y siempre inovando
              para ofrecer la mejor experiencia y tecnología disponibles
            </p>
            <p>
              Nos distingue nuestra gestión del recurso humano, atendiendo de
              manera personalizada, con un trato humano, de persona a persona
            </p>
            <p>
              Nuestro equipo tiene más de 25 años de experiencia en la gestión
              de clientes o CRM. Nos especializamos en la implantación,
              operación y optimización de Centros de Contacto para entregar una
              excelente experiencia a nuestros clientes y a los usuarios finales
            </p>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
