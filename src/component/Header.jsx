import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className='bg-light' variant="dark" expand="lg">
      <Container fluid>
        <NavLink className='ms-2 nav-link text-secondary fs-3'  to='/'>Escalamientos</NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" className='bg-secondary'/>
        <Navbar.Collapse id="navbarScroll" className="justify-content-center mx-auto" >
          <Nav >
            <NavLink className='nav-link text-secondary text-center me-4' to='/hogar'>Hogar</NavLink>
            <NavLink className='nav-link text-secondary text-center me-4' to='/movil'>Movil</NavLink>
            <NavLink className='nav-link text-secondary text-center me-4' to='/otros'>Otros</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;