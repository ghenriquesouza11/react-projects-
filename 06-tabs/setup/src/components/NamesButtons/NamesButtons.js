import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentCompany } from '../../redux/actions';

function NamesButtons(props) {
  const { apiData, dispatch, currentCompany } = props;
  return (
    <ul className="buttons-list">
      {
        apiData.map((element) => {
          const { id, company } = element;
          return (
            <li key={ id }>
              <button
                onClick={ () => dispatch(setCurrentCompany(company)) }
                className={ `company-btn ${company === currentCompany ? 'active' : ''}` }
              >
                { company }
              </button>
            </li>
          );
        })
      }
    </ul>
  );
}

NamesButtons.propTypes = {
  apiData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  dispatch: PropTypes.func.isRequired,
  currentCompany: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.apiReducer,
});

export default connect(mapStateToProps)(NamesButtons);
