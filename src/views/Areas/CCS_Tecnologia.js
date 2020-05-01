import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Bounce";
import { Avatar } from "@material-ui/core";
import C1W from "../../assets/img/partners/white/avaya.png";
import C2W from "../../assets/img/partners/white/genesys.png";
import C3W from "../../assets/img/partners/white/mitrol.png";
import C4W from "../../assets/img/partners/white/s1gateway.png";
import C5W from "../../assets/img/brand/CCS_Blanco.png";
import CAPP from "../../assets/img/brand/CCS_APP.png";

import app1 from "../../assets/img/brand/app1.PNG";
import app2 from "../../assets/img/brand/app2.PNG";

import dashboard from "../../assets/img/brand/dashboard.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="operaciones">
        <div className="content" style={{ padding: "20px" }}>
          <div className="slide">
            <Zoom>
              <h1>Tecnología</h1>
            </Zoom>
            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: "pointer" }}
                    alt="Outsourcing"
                    src={C1W}
                    className="avatarS hoverbtn"
                  />
                  <p>Avaya</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: "pointer" }}
                    alt="Cosourcing"
                    src={C2W}
                    className="avatarS hoverbtn"
                  />
                  <p>Genesys</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: "pointer" }}
                    alt="Cosourcing"
                    src={CAPP}
                    className="avatarS hoverbtn"
                    onClick={() => (window.location.href = "/#Tecnologia/1")}
                  />
                  <p>Aplicación CCS</p>
                </div>
              </div>
            </Zoom>

            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: "pointer" }}
                    alt="Calidad"
                    src={C3W}
                    className="avatarS hoverbtn"
                  />
                  <p>Mitrol</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: "pointer" }}
                    alt="Capacitación"
                    src={C4W}
                    className="avatarS hoverbtn"
                  />
                  <p>S1 Gateway</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: "pointer" }}
                    alt="Capacitación"
                    src={C5W}
                    className="avatarS hoverbtn"
                    onClick={() => (window.location.href = "/#Tecnologia/2")}
                  />
                  <p>Dashboards Online</p>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="slide">
            <h2>Aplicación CCS</h2>
            <p>
              Desarrollamos una aplicación para iOS y Android en la que podrás
              visualizar en tiempo real los principales indicadores de tu
              servicio
            </p>
            <br />

            <img
              src={app1}
              width={150}
              alt="logo"
              className="img-fluid"
              style={{ marginRight: "2vw" }}
            />
            <img src={app2} width={150} alt="logo" className="img-fluid" />
            <div>
              <p
                style={{
                  cursor: "pointer",
                  marginTop: "-10px",
                  color: "black",
                }}
                className="icon-arrow-left regresar float-left"
                onClick={() => (window.location.href = "/#Tecnologia")}
              >
                <span className="icon-arrow-left"></span>
              </p>
            </div>
          </div>
          <div className="slide">
            <h2>Dashboards Web</h2>
            <p>
              Por medio de una sencilla interfaz, podras revisar en tiempo real
              los datos de tu servicio desde cualquier navegador, para ayudarte
              a tomar decisiones en el momento
            </p>

            <div>
              <img
                src={dashboard}
                width={580}
                alt="logo"
                className="img-fluid zoom"
              />
              <p className="icon-magnifier " style={{ marginLeft: "-50%" }}></p>
            </div>
            <div>
              <p
                style={{
                  cursor: "pointer",
                  marginTop: "-10px",
                  color: "black",
                }}
                className="icon-arrow-left regresar float-left"
                onClick={() => (window.location.href = "/#Tecnologia")}
              >
                <span className="icon-arrow-left"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
