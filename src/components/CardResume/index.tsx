import React from 'react';

import './style.css';

interface resumeInterface {
    inicio: number,
    fim?:number,
    finalizado?: boolean,
    titulo: string,
    subtitulo: string,
    descricao: string
}

const CardResume = (props: resumeInterface) =>{
    return(
        <div className={`card-resume text-white p-3 mb-2 ${ props.finalizado ? '' : 'active' }`}>
            <span className="item-date">
                {props.inicio} - { props.finalizado ? props.fim : "Atualmente" }
            </span>
            <strong className="d-block">{ props.titulo }</strong>
            <span className="d-block mb-1">{props.subtitulo}</span>
            <p>{props.descricao}</p>
        </div>
    );
}

export default CardResume;