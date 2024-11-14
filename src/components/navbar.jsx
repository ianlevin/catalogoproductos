import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
import carrito from '../img/carrito.png'

export const NavBar = () => {
  const { cart } = useContext(AppContext); 

  return (
    <Navbar bg="dark" data-bs-theme="dark" className='navbar'>
      <Nav className='nav'>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/contacto">Contacto</Link>
        <Link className="nav-link" to="/productos">Productos</Link>
      </Nav>

      <div className="cart-icon-container">
        <Link to="/cart">
          <img src={carrito} alt="Carrito" />
          <span>{cart.length}</span>
        </Link>
      </div>
    </Navbar>
  );
};
