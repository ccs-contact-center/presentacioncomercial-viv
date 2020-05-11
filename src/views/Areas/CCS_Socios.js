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
              <p>
                Una de las pioneras en la industria del telemarketing en México,
                hoy con 30 años de carrera en el ramo y con la experiencia de
                haber participado en proyectos de gran envergadura que le
                permitieron conocer a profundidad cada una de las áreas que
                componen el contact center.
              </p>
              <p>
                >En el año de 2003 decide capitalizar su expertise y basada en
                las mejores prácticas de la industria crea CCS, un centro de
                contacto con el concepto boutique con la visión de generar en
                cada interacción con el cliente una experiencia de calidad.
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
