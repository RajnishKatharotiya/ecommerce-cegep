import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import { Link } from 'react-router-dom';

import './style.css';
import { useEffect, useState } from 'react';

const Header = ({ transparent = false }) => {
    const [username, setUsername] = useState('');
    const [cartItems, setCartItems] = useState(0);
    const [favItems, setFavItems] = useState(0);

    // Update header based on storage
    const handleStorageUpdate = () => {
        const user = localStorage.getItem('username');
        setUsername(user);
        if (user) {
            const favData = JSON.parse(localStorage.getItem("favItems")) || []
            const cartData = JSON.parse(localStorage.getItem("cartItems")) || []
            setFavItems(favData.length || 0)
            setCartItems(cartData.length || 0)
        }
    }

    // listen browser storage
    useEffect(() => {
        handleStorageUpdate();
        const initListener = setInterval(() => {
            handleStorageUpdate()
        }, 1000)
        return () => clearInterval(initListener);
    }, [])

    // Clear storage on logout
    const handleLogout = () => {
        localStorage.clear();
        handleStorageUpdate();
    }
    return (
        <div className={`header ${transparent ? '' : 'fixed-header'}`}>
            <div className="header-logo_box">
                <h1>FreshFood</h1>
            </div>
            <div className="header_actions">
                <Link to="/recipes" ><Button variant="outline-light" className="action-button">Recipes</Button></Link>
                <Link to="/contact-us" ><Button variant="outline-light" className="action-button">Contact Us</Button></Link>
                {
                    username ?
                        <>
                            <Button variant="outline-light" className="action-button" onClick={handleLogout}>{username}</Button>
                            <Link to="/my-favorites" ><Button variant="light" className="action-button"><i className="bi bi-heart-fill"></i><Badge bg="danger">{favItems}</Badge></Button></Link>
                            <Link to="/my-cart" ><Button variant="light" className="action-button"><i className="bi bi-cart-fill"></i><Badge bg="success">{cartItems}</Badge></Button></Link>
                        </> :
                        <>
                            <Link to="/register" ><Button variant="outline-light" className="action-button">Register</Button></Link>
                            <Link to="/login" ><Button variant="light" className="action-button">Login</Button></Link>
                        </>
                }
            </div>
        </div>
    )
}

export default Header;