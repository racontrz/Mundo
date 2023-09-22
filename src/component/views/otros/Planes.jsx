import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Planes() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1" >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Planes para Imprimir</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-wrap">
            <div className="m-2">
              <p>
                <a
                  href="https://drive.google.com/drive/folders/1Xzs73qDLHFjcWqPS59Vm7r3S6XZDaA7g?usp=drive_link"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Planes 
                  </button>
                </a>
              </p>
            </div>
            
            </div>
            <div className="me-4 mt-3 text-end fs-6">
              {/* <p>Informacion al 01/07/2023</p> */}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Planes;
