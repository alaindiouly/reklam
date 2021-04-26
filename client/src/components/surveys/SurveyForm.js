import React from 'react';
// import { reducerasreduxForm } from 'redux-form';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

function SurveyForm({ handleSubmit, onSurveySubmit }) {
  function renderField() {
    return formFields.map(({ label, name }) => (
      <Field
        key={name}
        label={label}
        name={name}
        type='text'
        component={SurveyField}
      />
    ));
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSurveySubmit)}>
        {renderField()}
        <button className='teal btn-flat right white-text ' type='submit'>
          Next
          <i className='material-icons right'>done</i>
        </button>
        <Link
          to={'/surveys/'}
          className='red btn-flat left white-text '
          type='submit'
        >
          Cancel
          <i className='material-icons right'>done</i>
        </Link>
      </form>
    </div>
  );
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || '');
  formFields.forEach(({ name }) => {
    if (!values[name]) errors[name] = 'You must provide a value';
  });
  return errors;
}

export default reduxForm({
  validate,
  // adding form state to redux store
  // additional forms can be easily added
  form: 'surveyForm',
  // keep the form data to be used in next component
  destroyOnUnmount: false,
})(SurveyForm);
