import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Formularios() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1" className="mt-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Formularios</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-wrap">
            <div className="m-2">
              <p>
                <a
                  href="https://drive.google.com/file/d/1Wl5a-AcTLzioQ1rQlLZ74gcwbauw2R6o/view?usp=drive_link"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Renuncia Móvil
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="https://docs.google.com/document/d/10gbMsZX-8ABFWcDV6nPk8ka166hDB-0H/edit?usp=drive_link&ouid=108019970938918647926&rtpof=true&sd=true"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Formulario de Reclamos
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="https://drive.google.com/file/d/1C5iYWUSTLHlvIzpzT11Z5FgEEtIZ_DYm/view?usp=drive_link"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Formulario de Recepcion de Equipos
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

export default Formularios;
