import React, { Component } from 'react'
import '../../index.css'
import 'react-circular-progressbar/dist/styles.css'

import Zoom from 'react-reveal/Bounce'
import { Avatar } from '@material-ui/core'
import C1W from '../../assets/img/certificaciones/white/iso9001.png'
import C2W from '../../assets/img/certificaciones/white/iso27001.png'
import C3W from '../../assets/img/certificaciones/white/itil.png'
import C4W from '../../assets/img/certificaciones/white/copc.png'
import C5W from '../../assets/img/certificaciones/white/stps.png'
import C6W from '../../assets/img/certificaciones/white/conocer.png'

import C1T from '../../assets/img/certificaciones/transparent/iso9001.png'
import C2T from '../../assets/img/certificaciones/transparent/iso27001.png'
import C3T from '../../assets/img/certificaciones/transparent/itil.png'
import C4T from '../../assets/img/certificaciones/transparent/copc.png'

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="operaciones">
        <div className="content" style={{ padding: '20px' }}>
          <div className="slide">
            <Zoom>
              <h1>Certificaciones</h1>
            </Zoom>
            <br />
            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent ">

                 
                  <Avatar
                    style={{ cursor: 'pointer' }}
                    alt="Outsourcing"
                    src={C1W}
                    className="avatarS hoverbtn"
                    onClick={() =>
                      (window.location.href = '/#Certificaciones/1')
                    }
                  />

                  <p>ISO 9001</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: 'pointer' }}
                    alt="Cosourcing"
                    src={C2W}
                    className="avatarS hoverbtn"
                    onClick={() =>
                      (window.location.href = '/#Certificaciones/2')
                    }
                  />
                  <p>ISO 27001</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: 'pointer' }}
                    alt="Consultoría"
                    src={C3W}
                    className="avatarS hoverbtn"
                    onClick={() =>
                      (window.location.href = '/#Certificaciones/3')
                    }
                  />
                  <p>ITIL</p>
                </div>
              </div>
            </Zoom>

            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: 'pointer' }}
                    alt="Calidad"
                    src={C4W}
                    className="avatarS hoverbtn"
                    onClick={() =>
                      (window.location.href = '/#Certificaciones/4')
                    }
                  />
                  <p>COPC</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: 'pointer' }}
                    alt="Capacitación"
                    src={C5W}
                    className="avatarS hoverbtn"
                    onClick={() =>
                      (window.location.href = '/#Certificaciones/5')
                    }
                  />
                  <p>STPS</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    style={{ cursor: 'pointer' }}
                    alt="Business Intelligence"
                    src={C6W}
                    className="avatarS hoverbtn"
                    onClick={() =>
                      (window.location.href = '/#Certificaciones/6')
                    }
                  />
                  <p>CONOCER</p>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="slide">
            <img
              src={C1T}
              width={230}
              alt="logo"
              className="img-fluid"
              style={{
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))',
              }}
            />
            <br />
            <br />
            <p>
              La certificación ISO 9001, garantiza que nuestros servicios tienen
              una alta calidad
            </p>
            <p>
              Considerada como un referente mundial, la norma ISO 9001 fija
              principios fundamentales de gestión de calidad que nos ayudan a a
              controlar y mejorar el rendimiento y conducirnos hacia la
              eficiencia, la excelencia de nuestros productos y la optimización
              de nuestro servicio al cliente. Estos principios son: enfoque al
              cliente, liderazgo, participación del capital humano, enfoque basado en
              los procesos, enfoque de sistema para la gestión, mejora continua,
              enfoque basado en la toma de decisiones y las buenas relaciones
              con el proveedor.
            </p>
            <div>
              <p
                style={{
                  cursor: 'pointer',
                  marginTop: '-10px',
                  color: 'black',
                }}
                className="icon-arrow-left regresar float-left"
                onClick={() => (window.location.href = '/#Certificaciones')}
              >
                <span className="icon-arrow-left"></span>
              </p>
            </div>
          </div>
          <div className="slide">
            <img
              src={C2T}
              width={230}
              alt="logo"
              className="img-fluid"
              style={{
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))',
              }}
            />
            <br />

            <p>
              La seguridad de tu información es fundamental para nosotros, por
              lo cual contamos con la certificación ISO 27001, que garantiza la
              seguridad de tus datos
            </p>
            <p>
              El eje central de ISO 27001 es proteger la confidencialidad,
              integridad y disponibilidad de tu información. Esto lo hacemos
              investigando cuáles son los potenciales problemas que podrían
              afectar la información (Evaluación de riesgos) y luego definiendo
              lo que es necesario hacer para evitar que estos problemas se
              produzcan (Mitigación del riesgo). Por lo tanto, la filosofía
              principal de la norma ISO 27001 se basa en la gestión de riesgos:
              investigar dónde están los riesgos y luego tratarlos
              sistemáticamente.
            </p>
            <div>
              <p
                style={{
                  cursor: 'pointer',
                  marginTop: '-10px',
                  color: 'black',
                }}
                className="icon-arrow-left regresar float-left"
                onClick={() => (window.location.href = '/#Certificaciones')}
              >
                <span className="icon-arrow-left"></span>
              </p>
            </div>
          </div>
          <div className="slide">
            <br />

            <img
              src={C3T}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))',
              }}
            />
            <br />
            <br />
            <p>
              Contamos con capital humano certificado en ITIL, cuyo enfoque hemos
              adoptado en la Gestión de nuestros servicios de TI, para alcanzar
              los objetivos estratégicos de negocio y satisfacer sus
              necesidades.
            </p>
            <p>Algunas ventajas clave son:</p>
            <ul>
              <li>Un servicio mejor y más confiable</li>
              <li>Clientes más conformes</li>
              <li>Mejora el proceso de innovación</li>
              <li>Ahorro financiero</li>
              <li>Incrementa la productividad</li>
            </ul>
            <br />

            <div>
              <p
                style={{
                  cursor: 'pointer',
                  marginTop: '-10px',
                  color: 'black',
                }}
                className="icon-arrow-left regresar float-left"
                onClick={() => (window.location.href = '/#Certificaciones')}
              >
                <span className="icon-arrow-left"></span>
              </p>
            </div>
          </div>
          <div className="slide">
            <br />
            <br />

            <img
              src={C4T}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))',
              }}
            />
            <br />
            <br />
            <p>
              Se trata de una certificación de la gestión de varios parámetros
              para alcanzar la gestión ideal en métricas o mediciones claves,
              capacitación de personas que gestionan clientes, todo esto
              sustentado en mejorar la satisfacción del cliente con buen
              servicio y alta calidad; Aumentar ingresos y reducir costes de
              operación
            </p>
            <p>
              Tenemos capital humano certificado en COPC. Integramos conceptos y
              procesos de dicha norma para mejorar la calidad en los
              procedimientos operativos, además de gestionar, medir y capacitar
              a nuestro capiital humano.
            </p>
            <br />
            <br />
            <div>
              <p
                style={{
                  cursor: 'pointer',
                  marginTop: '-10px',
                  color: 'black',
                }}
                className="icon-arrow-left regresar float-left"
                onClick={() => (window.location.href = '/#Certificaciones')}
              >
                <span className="icon-arrow-left"></span>
              </p>
            </div>
          </div>
          <div className="slide">
            <br />
            <br />
            <br />

            <Avatar
              alt="Capacitación"
              src={C5W}
              className="avatarSE"
              style={{ marginLeft: '30vw' }}
            />
            <br />
            <br />
            <p>
              Nustros instructores están certificados ante la Secretaría de
              Trabajo y Previsión Social (STPS)
            </p>
            <p>
              Los beneficios de la certificación, radican en que se garantiza
              que la persona que obtuvo el certificado cuenta con las
              habilidades, destrezas, conocimiento y actitudes que el Estándar
              de competencia solicita.
            </p>
            <br />
            <br />
            <div>
              <p
                style={{
                  cursor: 'pointer',
                  marginTop: '-10px',
                  color: 'black',
                }}
                className="icon-arrow-left regresar float-left"
                onClick={() => (window.location.href = '/#Certificaciones')}
              >
                <span className="icon-arrow-left"></span>
              </p>
            </div>
          </div>
          <div className="slide">
            <br />
            <br />
            <br />

            <Avatar
              alt="Capacitación"
              src={C6W}
              className="avatarSE"
              style={{ marginLeft: '30vw' }}
            />
            <br />
            <br />
            <p>
              La certificación CONOCER por competencias, garantiza altos
              estandares en capacitación, evaluacion y certificación
            </p>
            <p>
              El certificado de competencia es un documento expedido por la
              Secretaría de Educación Pública del Gobierno Federal en el cual se
              asegura que el desempeño de una persona se ajusta a lo que
              requieren las empresas o instituciones.
            </p>
            <br />
            <br />
            <div>
              <p
                style={{
                  cursor: 'pointer',
                  marginTop: '-10px',
                  color: 'black',
                }}
                className="icon-arrow-left regresar float-left"
                onClick={() => (window.location.href = '/#Certificaciones')}
              >
                <span className="icon-arrow-left"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comercial
