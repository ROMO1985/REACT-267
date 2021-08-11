
import { Container } from 'react-bootstrap'
//import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { Link} from "react-router-dom";


const NavBar = () =>
        <nav>
                <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
                <Container>
                       
                        <div className="btn-group">
                        <Link to="/1" className="btn btn-dark"> Categoria 1 </Link>
                        <Link to="/2" className="btn btn-dark"> Categoria 2 </Link>
                        </div>
                       
                <CartWidget/>

                </Container>

                </Navbar>
        </nav>


 export default NavBar