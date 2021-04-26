// Webpack recognizes it's a node module as no relative path is given
// no need to assign it to a variable as it is not used in the javascript code
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

//REMOVE
// sending axios to window object
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//REMOVE
//console.log('store: ', store.getState());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

//REMOVE
// console.log('stipe key is: ', process.env.REACT_APP_STRIPE_KEY);
// console.log('Node Env key is: ', process.env.NODE_ENV);

// ReactDOM.render(<App />, document.querySelector('#root'));
