import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Zoom";
import CCS from "../../assets/img/omnicanal.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="operaciones">
        <div className="content">
          <Zoom>
            <h1>Modelo Omnicanal</h1>
            <br />
            <br />
            <Zoom>
              <div
                style={{
                  padding: "4vw",
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: "1vw",
                }}
              >
                <img
                  src={CCS}
                  alt="logo"
                  className="img-fluid"
                  style={{
                    filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                    width: "40vw",
                  }}
                />
              </div>
            </Zoom>
            <br />
            <p>
              Con base en la tendencia actual del mercado, CCS opera bajo un
              modelo omnicanal para estar a la vanguardia en la industria de
              centros de contacto y brindar a tus clientes soluciones integrales
              que permitan elevar la eficiencia de sus servicios y alcanzar los
              objetivos planteados
            </p>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
