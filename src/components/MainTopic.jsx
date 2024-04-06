import React from 'react';

function MainTopic({ title }) {
  // Splitting the title into words
  const words = title.split(' ');

  return (
    <h2 className='maintopic'>
     
      {words.map((word, index) => (
        <span key={index} style={{ color: index === 0 ? 'black' : '#C31E39' }}>
          {word}{' '}
        </span>
      ))}
    </h2>
  );
}
export default MainTopic;
