import React from 'react';
import './CardDetails.css'

// Product Info
const CardDetails = ({image, name,}) => {

  return (
    <div>
        <div className='details'>
        <img src={image} alt="" />
        <p> {name} </p>
          <i className="bi bi-trash-fill icon"></i>
          
        </div>
    </div>
  );
};

export default CardDetails;