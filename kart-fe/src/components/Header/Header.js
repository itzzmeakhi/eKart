import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>eKart</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link><i className='fa-solid fa-cart-shopping'></i> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link><i className='fa-solid fa-user'></i> Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;