import React, { useState } from 'react';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';
import ChevronRight from './ChevronRight';
import ChevronLeft from './ChevronLeft';
import Quote from './Quote';

function Review() {
  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    if (index === people.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((prevState) => (prevState + 1));
  };
  const decreaseIndex = () => {
    if (index === 0) {
      setIndex(people.length - 1);
      return;
    }
    setIndex((prevState) => (prevState - 1));
  };
  const randomIndex = () => {
    const param = 4;
    let randomNumber = Math.floor(Math.random() * param);
    while (randomNumber === index) {
      randomNumber = Math.floor(Math.random() * param);
    }
    setIndex(randomNumber);
  };

  return (
    <article className="person">
      <Quote />
      <img
        src={ people[index].image }
        alt={ people[index].name }
        className="person-img"
      />
      <h3 className="person-name">{ people[index].name }</h3>
      <p className="person-job">
        {people[index].job}
      </p>
      <p className="person-info">
        {people[index].text}
      </p>
      <div>
        <button onClick={ () => decreaseIndex() } className="change-btn">
          <ChevronLeft />
        </button>
        <button onClick={ () => increaseIndex() } className="change-btn">
          <ChevronRight />
        </button>
      </div>
      <button
        onClick={ () => randomIndex() }
        className="change-btn-random"
      >
        Surprise Me
      </button>
    </article>
  );
}

export default Review;
