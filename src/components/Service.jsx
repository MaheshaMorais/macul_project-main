import React from 'react';

function Service({ logo, text,topic }) {
  return (
    <div className="service">
      <img className='serviceimage' src={logo} alt={text} />
      <hr className='servicehr'/>
      <h2 className='serviceh2'> {topic}</h2>
      
      <p className='servicepg'>{text}</p>
    </div>
  );
}

export default Service;