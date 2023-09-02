import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import st1 from "../../assets/img/soporteTecnico/st1.png";


function SoporteTecnico() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1" >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Soporte Técnico Móvil</Accordion.Header>
          <Accordion.Body>
            <p>
            En segundo lugar, encontramos los escalamientos dirigidos al área de Soporte Técnico Móvil (salvo la liberación de las líneas portadas), los cuales son gestionados por los ejecutivos de Soporte Técnico, RRSS o Sucursales, cuando no logran resolver los inconvenientes que presenta el cliente con el servicio. El ejecutivo SAC no realiza estas tareas, solo debe derivar la llamada al área técnica, previa revisión de los requisitos para realizar la transferencia.
            </p>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                  Soporte técnico móvil (no navega, no llama, no recibe sms, no recibellamadas, ect).
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                    Descartar falla masiva o problemas de cobertura dentro del
                    domicilio, sin suspensión, MCT conectado y el consumo del plan.
                    </p>
                    <img src={st1} />
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

export default SoporteTecnico;