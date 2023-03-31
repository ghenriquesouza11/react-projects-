import React, { useState } from 'react';

const Tour = (props) => {
  const { imgSrc, name, info, id, rmLocation, price } = props;
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='location'>
      <img src={imgSrc} alt='location-img' className='location-img'/>
      <p className='price'>{ `$${ price }` }</p>
      <h3>{ name }</h3>
      <p className='info'>{
        readMore ? info : `${info.substring(0, 200)}...` 
        }</p>
      <button onClick={() => setReadMore(!readMore) } className='read-more-btn'>{readMore ? 'Show Less' : 'Read More'}</button>
      <button onClick={ () => rmLocation(id) } className='rm-btn'>Not Interested</button>
    </article>
  );
};

export default Tour;
