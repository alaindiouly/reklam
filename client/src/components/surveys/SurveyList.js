import React, { useEffect } from 'react';
import * as actions from '../../actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function SurveyList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = actions.fetchSurveys();
    dispatch(action);
  }, [dispatch]);

  const surveys = useSelector((state) => state.surveys);

  function renderSurveys() {
    if (surveys.length === 0) {
      return (
        <div>
          <h4 className="center orange-text">No survey to show!</h4>
        </div>
      );
    }
    return surveys
      .reverse()
      .map(({ title, body, dateSent, subject, no, yes, _id }) => (
        <div className="card blue-grey darken-1" key={_id}>
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p>{body}</p>
            <p>{subject}</p>
            <p className="right">
              Sent on: {new Date(dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {yes}</a>
            <a>No: {no}</a>
            <i
              className="material-icons right white-text"
              onClick={() => dispatch(actions.deleteSurvey(_id))}
            >
              delete
            </i>
          </div>
        </div>
      ));
  }

  return <div>{renderSurveys()}</div>;
}

export default SurveyList;
