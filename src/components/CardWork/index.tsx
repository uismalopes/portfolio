import React, { useState, MouseEvent } from "react";
import { PropsCardWork } from "../../interfaces";
import "./style.css";
import ModalWork from "./modal";

const CardWork = (props: PropsCardWork) => {
  const image = require(`../../assets/images/${props.image}`);
  const [modalShow, setModalShow] = useState(false);

  const handleModal = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setModalShow(true);
  };

  return (
    <>
      <div id="card-works" className="py-2 pl-3 mb-3">
        <a href="#modal" className="open-modal" onClick={handleModal}>
          <div className="img-thumb">
            <img src={image} alt={props.title} className="img-fluid" />
          </div>
          <strong className="text-center d-block mt-2 text-uppercase">
            {props.title}
          </strong>
          <span className="d-block text-uppercase subtitulo text-center">
            {props.subtitle}
          </span>
        </a>
      </div>
      <ModalWork
        dados={props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default CardWork;
