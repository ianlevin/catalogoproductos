// src/components/navbar.jsx
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../App.css';

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className='navbar'>
      <Nav className='nav'>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/contacto">Contacto</Link>
        <Link className="nav-link" to="/productos">Productos</Link>
      </Nav>
    </Navbar>
  );
}
