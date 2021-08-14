import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import { Link } from 'react-router-dom';

import './style.css';

const Header = () => (
    <div className="header">
        <div className="header-logo_box">
            <h1>FreshFood</h1>
        </div>
        <div className="header_actions">
            <Button variant="outline-light" className="action-button">Receipes</Button>
            <Button variant="outline-light" className="action-button">Contact Us</Button>
            <Link to="/signin" ><Button variant="light" className="action-button">Sign in</Button></Link>
            {/* <Button variant="light" className="action-button"><i class="bi bi-cart-fill"></i><Badge bg="success">3</Badge></Button> */}
        </div>
    </div>
)

export default Header;