import React from 'react';

const List = (props) => {
  const { arrayList } = props;
  return (
    <section>
      {arrayList.map((element) => (
        <article key={element.id} className='person'>
          <img src={element.image} alt='person-img' />
          <div>
            <h4>{ element.name }</h4>
            <p>{`${element.age} years`}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default List;
