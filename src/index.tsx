import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

const logger = thestore => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', thestore.getState());
    return result;
  };

const store = createStore(
    reducers,
    applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}> 
      <App />
  </Provider>, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
