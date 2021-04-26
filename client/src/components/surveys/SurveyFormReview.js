import React from 'react';
import { useSelector } from 'react-redux';
import formFields from './formFields';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../actions';

function SurveyFormReview({ onCancel, history }) {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.form.surveyForm.values);
  console.log(values);

  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label> {label} </label>
        <div>{values[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h1>Please confirm your entries</h1>
      <div>{reviewFields}</div>
      <button
        className='yellow darken-3 white-text  btn-flat'
        onClick={onCancel}
      >
        BACK
      </button>
      <button
        className='green bnt-flat right white-text'
        // onClick={dispatch((values) => actions.submitSurvey(values))}
        onClick={() => dispatch(actions.submitSurvey(values, history))}
      >
        SEND SURVEY
        <i className='material-icons right'>email</i>
      </button>
    </div>
  );
}

// export default SurveyFormReview;
export default withRouter(SurveyFormReview);
