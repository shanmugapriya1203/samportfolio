import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import nav1 from'../assets/img/nav1.svg'
import nav2 from'../assets/img/nav2.svg'
import nav3 from'../assets/img/nav3.svg'
import '../styles/Navbar.css'

function NavigationBar() {
    const [activeLink,setActiveLink]= useState('home')
    const[scrolled,setScrolled]= useState(false)

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll",onScroll);
        return ()=>window.removeEventListener('scroll',onScroll)
    },[])
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value)
    }
  return (
   <>
   <Navbar expand="lg" className={scrolled ? "scrolled":''}>
      <Container>
        <Navbar.Brand href="#home">
        <h3 className='logo'>SAM</h3>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link' :'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink==='home' ? 'active navbar-link' :'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"  className={activeLink==='home' ? 'active navbar-link' :'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><img src={nav1} alt=''/></a>
                    <a href='#'><img src={nav2} alt=''/></a>
                    <a href='#'><img src={nav3} alt=''/></a>
                </div>
                <button className='vvd' onClick={()=> console.log('connect')}><span>Contact</span></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </>
  )
}

export default NavigationBar
