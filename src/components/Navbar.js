import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css'; // Your CSS file with theme variables
import nav1 from '../assets/img/nav1.svg';
import nav2 from '../assets/img/nav2.svg';
import nav3 from '../assets/img/nav3.svg';

function NavigationBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [theme, setTheme] = useState('light');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Navbar expand="lg" className={theme === 'light' ? 'light-theme' : ''}>
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
              <a href="#">
                <img src={nav1} alt="" />
              </a>
              <a href="#">
                <img src={nav2} alt="" />
              </a>
              <a href="#">
                <img src={nav3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}>
              <span>Contact</span>
            </button>
            <button className="theme-toggle" onClick={toggleTheme}>
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="theme-icon" />
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
