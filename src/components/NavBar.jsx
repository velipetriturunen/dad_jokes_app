import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'


function NavBar() {

    return (
 <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-3">

            <Nav.Link as={NavLink} to="/" end>
              Random generator
            </Nav.Link>

            <Nav.Link as={NavLink} to="/create">
              Create
            </Nav.Link>

            <Nav.Link as={NavLink} to="/list">
              List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}


export default NavBar