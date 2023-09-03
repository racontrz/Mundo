import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import oa1 from "../../assets/img/otras areas/oa1.png";
import oa2 from "../../assets/img/otras areas/oa2.png";

function OtrasAreas() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Desde otras Áreas</Accordion.Header>
          <Accordion.Body>
            <p>
              Por último, encontramos otros escalamientos que son gestionados
              desde distintas áreas de la empresa, con el objeto de realizar sus
              gestiones diarias, siendo algunos de ellos los siguientes:
            </p>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Devolución de líneas por reversa de portabilidad
                    (SUBTEL-SERNAC o reclamos)
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Área solicitante:</p>
                    <p>Reclamos / Multicanalidad</p>
                    <hr></hr>
                    <p>Veridicaciones :</p>
                    <p>
                      Posterior a la gestión del reclamo, multicanalidad escala
                      a soporte.sistemas solicitando la reversa, así como a
                      soporte técnico móvil, quién gestiona el requerimiento con
                      la compañía que recibirá al cliente.
                    </p>
                    <p>soportetecnico.mundomovil@mundotelecomunicaciones.cl</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Cambios de estado de las líneas (hibernación, asignación,
                    etc.)
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Área solicitante:</p>
                    <p>BO Móvil / Sucursales / Terreno / Televentas</p>
                    <hr></hr>
                    <p>Veridicaciones :</p>
                    <p>
                      Se debe verificar el estado de la línea en el menú
                      configuración y luego en el botón del teléfono.
                    </p>
                    <img src={oa1} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Bajas de contratos (masivas)
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Área solicitante:</p>
                    <p>Jefatura y Gerencia del producto móvil</p>
                    <hr></hr>
                    <p>Veridicaciones :</p>
                    <p>Según el criterio y la necesidad del área.</p>
                    <p>soporte.sistemas@mundotelecomunicaciones.cl</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Asignación de números específicos a contratos (relacionar
                    número móvil determinado a un MCT)
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Área solicitante:</p>
                    <p>Sucursales / Canales de venta</p>
                    <hr></hr>
                    <p>Veridicaciones :</p>
                    <p>
                      Constatar que el número del cliente no está asignado a su
                      contrato, ingresando en el MCT y luego en las pestañas
                      Líneas y Dispositivos.
                    </p>
                    <img src={oa2} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Error de opción de cambio de SIM (no se puede realizar el
                    cambio de dispositivo)
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Área solicitante:</p>
                    <p>BO Móvil / Sucursales / Terreno</p>
                    <hr></hr>
                    <p>Veridicaciones :</p>
                    <p>
                      Se trata de una incidencia. La solicitud es formulada
                      generalmente por áreas encargadas de la activación de SIM,
                      en caso de que no se puede gestionar el cambio de
                      dispositivo.
                    </p>
                    <p>soporte.sistemas@mundotelecomunicaciones.cl</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="me-4 mt-3 text-end fs-6">
              <p>Informacion al 01/09/2023</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default OtrasAreas;
