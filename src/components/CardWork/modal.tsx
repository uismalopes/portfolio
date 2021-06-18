import React from "react";
import { Modal, Image } from "react-bootstrap";
import { PropsModal } from "../../interfaces";

const ModalWork = (props: PropsModal) => {
  const { dados } = props;
  const image = require(`../../assets/images/${dados.image}`);

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
      dialogClassName="fadeIn"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {dados.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={image} alt={dados.title} fluid />
        <p className="mt-3">{dados.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <a
          href={dados.link}
          rel="noopener noreferrer"
          target="_blank"
          className="btn"
          style={{ fontWeight: "bold", backgroundColor: "#26efa6" }}
        >
          Ver projeto
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWork;
