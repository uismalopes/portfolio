import React from "react";
import Title from "../../components/Title";
import { Row, Col } from "react-bootstrap";
import { FiBriefcase, FiBook } from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiVueDotJs,
} from "react-icons/si";

import data from "./data.json";
import CardResume from "../../components/CardResume";
import { useState } from "react";
import { useEffect } from "react";
import { PropsCareer, PropsCourses } from "../../interfaces";

const About = () => {
  const [careers, setCareers] = useState<PropsCareer[]>([]);
  const [courses, setCourses] = useState<PropsCourses[]>([]);

  useEffect(() => {
    setCareers(data.career);
    setCourses(data.courses);
  }, []);
  return (
    <div className="container fadeInUp">
      <div className="py-5">
        <Title title="resumo" />
        <div className="mt-5">
          <Row>
            <Col lg={6} className="mb-3">
              <h4 className="text-white font-weight-bold d-flex mb-3">
                <FiBriefcase /> <span className="ml-2">Carreira</span>
              </h4>
              {careers
                .sort((a, b) => {
                  return b.start - a.start;
                })
                .map((item, idx) => (
                  <CardResume
                    title={item.title}
                    company={item.company}
                    description={item.description}
                    start={item.start}
                    end={item.end}
                    current={item.current}
                    key={idx}
                  />
                ))}
            </Col>
            <Col lg={6}>
              <h4 className="text-white font-weight-bold d-flex mb-3">
                <FiBook /> <span className="ml-2">Formação</span>
              </h4>
              {courses
                .sort((a, b) => {
                  return b.start - a.start;
                })
                .map((item, idx) => (
                  <CardResume
                    title={item.title}
                    school={item.school}
                    description={item.description}
                    start={item.start}
                    end={item.end}
                    current={item.current}
                    key={idx}
                  />
                ))}
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <Title title="HABILIDADES" />
        </div>
        <div className="mt-5">
          <Row>
            <Col xs={6} lg={2}>
              <div className="text-white text-center mb-4">
                <SiHtml5 size={50} />
                <h4 className="mt-2 font-weight-bold">HTML</h4>
              </div>
            </Col>
            <Col xs={6} lg={2}>
              <div className="text-white text-center mb-4">
                <SiCss3 size={50} />
                <h4 className="mt-2 font-weight-bold">CSS</h4>
              </div>
            </Col>
            <Col xs={6} lg={2}>
              <div className="text-white text-center mb-4">
                <SiSass size={50} />
                <h4 className="mt-2 font-weight-bold">SASS</h4>
              </div>
            </Col>
            <Col xs={6} lg={2}>
              <div className="text-white text-center mb-4">
                <SiJavascript size={50} />
                <h4 className="mt-2 font-weight-bold">Javascript</h4>
              </div>
            </Col>
            <Col xs={6} lg={2}>
              <div className="text-white text-center mb-4">
                <SiReact size={50} />
                <h4 className="mt-2 font-weight-bold">React</h4>
              </div>
            </Col>
            <Col xs={6} lg={2}>
              <div className="text-white text-center mb-4">
                <SiVueDotJs size={50} />
                <h4 className="mt-2 font-weight-bold">Vue</h4>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
