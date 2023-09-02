import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import baja from "../../assets/img/baja/baja.png";
import baja2 from "../../assets/img/baja/baja2.png";
import baja3 from "../../assets/img/baja/baja3.png";
import baja4 from "../../assets/img/baja/baja4.png";
import baja5 from "../../assets/img/baja/baja5.png";
import baja6 from "../../assets/img/baja/baja6.png";
import baja7 from "../../assets/img/baja/baja7.png";
import baja8 from "../../assets/img/baja/baja8.png";


function Baja() {
  return (
    <div className="container mt-3">
      <Accordion defaultActiveKey="1" className="mt-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Baja</Accordion.Header>
          <Accordion.Body>
            <p>Considerar:</p>
            <p>Siempre debe solicitar la baja el titular de servicio </p>
            <p>Presentar el carnet de identidad</p>
            <p>
              Si un tercero realiza la gestión, debe presentar un poder simple
              autorizado por el titular indicando el nombre y rut de la persona
              que lo representará para este trámite, además esta tercera persona
              debe presentar ambos carnets de identidad o fotocopia en reemplazo
              del físico.
            </p>
            <hr></hr>
            <p>Debemos ingresar a Mundo Conect con el rut del Titular</p>
            <img src={baja} />
            <hr/>
            <p>Nos dirigiremos al apartado de contratos para poder identificar la oferta a la cual le haremos la gestión, es importante identificar bien la oferta ya que el cliente podría tener más de una, para avanzar presionaremos en el código del contrato
            </p>
            <img src={baja2} />
            <hr/>
            <p>
            Esta acción nos llevará directo al contrato que debemos realizar la gestión, la cual debe coincidir con la información entregada por el cliente (el domicilio que se le aplicará la gestión).
            </p>
            <img src={baja3} />
            <hr/>
            <p>
            Dentro de la oferta nos dirigimos al Submenú Tareas.
            Presionamos Signo + para agregar el ítem.
            </p>
            <img src={baja4} />
            <hr/>
            <p>Campos a llenar:</p>
            <p>Tipo de Tarea: Contención</p>
            <p>Motivo: El que indique el cliente</p>
            <p>Estado: Siempre Pdte Sucursal</p>
            <p>Subvaloración: Siempre Renuncia C</p>
            <p>Observación: Detalle de lo solicitado e informado.</p>
            <img src={baja5} />
            <hr/>
            <p>De esta manera quedará el ingreso como muestra la siguiente imagen, ahora debemos presionar en el código para gestionar la subida de documentación.</p>
            <img src={baja6} />
            <p>Se abrirá una ventana emergente en donde debemos realizar lo siguiente:</p>
            <p>Debemos ir a la tarea recién creada</p>
            <p>Presionar menú Acciones</p>
            <p>Documentación</p>
            <img src={baja7} /> 
            <hr/>
            <p>Ahora debemos subir el formulario firmado por el cliente para esto seleccionaremos en:</p>
            <p>Tipo de Documento: Fiscal</p>
            <p>Sub Tipo de Documento:Formulario de Renuncia MP</p>
            <p>Buscar el archivo y adjuntarlo, presionaremos guardar para finalizar la acción.</p>
            <img src={baja8} />


            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Baja;
