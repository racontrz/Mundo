import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";


function Contencion() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Matriz de Contención</Accordion.Header>
          <Accordion.Body>
            <p>
            <a href="https://docs.google.com/spreadsheets/d/16uzraXxDA6FesiHlFlsAapuARLUmZ8KE/edit?usp=sharing&ouid=108019970938918647926&rtpof=true&sd=true" target="_blank">Contención Móvil Julio</a>
            </p>
            <div className="me-4 mt-3 text-end fs-6">
              <p>Informacion al 01/07/2023</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Contencion;
