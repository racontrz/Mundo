import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Ofertas() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1" >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ofertas</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-wrap">
            <div className="m-2">
              <p>
                <a
                  href="https://docs.google.com/spreadsheets/d/1c35maLNZ46ev6i5ZYdhqKfDlGl-5rqxJ/edit?usp=drive_link&ouid=108019970938918647926&rtpof=true&sd=true"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Oferta Septiembre
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="https://drive.google.com/file/d/1VbnxyJO47jwJ8X8ZPz1-cXyhtYq-lp2b/view?usp=drive_link"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Grilla de Canales - Agosto 2023
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

export default Ofertas;
