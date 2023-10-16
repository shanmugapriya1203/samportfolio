import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navbar.css';
import nav1 from '../assets/img/nav1.svg';
import nav2 from '../assets/img/nav2.svg';
import nav3 from '../assets/img/nav3.png'


function NavigationBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };


  return (
    <>
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="#home">
            <h3 className="logo">SAM</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
          
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/shanmugapriya1203" target='_blank' >
                  <img src={nav1} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/shanmuga-priya-661935188/" target='_blank' >
                  <img src={nav2} alt="" />
                </a>
                <a href="https://leetcode.com/_sam1203/ " target='_blank'>
                  <img src={nav3} alt="" />
                </a>

             
              </div>
              <a href="#contact">
  <button className="vvd">
    <span>Contact</span>
  </button>
</a>

             
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
