import { Navbar, Nav, Container } from 'react-bootstrap';


function NavBar() {

    return (
        <header>
            <Navbar>
                <Container>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <li>
                                <Nav.Link class="navLink" href="#">Random generator </Nav.Link>
                                <a class="navLink" href="#">Create </a>
                                <a class="navLink" href="#">List </a>
                            </li>
                        </nav>
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}


export default NavBar