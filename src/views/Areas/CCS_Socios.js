import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Bounce";
import { Avatar } from "@material-ui/core";
import avatar1 from "../../assets/img/avatars/1.jpg";
import avatar2 from "../../assets/img/avatars/2.jpg";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="operaciones">
        <div className="content" style={{ padding: "20px" }}>
          <div className="slide">
            <Zoom>
              <h1>Socios</h1>
            </Zoom>

            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent">
                  <div className="centrado-fila">
                    <Avatar
                      style={{ cursor: "pointer" }}
                      alt="Jerónimo Fernández"
                      src={avatar1}
                      className="avatar hoverbtn"
                      onClick={() => (window.location.href = "/#Socios/1")}
                    />
                  </div>
                  <p>Jerónimo Fernández Senderos</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: "pointer" }}
                    alt="Vivian Cheja"
                    src={avatar2}
                    className="avatar hoverbtn"
                    onClick={() => (window.location.href = "/#Socios/2")}
                  />
                  <p>Vivian Cheja Dabbah</p>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="slide">
            <Zoom left className="centrado-fila">
              <Avatar className="avatarBig" alt="" src={avatar1} />
            </Zoom>
            <br />

            <Zoom up>
              <h2>Jerónimo Fernández Senderos</h2>
            </Zoom>

            <Zoom right></Zoom>
            <br />
          </div>
          <div className="slide">
            <Zoom left className="centrado-fila">
              <Avatar className="avatarBig" alt="" src={avatar2} />
            </Zoom>
            <br />

            <Zoom up>
              <h2>Vivian Cheja Dabbah</h2>
            </Zoom>

            <Zoom right>
              <p style={{ fontSize: "1vw" }}>
                Empezando como agente telefónico cuando era estudiante en la
                industria en México y continuando con 30 años de experiencia, ha
                desarrollado una pasión por la industria. Decidió quedarse en el
                sector de recursos humanos por la pasión que desarrolló durante
                los años hacia el mismo.{" "}
              </p>
              <p style={{ fontSize: "1vw" }}>
                Comenzó en la primera agencia de telemarketing en México y
                basado en esto decidió embarcarse en esta carrera{" "}
              </p>
              <p style={{ fontSize: "1vw" }}>
                Posteriormente, a la edad de 24 años fue la primera empleada de
                ahora Teletech México donde llevó la empresa de 0 a 2000
                estaciones de trabajo. Dentro de la misma empresa comenzó a
                desarrollarse como directora comercial y participó en el proceso
                de compraventa de la empresa mexicana (TMI) a Teletech
              </p>
              <p style={{ fontSize: "1vw" }}>
                Posteriormente operó en los contact centers de Telmex donde
                tenía a su cargo a más de 5000 empleados. Estando ahí implementó
                el servicio de soporte técnico para prodigy así como la atención
                de clientes general de Telmex, trabajó teniendo experiencia con
                el STRM y contrato a los mayores centros con desborde.
              </p>
              <p style={{ fontSize: "1vw" }}>
                Posteriormente con el nacimiento de sus hijos tomó la decisión
                de capitalizar su experiencia y crear su propia empresa con el
                concepto de boutique siguiendo la lindes de atender a
                profundidad y con la mejor calidad a sus clientes{" "}
              </p>
              <p style={{ fontSize: "1vw" }}>
                Ha trabajado y aportado un gran servicio a algunas de las
                empresas más importantes de México y el extranjero como Telmex,
                Interjet, IXE, DirecTV, Motorola, Televia, Oxxo, Cablevisión,
                Scotiabank, Santander, Banamex, Liverpool, Microsoft, Monex,
                PRI, PAN, Televisa, Ticket Master, ATT, Claro, Moneygram,
                Inbursa, Afore profuturo, Sura, entre muchas otras{" "}
              </p>
              <p style={{ fontSize: "1vw" }}>
                Cuenta con gran experiencia en la eficiencia y verticalidad de
                los contact centers. Ha implementado todo tipo de proyectos
                onmicanales en atención a clientes, experiencia a cliente,
                sinergia de ventas, soporte técnico, entre otros
              </p>
            </Zoom>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
