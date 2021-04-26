import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

function App() {
  const dispatch = useDispatch();
  // fetching the USER the instant the App loads
  useEffect(() => {
    const action = actions.fetchUser();
    dispatch(action);
  }, [dispatch]);

  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/surveys' component={Dashboard} />
        <Route path='/surveys/new' component={SurveyNew} />
      </Switch>
    </div>
  );
}

export default App;
