import React from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

import "./style.css";
import Title from "../../components/Title";
import { Container, Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="fadeInUp" id="contact-page">
      <div className="mb-5">
        <Title title="contato" />
      </div>
      <Row>
        <Col lg={4}>
          <a href="mailto:uisma@outlook.com" className="d-block mb-4">
            <Row className="text-white justify-content-center align-items-center">
              <Col lg={4}>
                <span className="icon rounded-circle d-flex align-items-center justify-content-center mb-2 mx-auto">
                  <FiMail />
                </span>
              </Col>
              <Col>
                <span className="h4 m-0 text-center text-lg-left d-block">
                  uisma@outlook.com
                </span>
              </Col>
            </Row>
          </a>
        </Col>
        <Col lg={4}>
          <a
            href="https://www.linkedin.com/in/uismalopes"
            rel="noopener noreferrer"
            target="_blank"
            className="d-block mb-4"
          >
            <Row className="text-white justify-content-center align-items-center">
              <Col lg={4}>
                <span className="icon rounded-circle d-flex align-items-center justify-content-center mb-2 mx-auto">
                  <FiLinkedin />
                </span>
              </Col>
              <Col>
                <span className="h4 m-0 text-center text-lg-left d-block">
                  uismalopes
                </span>
              </Col>
            </Row>
          </a>
        </Col>
        <Col lg={4}>
          <a
            href="https://github.com/uismalopes"
            rel="noopener noreferrer"
            target="_blank"
            className="d-block mb-4"
          >
            <Row className="text-white justify-content-center align-items-center">
              <Col lg={4}>
                <span className="icon rounded-circle d-flex align-items-center justify-content-center mb-2 mx-auto">
                  <FiGithub />
                </span>
              </Col>
              <Col>
                <span className="h4 m-0 text-center text-lg-left d-block">
                  @uismalopes
                </span>
              </Col>
            </Row>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
