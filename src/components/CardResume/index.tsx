import React from "react";
import { ResumeCard } from "../../interfaces";

import "./style.css";

const CardResume = (props: ResumeCard) => {
  return (
    <div
      className={`card-resume text-white p-3 mb-2 ${
        props.current ? "active" : ""
      }`}
    >
      <span className="item-date">
        {props.start} - {!props.current ? props.end : "Atualmente"}
      </span>
      <strong className="d-block">{props.title}</strong>
      <span className="d-block mb-1">{props.company || props.school}</span>
      <p>{props.description}</p>
    </div>
  );
};

export default CardResume;
