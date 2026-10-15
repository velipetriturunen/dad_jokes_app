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
                                <a>Create </a>
                                <a>List </a>
                            </li>
                        </nav>
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}


export default NavBar