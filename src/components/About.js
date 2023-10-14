import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import developer from '../assets/img/female developer.svg'
import '../styles/About.css';

function About() {
    const [h2Text, setH2Text] = useState('');
    const [isTypingH2, setIsTypingH2] = useState(true);

    const h2InitialText = ' About Me';

    useEffect(() => {
        if (isTypingH2) {
            const typingInterval = setInterval(() => {
                if (h2Text.length < h2InitialText.length) {
                    setH2Text(h2InitialText.slice(0, h2Text.length + 1));
                } else {
                    setIsTypingH2(false);
                }
            }, 100);

            return () => clearInterval(typingInterval);
        }
    }, [isTypingH2, h2Text, h2InitialText]);

    return (
        <section className='about' id='about'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={5}>
                        <img src={developer} alt='About Img' />
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <h2>{h2Text}</h2>
                        <p>
                            Passionate MERN Stack Developer with an Electronics and Communication Engineering background. Driven by the art of crafting immersive web experiences, I embarked on the path of website development. With an eye for detail and a love for clean code, I bring creativity and functionality together to build seamless digital solutions. Let's transform ideas into captivating websites that leave a lasting impression.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
