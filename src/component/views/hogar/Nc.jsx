import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";


function Nc() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1" className="mt-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Notas de Credito</Accordion.Header>
          <Accordion.Body>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Por contención
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Descripció de problemática:
                    </p>
                    <p>
                    Cuando cliente indica que se comunicó con call center y le ofrecieron aplicarle nc en la boleta actual.     Si no existe tarea de contención en sistema tambien podemos solicitar no envíen si existe un audio para verificar que ofrecieron a cliente en la llamada.
                    </p>
                    <hr></hr>
                    <p>
                      Procedimiento:
                    </p>
                    <p>
                    Se debe verificar dentro de la oferta del cliente si existe una tarea de tipo contención y subvaloración Acepta con NC o acepta con dcto + NC, si es así pero aún no está aplicado en sistema se debe escalar por correo junto con datos de cliente, boleta a la cual le deben aplicar la NC y monto de NC.
                    </p>
                    <hr></hr>
                    <p>
                      Escalamiento:
                    </p>
                    <p>teddy.diaz@mundotelecomunicaciones.cl</p>
                    <p>CC: A supervisor directo</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="container mt-3 ">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Error de facturación
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Descripció de problemática:
                    </p>
                    <p>
                    Cuando a cliente le aparece un valor que no corresponde a su mensualidad de contrato o algún servicio conexo solicitado.
                    </p>
                    <hr></hr>
                    <p>
                      Procedimiento:
                    </p>
                    <p>
                    Revisar en detalle de movimientos y si se identifica un valor que no corresponde a cliente se debe generar tarea como Tipo: Reclamo Mundo Fijo, Motivo: Error de facturación Fijo Estado abierto. Mismo procedimiento si es móvil, seleccionando tipo y motivo acorde a móvil.
                    </p>
                    <hr></hr>
                    <p>
                      Escalamiento:
                    </p>
                    {/* <p>teddy.diaz@mundotelecomunicaciones.cl</p>
                    <p>CC: A supervisor directo</p> */}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="me-4 mt-3 text-end fs-6">
            {/* <p>Informacion al 01/09/2023</p> */}
          </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Nc;
