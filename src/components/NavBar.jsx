import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function NavBar() {

    return (
        
            <Navbar>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Random generator </Link>
                            </li>

                            <li>
                                <Link to="/create">Create </Link>
                            </li>

                            <li>
                                <Link to="/list">List </Link>
                            </li>
                        </ul>
                    </nav>
            </Navbar>
        
    )
}


export default NavBar