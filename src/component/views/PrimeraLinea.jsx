import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import pl1 from "../../assets/img/primera linea/pl1.png";
import pl2 from "../../assets/img/primera linea/pl2.png";
import pl3 from "../../assets/img/primera linea/pl3.png";
import pl4 from "../../assets/img/primera linea/pl4.png";

function PrimeraLinea() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Primera Línea</Accordion.Header>
          <Accordion.Body>
            <p>
              En tercer lugar, tenemos algunos escalamientos que también se
              realizan desde primera línea pero que van dirigidos a diferentes
              áreas, según la naturaleza del requerimiento. Todas estas
              solicitudes son gestionadas por SAC. En el caso de RRSS, los
              asesores solo pueden ingresar la solicitud por la baja de contrato
              Pdte Envío o Retiro, debido a que el resto de requerimientos
              amerita la lectura de script comercial.
            </p>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Baja de contrato Pdte Envío o Pdte Retiro
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Debe comunicarse el titular, verificar estado del MCT
                      (Pdte Envío o Pdte Retiro) y el número no debe estar
                      portado a Mundo. En el motivo de la tarea debe
                      diferenciarse si se trata de Línea Nueva o Portabilidad.
                    </p>
                    <img src={pl1} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Anulación de portabilidad Pdte Portabilidad
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Debe comunicarse el titular, lectura de script comercial y
                      verificar que el contrato haya ingresado al estado Pdte
                      Portabilidad el mismo día hasta el horario establecido
                      (20:00 hrs para el Contact Center y 18:00 hrs para
                      Sucursales). Se debe anular la portabilidad si aún está en
                      curso, no será necesario en caso de rechazo. La gestión de
                      anulación la realiza el ejecutivo en primera línea.
                    </p>
                    <img src={pl2} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Reversa de Portabilidad en SGP
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      El contrato debe estar Conectado. Solo se permite la
                      reversa en 4 casos: 1.- solicitud de anulación no
                      procesada, 2.- Fraude (cliente no solicitó la
                      portabilidad), 3.- Reclamo Sernac o Subtel (amenaza con
                      ingresar reclamo) y 4.- problemas de cobertura (con SSTT
                      cerrada con subvaloración Sin Cobertura). Ver cada caso en
                      gestcon.
                    </p>
                    <img src={pl3} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                  Cambio de número
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                    Debe comunicarse el titular, sin morosidad, sin gestiones comerciales pendientes y con MCT Conectado.
                    </p>
                    <img src={pl4} />
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

export default PrimeraLinea;
