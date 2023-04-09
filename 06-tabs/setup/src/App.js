import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setApiData, setCurrentCompany } from './redux/actions';
import NamesButtons from './components/NamesButtons/NamesButtons';
import Company from './components/Company/Company';

function App(props) {
  const { dispatch, apiData, currentCompany } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://course-api.com/react-tabs-project');
      const data = await response.json();
      dispatch(setApiData(data));
      dispatch(setCurrentCompany(data[0].company));
      setLoading(false);
    };
    fetchApi();
  }, [dispatch]);

  const company = apiData.find((element) => element.company === currentCompany);

  return (
    <main>
      {
        loading
          ? <p>Loading...</p>
          : (
            <section className="main-section">
              <NamesButtons />
              <Company currentCompanyName={ company } />
            </section>
          )
      }
    </main>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  apiData: PropTypes.arrayOf(PropTypes.shape).isRequired,
  currentCompany: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.apiReducer,
});

export default connect(mapStateToProps)(App);
