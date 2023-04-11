import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comma from '../SVGs/Comma';
import data from '../../data';

function Person(props) {
  const { image, name, title, quote, index, currentPerson } = props;

  const CurrentPersonArticle = index === currentPerson;

  const previousPersonArticle = index === currentPerson - 1
    || (currentPerson === 0 && index === data.length - 1);

  return (
    <article
      className={
        `person-article next-person 
        ${CurrentPersonArticle
      ? 'current-person'
      : ''}
      ${previousPersonArticle
      ? 'previous-person'
      : ''}`
      }
    >
      <img src={ image } alt={ `${name}-img` } className="person-img" />
      <h3 className="person-name">{ name }</h3>
      <h4 className="person-title">{ title }</h4>
      <p className="person-quote">{ quote }</p>
      <Comma />
    </article>
  );
}

Person.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  currentPerson: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.setCurrentPerson,
});

export default connect(mapStateToProps)(Person);
