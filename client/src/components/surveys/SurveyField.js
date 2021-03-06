// renders a single label and input
import React from 'react';

function SurveyField({ input, label, meta: { error, touched } }) {
  // REMOVE
  // console.log(props)

  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className='red-text' style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
}

export default SurveyField;
