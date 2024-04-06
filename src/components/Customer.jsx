import React from 'react';

const Customer = ({ image, name, topic, text }) => {
  return (
    <div className="customer-review">
    
      <img src={image} alt={`${name} avatar`} className="customeravatar" />
      <div className="customercontent">
        <hr className='customerhr'/>
        <h3 className="customertopic">{topic}</h3>
        <p className="customertext">{text}</p>
      </div>
    </div>
  );
};

export default Customer;