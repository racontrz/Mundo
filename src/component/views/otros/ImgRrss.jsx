import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function ImgRrss() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1" >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Imagenes para RRSS</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-wrap">
            <div className="m-2">
              <p>
                <a
                  href="https://drive.google.com/drive/folders/1DvnPZpt2wO7EUUB_EO8_W2_IAOrJxeTk?usp=drive_link"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Fiestas patrias
                  </button>
                </a>
              </p>
            </div>
            <div className="m-2">
              <p>
                <a
                  href="https://drive.google.com/drive/folders/1wCnExetvQYOeFBkWQBYkb79Yyrg27gAE?usp=drive_link"
                  target="_blank"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Estandar
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

export default ImgRrss;
