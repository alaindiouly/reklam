import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  // api sends user model back w/update credits
  const res = await axios.post('/api/stripe', token);
  // taking advantage of the authReducer to update the state
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post('/api/surveys', values);
  history.push('/surveys');
  // updating the number of credits via the auth reducer
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteSurvey = (id) => async (dispatch) => {
  const res = await axios.delete(`/api/surveys/${id}`);
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
