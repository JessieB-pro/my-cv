import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';

const menuItems = [
  { path: '/presentation', label: 'Présentation' },
  { path: '/skills', label: 'Compétences' },
  { path: '/trainings', label: 'Formations' },
  { path: '/assets', label: 'Atouts' },
  { path: '/experiences', label: 'Expériences' },
  { path: '/languages', label: 'Langues' },
  { path: '/hobbies', label: "Centres d'intérêt" }
];

export default function Menu() {

  const [expanded, setExpanded] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div id='menu'>
      <Navbar ref={menuRef} expanded={expanded} collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" as="ul">
              {menuItems.map(({ path, label }) => (
                <NavItem as='li' key={path}>
                  <NavLink className='custom-navbar' to={path} onClick={() => setExpanded(false)}>
                    {label}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}