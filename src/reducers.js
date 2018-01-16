import { combineReducers } from 'redux';

import {
    PURCHASEAMOUNT_CHANGE
} from './actions.js';

const appReducer = (state = {
    purchaseAmount : 0
  }, action) => {
    switch (action.type) {
      case PURCHASEAMOUNT_CHANGE:
        return Object.assign({}, state, {
          purchaseAmount : action.value
        });
      default:
        return state
    }
  }

export default appReducer;