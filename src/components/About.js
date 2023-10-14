import React from 'react'
import developer from '../assets/img/female developer.svg'
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/About.css'

function About() {
  return (

      <section className='about' id='about'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={5}>
                        <img src={developer} alt='About Img' />
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <h2> About Me</h2>
                        <p>
                            Passionate MERN Stack Developer with an Electronics and Communication Engineering background. Driven by the art of crafting immersive web experiences, I embarked on the path of website development. With an eye for detail and a love for clean code, I bring creativity and functionality together to build seamless digital solutions. Let's transform ideas into captivating websites that leave a lasting impression.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}










export default About
