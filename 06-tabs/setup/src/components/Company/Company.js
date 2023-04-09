import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FastFoward from '../SVGs/FastFoward';

function Company(props) {
  const { currentCompanyName } = props;
  const { title, company, dates, duties } = currentCompanyName;
  return (
    <article className="company-article">
      <h2 className="company-title">{ title }</h2>
      <p className="company-name">{ company }</p>
      <p className="company-dates">{ dates }</p>
      <ul className="company-dutie-list">
        {
          duties.map((dutie, index) => (
            <li key={ index } className="company-dutie-item">
              <FastFoward />
              <p className="company-dutie">{ dutie }</p>
            </li>
          ))
        }
      </ul>
    </article>
  );
}

Company.propTypes = {
  currentCompanyName: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    duties: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  ...state.apiReducer,
});

export default connect(mapStateToProps)(Company);
