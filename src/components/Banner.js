import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import header from '../assets/img/header-banner.svg';
import resumePDF from '../assets/sam.pdf'
import bannerData from '../data/Constants.js';
import '../styles/Banner.css';

function Banner() {
    const { toChange, name, description } = bannerData;
    const [activeIndex, setActiveIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [characterIndex, setCharacterIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % toChange.length);
            setCharacterIndex(0);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const targetText = toChange[activeIndex];

        if (characterIndex < targetText.length) {
            const typingInterval = setInterval(() => {
                setTypedText(targetText.slice(0, characterIndex + 1));
                setCharacterIndex((prevIndex) => prevIndex + 1);
            }, 100);

            return () => clearInterval(typingInterval);
        }
    }, [activeIndex, characterIndex]);

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Hey! there</span>
                        <p className="name">This is {name}</p>
                        <h1>
                            {`I am a `}
                            <span className='wrap'>
                                {typedText}
                            </span>
                        </h1>
                        <p>{description}</p>
                       
                            <button>My Resume <ArrowRightCircle
    size={25}
    onClick={() => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Shanmuga Priya.pdf';
        link.click();
    }}
/></button>
                      
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={header} alt='Header Img' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
