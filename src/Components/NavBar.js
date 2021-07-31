
import { Container } from 'react-bootstrap'
//import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'

const NavBar = () =>
        <nav>
                <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
                <Container>
                <Navbar.Brand href="#"> Catalogo </Navbar.Brand>
                <CartWidget/>                
                </Container>

                </Navbar>
        </nav>


 export default NavBar