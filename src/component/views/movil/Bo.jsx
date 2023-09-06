import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import bo1 from "../../../assets/img/Bo/bo1.png";
import bo2 from "../../../assets/img/Bo/bo2.png";
import bo3 from "../../../assets/img/Bo/bo3.png";
import bo4 from "../../../assets/img/Bo/bo4.png";

function Bo() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1" className="mt-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Backoffice Movil</Accordion.Header>
          <Accordion.Body>
            <p>
              En primer lugar, tenemos los escalamientos dirigidos al área de
              Backoffice Móvil (BO Móvil), los cuales están relacionados
              principalmente con el seguimiento en el envío de la sim, problemas
              físicos de la sim y la activación de la misma (trátese de una
              línea nueva, portabilidad o cambio de dispositivo). Estas tareas
              son creadas por ejecutivos SAC, RRSS y Soporte Técnico.
            </p>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Error en la entrega o SIM no funciona
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Se debe descartar falla masiva, problemas de cobertura
                      dentro del domicilio, sin suspensión, verificar que el
                      número de serie de la SIM coincida en dispositivos. Si no
                      hay coincidencia o sim cargada en dispositivos, se debe
                      realizar esta tarea.
                    </p>
                    <img src={bo1} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Demora en la entrega</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      El MCT debe estar Pdte Envío, con plazo vencido de 5 días
                      hábiles desde el cambio de estado. Si el MCT está Pdte
                      Retiro y se comunica el titular, se puede realizar esta
                      tarea para gestionar el cambio de modalidad (a Pdte
                      Envío), indicando la dirección y el número de contacto.
                    </p>
                    <img src={bo2} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Sim Card nunca llegó</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Verificar que el MCT esté Conectado, se haya emitido
                      boleta o factura y corroborar con el cliente que aún no
                      recibe la SIM.
                    </p>
                    <img src={bo3} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Activacion de la Sim (línea nueva, portabilidad o cambio de
                    dispositivo)
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Debe comunicarse el titular, el contrato debe estar Pdte
                      Envío o Pdte Retiro. En el caso de cambio de SIM, se debe
                      sondear con el cliente que ya recibió el reemplazo pero la
                      nueva SIM no funciona y el contrato está Conectado. Se
                      debe comprobar que el número de serie de la SIM coincida
                      en dispositivos.
                    </p>
                    <img src={bo4} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="me-4 mt-3 text-end fs-6">
            <p>Informacion al 06/09/2023</p>
          </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Bo;
