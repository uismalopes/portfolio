import React, { useState, ChangeEvent, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../components/Title";

import works from "./data.json";
import CardWork from "../../components/CardWork";
import { PropsWork } from "../../interfaces";

import "./style.css";

const Works = () => {
  const data: PropsWork[] = works;
  const [filters, setFilters] = useState<string[]>([]);
  const [listItem, setListItem] = useState<PropsWork[]>(data);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    const label = document.querySelector(`[for=radio-${val}]`);
    const allLabel = document.querySelectorAll(".label-filter");

    for (let i = 0; i < allLabel.length; i++) {
      allLabel[i].classList.remove("active");
    }

    label?.classList.add("active");

    const filter = data.filter((item) => item.filter === val);
    if (val === "todos") return setListItem(data);
    return setListItem(filter);
  };

  useEffect(() => {
    let listFilters = data
      .map((res) => res.filter)
      .filter((item, index, array) => array.indexOf(item) === index);
    listFilters.unshift("todos");
    setFilters(listFilters);
  }, [data]);

  return (
    <Container className="fadeInUp">
      <div className="my-5">
        <Title title="trabalhos" />
        <div className="overflow-auto mb-3 mt-2" id="list-filters">
          <div className="float-right text-white overflow-hidden">
            {filters.map((res) => (
              <div className="d-inline mr-3" key={res}>
                <input
                  type="radio"
                  className="d-none"
                  name="radio-filter"
                  value={res}
                  id={`radio-${res}`}
                  onChange={handleChange}
                />
                <label
                  htmlFor={`radio-${res}`}
                  className={`text-uppercase label-filter mr-2 small py-2 ${
                    res === "todos" ? "active" : ""
                  }`}
                >
                  {res}
                </label>
              </div>
            ))}
          </div>
        </div>
        <Row>
          {listItem.map((item, idx) => (
            <Col lg={3} key={idx} className="fadeInUp">
              <CardWork
                title={item.title}
                subtitle={item.subtitle}
                link={item.link}
                image={item.image}
                description={item.description}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Works;
