import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'; 
import carrito from '../img/carrito.png'

export const NavBar = () => {
  const { cart } = useContext(AppContext); 
  const [hover, setHover] = useState(false);

  const total = cart.reduce((acc, producto) => acc + producto.price, 0);

  return (
    <Navbar bg="dark" data-bs-theme="dark" className='navbar'>
      <Nav className='nav'>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/contacto">Contacto</Link>
        <Link className="nav-link" to="/productos">Productos</Link>
      </Nav>

      <div
        className="cart-icon-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link to="/cart">
          <img src={carrito} alt="Carrito" />
          <span>{cart.length}</span>
        </Link>

        {hover && cart.length > 0 && (
          <div className="cart-dropdown">
            <div className="cart-items">
              {cart.map((producto) => (
                <div key={producto.id} className="cart-item">
                  <p>{producto.title}</p>
                  <p>${producto.price}</p>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <strong>Subtotal: ${total.toFixed(2)}</strong>
            </div>
          </div>
        )}
      </div>
    </Navbar>
  );
};
