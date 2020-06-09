import React, { useState, MouseEvent } from 'react';
import './style.css';
import { Modal, Image } from 'react-bootstrap';

interface propsWork {
    titulo: string,
    subtitulo: string,
    link: string,
    image: string,
    descricao: string
}

interface propsModal {
    dados: propsWork,
    show?: boolean,
    onHide: any
}

const ModalWork = (props: propsModal)=>{
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
                    { dados.titulo }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={image} alt={dados.titulo} fluid />
                <p className="mt-3">
                    {dados.descricao}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <a href={ dados.link } 
                rel="noopener noreferrer" 
                target="_blank" 
                className="btn" 
                style={{ fontWeight: "bold", backgroundColor: "#26efa6" }}>
                    Ver projeto
                </a>
            </Modal.Footer>
        </Modal>
    );
};

const CardWork = (props: propsWork) =>{
    const image = require(`../../assets/images/${props.image}`);
    const [modalShow, setModalShow] = useState(false);

    const handleModal = (event: MouseEvent<HTMLElement>)=>{
        event.preventDefault();
        setModalShow(true);
    }

    return(
        <>
        <div id="card-works" className="py-2 pl-3 mb-3">
            <a href="#modal" className="open-modal" onClick={handleModal}>
                <div className="img-thumb">
                    <img src={image} alt={props.titulo} className="img-fluid" />
                </div>
                <strong className="text-center d-block mt-2 text-uppercase">{ props.titulo }</strong>
                <span className="d-block text-uppercase subtitulo text-center">{ props.subtitulo }</span>
            </a>
        </div>
        <ModalWork 
        dados={props}
        show={modalShow}
        onHide={()=> setModalShow(false)}
        />
        </>
    );
}

export default CardWork;