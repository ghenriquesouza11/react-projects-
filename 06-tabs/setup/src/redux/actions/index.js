export const SET_API_DATA = 'SET_API_DATA';
export const SET_CURRENT_COMPANY = 'SET_CURRENT_COMPANY';

export const setApiData = (data) => ({
  type: SET_API_DATA,
  payload: data,
});

export const setCurrentCompany = (currentCompany) => ({
  type: SET_CURRENT_COMPANY,
  payload: currentCompany,
});
