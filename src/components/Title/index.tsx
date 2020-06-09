import React from 'react';
import './style.css';

interface propsInterface {
    title: string
}

const Title = ({title}: propsInterface)=>{
    return(
        <h2 className="text-uppercase title-page mb-4 font-weight-bold text-white">{title}</h2>
    );
}

export default Title;