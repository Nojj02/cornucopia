import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const appReducer = (state = {
    purchaseAmount : 0
  }, action) => {
    switch (action.type) {
      case 'PURCHASEAMOUNT_CHANGE':
        return Object.assign({}, state, {
          purchaseAmount : action.value
        });
      default:
        return state
    }
  }

const store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
