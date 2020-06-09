import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';


import './style.css';
import Title from '../../components/Title';
import { Container, Col, Row } from 'react-bootstrap';

const Contact = ()=>{
    return(
        <Container className="fadeInUp" id="contact-page">
            <div className="mb-5">
                <Title title="contato" />
            </div>
            <Row>
                <Col lg={4}>
                    <a href="mailto:uisma@outlook.com" className="d-flex align-items-center mb-3">
                        <span className="icon rounded-circle d-flex align-items-center justify-content-center mr-4">
                            <FiMail />
                        </span>
                        <span className="h4 m-0">uisma@outlook.com</span>
                    </a>
                </Col>
                <Col lg={4}>
                    <a href="https://www.linkedin.com/in/uismalopes" rel="noopener noreferrer" target="_blank" className="d-flex align-items-center mb-3">
                        <span className="icon rounded-circle d-flex align-items-center justify-content-center mr-4">
                            <FiLinkedin />
                        </span>
                        <span className="h4 m-0">uismalopes</span>
                    </a>
                </Col>
                <Col lg={4}>
                    <a href="https://github.com/uismalopes" rel="noopener noreferrer" target="_blank" className="d-flex align-items-center mb-3">
                        <span className="icon rounded-circle d-flex align-items-center justify-content-center mr-4">
                            <FiGithub />
                        </span>
                        <span className="h4 m-0">@uismalopes</span>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;