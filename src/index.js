import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// Some changes
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

ReactDOM.render(
  <Provider store = {createStore(reducers, applyMiddleware(reduxThunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
