import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Zoom";
import CCS from "../../assets/img/forecast.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="operaciones">
        <div className="content">
          <Zoom>
            <h1>Business Intelligence</h1>
            <Zoom>
              <img
                src={CCS}
                alt="logo"
                className="img-fluid"
                style={{
                  filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                  width: "15vw",
                }}
              />
            </Zoom>

            <p>
              CCS es experto en transformar cada proyecto implementado en una
              estrategia para el logro de objetivos con enfoque a atención y
              venta en la metodología de RFM:
              <ul>
                <li>
                  R=Relacionamiento, con el cliente respetando y combinando el
                  canal por el que nos contacta.
                </li>
                <li>
                  F=Frecuencia de compra teniendo en cuenta si su consumo es
                  parcial, recurrente o esporádico
                </li>
                <li>
                  M=Monto analizar el presupuesto utilizado para una compra
                </li>
              </ul>
            </p>
            <p>
              Realizamos forecasting de trafico para atender tu servicio con los
              recursos adecuados y la máxima eficiencia
            </p>
            <p>
              Mediante análisis estadísticos y cruces de patrones de información
              sabemos cómo actúan los clientes de nuestros clientes y diseñamos
              múltiples estrategias ligadas a acciones concretas
            </p>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
