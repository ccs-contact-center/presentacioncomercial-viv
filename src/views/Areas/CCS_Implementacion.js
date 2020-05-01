import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Zoom";
import CCS from "../../assets/img/implementacion.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="operaciones">
        <div className="content">
          <Zoom>
            <h1>Implementación</h1>
            <br />
            <br />
            <Zoom>
              <img
                src={CCS}
                width={700}
                alt="logo"
                className="img-fluid"
                style={{
                  filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                }}
              />
            </Zoom>
            <br />
            <br />
            <p>
              Nuestro proceso de implementación garantiza el arranque de tu
              proyecto en tiempo y forma, de la mejor manera posible
            </p>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
