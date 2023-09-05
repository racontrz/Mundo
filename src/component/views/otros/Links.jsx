import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Links() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Links</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-wrap">
            <div className="m-2">
              <p>
                <a
                  href="https://mundoconnect.tumundo.cl/v2.1.17/dashboard/home"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Mundo Conect
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="https://atec.tumundo.cl/login"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Atec
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="http://twister.mundopacifico.cl:3000/listaonts"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Twister
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="https://gestcon.mundopacifico.cl/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Gestcon
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="https://www.numerosportados.cl/PublicWebsite"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    S.G.P Consulta de Número
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="https://www.academiamundo.cl/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Academia Mundo
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="https://dyrk.org/tools/imei/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Generador de IMEI
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="https://api-portabilidad.mundopacifico.cl/monitor"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Monitor de Portabilidad
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="https://portal-reclamos.tumundo.cl/login"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Portal de Reclamos
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="http://sigma.tumundo.cl/contingencias-contact"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Sigma - Contingencias
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="http://requerimientos-ti.mundopacifico.cl/"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Requerimientos TI
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

export default Links;
