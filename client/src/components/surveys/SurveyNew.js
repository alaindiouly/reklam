// renders SurveyForm and SurveyFormReview
import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

function SurveyNew() {
  const [formState, setFormState] = useState(false);

  function renderForm() {
    if (formState) {
      return <SurveyFormReview onCancel={handleFormCancel} />;
    }
    return <SurveyForm onSurveySubmit={handleSubmitForm} />;
  }

  function handleSubmitForm() {
    return setFormState(true);
  }
  function handleFormCancel() {
    return setFormState(false);
  }

  return <div>{renderForm()}</div>;
}

export default reduxForm({
  // HINT: to reset form values when user navigates away from the component (i.e. component is unmounted)
  form: 'surveyForm',
})(SurveyNew);
