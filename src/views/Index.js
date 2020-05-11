import React, { Component } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

import pelicula from "../assets/img/backgrounds/fondocolorsmall.mp4";
import "../index.css";
import logo from "../assets/img/brand/logo.png";

import Grupo from "./Areas/Grupo";
import SIMIndex from "./Areas/SIM_Index";

import CCSIndex from "./Areas/CCS_Index";
import Socios from "./Areas/CCS_Socios";
import CCSServicios from "./Areas/CCS_Servicios";
import CCSUniversidad from "./Areas/CCS_Universidad";
import CCSCertificaciones from "./Areas/CCS_Certificaciones";
import CCSTecnologia from "./Areas/CCS_Tecnologia";
import CCSClientes from "./Areas/CCS_Clientes";
import CCSImplementacion from "./Areas/CCS_Implementacion";
import CCSOmnicanal from "./Areas/CCS_Omnicanal";
import CCSBI from "./Areas/CCS_BI";

class Index extends Component {
  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
  }

  render() {
    return (
      <div id="slideshare_root">
        <div id="bg"></div>
        <div id="bgnoise"></div>

        <video id="bg" loop muted autoPlay>
          <source src={pelicula} type="video/mp4" />
        </video>

        <ReactFullpage
          licenseKey={"FF3E03E0-2607429E-8207D2C5-8D8301B1"}
          scrollingSpeed={500} /* Options here */
          onLeave={this.onLeave.bind(this)}
          verticalCentered={false}
          loopHorizontal={false}
          anchors={[
            "Portada",
            "Nosotros",
            "GrupoSIM",
            "CCS",
            "Socios",
            "Productos",
            "Implementacion",
            "Omnicanal",
            "Universidad",
            "BI",
            "Certificaciones",
            "Tecnologia",
            "Clientes",
          ]}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div className="content">
                    <img
                      src={logo}
                      onClick={() =>
                        document.getElementById("root").requestFullscreen
                          ? document.getElementById("root").requestFullscreen()
                          : null
                      }
                      width={400}
                      alt="logo"
                      className="img-fluid"
                      style={{
                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                      }}
                    />
                  </div>
                </div>
                <Grupo />
                <SIMIndex />
                <CCSIndex />
                <Socios />
                <CCSServicios />
                <CCSImplementacion />
                <CCSOmnicanal />
                <CCSUniversidad />
                <CCSBI />
                <CCSCertificaciones />
                <CCSTecnologia />
                <CCSClientes />

                {/*############################################################# AREAS #############################################################*/}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Index;
