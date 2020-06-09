import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Title from '../../components/Title';

import { Link } from 'react-router-dom';

import imagePerfil from '../../assets/images/perfil.jpg';

const Home = ()=>{
    return(
        <Container className="fadeInUp my-5">
            <Row>
                <Col lg={7} className="text-white text-center text-lg-left">
                    <div className="d-inline-block text-center mb-5">
                        <Image src={imagePerfil} alt="Uisma Lopes" className="img-fluid rounded-circle" />
                        <h1 className="font-weight-bold mt-3">Uisma Lopes</h1>
                        <p>
                            Desenvolvedor Front-end
                        </p>
                    </div>
                </Col>
                <Col className="text-white">
                    <Title title="sobre" />
                    <p>
                        Trabalho na área de Desenvolvimento Front-End desde 2015 e estou cursando Ciência da Computação.
                    </p>
                    <p>
                        Minha experiência profissional como front-end abrange as principais linguagens de programação web, como HTML, CSS e JavaScript. Tais experiências me propiciaram a familiaridade com tecnologias como JQuery, SASS, Angular, React, vue e etc.
                    </p>
                    <Link to="/about" className="btn btn-outline-info">
                        Ver perfil completo
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;