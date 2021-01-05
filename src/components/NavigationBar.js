import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #0e56aa;}
  .navbar-light .navbar-nav .nav-link, .navbar-light .navbar-nav{
    color: white;
    width: 100%;
    justify-content: space-around;
  }

  



`;




export const NavigationBar = () => (
  <Styles>
    <Navbar >
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav >
          <Nav.Item><Nav.Link href="/">QUEM SOMOS</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">PORTAL DE ACESSO</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">FALE CONOSCO</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)