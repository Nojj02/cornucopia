import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers.js';

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  };

const store = createStore(
    reducers,
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();