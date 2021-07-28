import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// Some more changes!
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

ReactDOM.render(
  <Provider store = {createStore(reducers, applyMiddleware(reduxThunk)  + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>,
  document.getElementById('root')
);
