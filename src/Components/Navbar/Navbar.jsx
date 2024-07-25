import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../../Pages/Css/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ShopContext } from "../Context/ShopContext"; // Importera din ShopContext

const CustomNav = () => {
  const { getTotalCartItems } = useContext(ShopContext); // Hämta totala antalet varor i kundvagnen från context
  return (
    <Navbar  expand="md" className="navbar-dark bg-dark "  data-bs-theme="dark"  >
      <Container>
        <Navbar.Brand href="/Home" >AthletX-M </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto  " >
          <Link to="/Home" className="nav-link mx-5">Home</Link>
          <Link to="/Women" className="nav-link mx-5">Women</Link>
            <Link to="/men" className="nav-link mx-5">Men</Link>
            <Link to="/kids" className="nav-link mx-4">kids</Link>
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              <Badge bg="danger" className="cart-badge">{getTotalCartItems()}</Badge>
            
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;