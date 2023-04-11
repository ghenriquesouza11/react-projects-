import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from '../../data';
import Person from '../Person/Person';
import PreviousBtn from '../SVGs/PreviousBtn';
import NextBtn from '../SVGs/NextBtn';
import { nextPerson, previousPerson, firstPerson, lastPerson } from '../../redux/actions';

function Persons(props) {
  const { dispatch, currentPerson } = props;

  const setNextPerson = () => {
    if (currentPerson === data.length - 1) {
      dispatch(firstPerson(0));
    } else {
      dispatch(nextPerson(currentPerson + 1));
    }
  };

  const setPreviousPerson = () => {
    if (currentPerson === 0) {
      dispatch(lastPerson(data.length - 1));
    } else {
      dispatch(previousPerson(currentPerson - 1));
    }
  };

  useEffect(() => {
    const sliderParam = 3000;
    const slider = setInterval(() => { setNextPerson(); }, sliderParam);
    return () => clearInterval(slider);
  }, [currentPerson]);

  return (
    <section className="persons">
      <button
        className="change-person-btn"
        onClick={ () => setPreviousPerson() }
      >
        <span>
          <PreviousBtn />
        </span>
      </button>
      {
        data.map((person, index) => {
          const { id, image, name, title, quote } = person;
          return (
            <Person
              key={ id }
              image={ image }
              name={ name }
              title={ title }
              quote={ quote }
              index={ index }
            />
          );
        })
      }
      <button
        className="change-person-btn"
        onClick={ () => setNextPerson() }
      >
        <span>
          <NextBtn />
        </span>
      </button>
    </section>
  );
}

Persons.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentPerson: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.setCurrentPerson,
});

export default connect(mapStateToProps)(Persons);
