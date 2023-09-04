import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import r1 from "../../../assets/img/roboHurto/r1.png";
import r2 from "../../../assets/img/roboHurto/r2.png";

function RoboHurto() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Robo, hurto o extravío (SIM/IMEI)</Accordion.Header>
          <Accordion.Body>
            <p>
              Aunado a lo anterior, tenemos los escalamientos relacionados con
              el bloqueo del equipo y la suspensión del servicio, por caso de
              robo, hurto o extravío, los cuales en virtud de su naturaleza son
              realizados por todos nuestros canales de atención (ejecutivos SAC,
              RRSS, Soporte Técnico y Sucursales).
            </p>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    BLOQUEO de SIM / IMEI por robo, hurto o extravío
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Debe comunicarse el titular, validar datos y actualizar de
                      ser necesario. Indicar el tipo de solicitud de bloqueo
                      (SIM y/o IMEI), el motivo (robo, hurto o extravío), el
                      número móvil afectado y un número alternativo de contacto.
                    </p>
                    <img src={r1} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    DESBLOQUEO de SIM / IMEI por robo, hurto o extravío
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Debe comunicarse el titular, validar datos y actualizar de
                      ser necesario. Si el cliente recupera el dispositivo (SIM
                      o equipo móvil), puede solicitar el desbloqueo en un plazo
                      de 2 días hábiles. Indicar el tipo de solicitud
                      (desbloqueo SIM y/o IMEI), el motivo (robo, hurto o
                      extravío), el número afectado, la dirección de envío del
                      duplicado o la indicación que realizará el retiro de la
                      nueva SIM en sucursal, y un número alternativo de
                      contacto.
                    </p>
                    <img src={r1} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    REPOSICIÓN de SIM CARD por robo, hurto o extravío
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Debe comunicarse el titular, debe validar datos y
                      actualizar de ser necesario. Indicar motivo y número
                      afectado. Ofrecer reposición en sucursal de inmediato o
                      envío a domicilio (mediante esta tarea), con plazo de 2 a
                      5 días hábiles. Se debe indicar la dirección exacta de
                      envío y un número alternativo de contacto.
                    </p>
                    <img src={r2} />
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

export default RoboHurto;
