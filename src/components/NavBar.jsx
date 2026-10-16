import { Navbar, Nav, Container } from 'react-bootstrap';


function NavBar() {

    return (
        <header>
            <Navbar>
                <Container>
                    <div>
                        <nav>
                            <li>
                                <Nav.Link>Random generator </Nav.Link>
                                <Nav.Link>Create </Nav.Link>
                                <Nav.Link>List </Nav.Link>
                            </li>
                        </nav>
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}


export default NavBar