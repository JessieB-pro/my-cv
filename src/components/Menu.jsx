import { useState, useEffect, useRef } from 'react';
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';

const menuItems = [
  { href: '#section-homepage', label: 'Accueil' },
  { href: '#section-about', label: 'A propos' },
  { href: '#section-skills', label: 'Compétences' },
  { href: '#section-trainings', label: 'Formations' },
  { href: '#section-experiences', label: 'Expériences' },
  { href: '#section-assets', label: 'Atouts' },
  { href: '#section-languages', label: 'Langues' },
  { href: '#section-hobbies', label: "Centres d'intérêt" },
  { href: '#section-contact', label: "Contact" }
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
              {menuItems.map(({ href, label }) => (
                <NavItem as='li' key={href}>
                  <a
                    className='custom-navbar'
                    href={href}
                    onClick={() => setExpanded(false)}>
                    {label}
                  </a>
                </NavItem>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}