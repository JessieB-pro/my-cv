import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Menu() {

  const [expanded, setExpanded] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
      setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  
  return (
    <div id='menu'>
      <Navbar ref={menuRef} expanded={expanded} collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" as="ul">
              <NavItem as="li">
                <NavLink className="custom-navbar" to="/presentation" onClick={() => setExpanded(false)}>Présentation</NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink className="custom-navbar" to="/skills" onClick={() => setExpanded(false)}>Compétences</NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink className="custom-navbar" to="/formations" onClick={() => setExpanded(false)}>Formations</NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink className="custom-navbar" to="/experience" onClick={() => setExpanded(false)}>Expérience</NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink className="custom-navbar" to="/centresInteret" onClick={() => setExpanded(false)}>Centres d'intérêt</NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}