import React from 'react';
import Title from '../../components/Title';
import { Row, Col } from 'react-bootstrap';
import { FiBriefcase, FiBook, FiCode, FiMonitor } from 'react-icons/fi';

import data from './data.json';
import CardResume from '../../components/CardResume';

const About = ()=>{
    const { carreira, formacao, dev, design } = data;

    return(
        <div className="container fadeInUp">
            <div className="py-5">
                <Title title="resumo" />
                <div className="mt-5">
                    <Row>
                        <Col lg={6}>
                            <h4 className="text-white font-weight-bold d-flex mb-3">
                                <FiBriefcase /> <span className="ml-2">Carreira</span>
                            </h4>
                            {
                                carreira.sort((a, b)=>{
                                    return b.inicio - a.inicio;
                                }).map((item,idx)=>(
                                    <CardResume 
                                    titulo={item.titulo}
                                    subtitulo={item.subtitulo}
                                    descricao={item.descricao}
                                    inicio={item.inicio}
                                    fim={item.fim}
                                    finalizado={item.finalizado}
                                    key={idx}
                                    />
                                ))
                            }
                        </Col>
                        <Col lg={6}>
                            <h4 className="text-white font-weight-bold d-flex mb-3">
                                <FiBook /> <span className="ml-2">Formação</span>
                            </h4>
                            {
                                formacao.sort((a, b)=>{
                                    return b.inicio - a.inicio;
                                }).map((item,idx)=>(
                                    <CardResume 
                                    titulo={item.titulo}
                                    subtitulo={item.subtitulo}
                                    descricao={item.descricao}
                                    inicio={item.inicio}
                                    fim={item.fim}
                                    finalizado={item.finalizado}
                                    key={idx}
                                    />
                                ))
                            }
                        </Col>
                    </Row>
                </div>
                <div className="mt-4">
                    <Title title="HABILIDADES" />
                </div>
                <div className="mt-3">
                    <Row>
                        <Col lg={6}>
                            <h4 className="text-white font-weight-bold d-flex mb-3">
                                <FiCode /> <span className="ml-2">Desenvolvimento</span>
                            </h4>
                            <ul className="text-white">
                            {
                                dev.map((item,idx)=>(
                                    <li key={idx}>{item}</li>
                                ))
                            }
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <h4 className="text-white font-weight-bold d-flex mb-3">
                                <FiMonitor /> <span className="ml-2">Design</span>
                            </h4>
                            <ul className="text-white">
                            {
                                design.map((item,idx)=>(
                                    <li key={idx}>{item}</li>
                                ))
                            }
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default About;