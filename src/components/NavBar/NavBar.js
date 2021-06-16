import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, Nav } from 'react-bootstrap';
class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>E-Commerce</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#aboutus'>About us</Nav.Link>
            <Nav.Link href='#pricing'>Services</Nav.Link>
            <Nav.Link href='#contactus'>Contact us</Nav.Link>
          </Nav>
          <div inline>
            <CartWidget />
          </div>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
