import { combineReducers } from 'redux';

import {
    PURCHASEAMOUNT_CHANGE
} from './actions.js';

const appReducer = (state = {
    purchaseAmount : 0,
    wishItems : [{
        quantity : 0,
        cost : 200,
        itemName : 'Coffee'
    }, {
        quantity : 0,
        cost : 60,
        itemName : 'Lunch'
    }, {
        quantity : 0,
        cost : 15000,
        itemName : 'Switch'
    }]
  }, action) => {
    switch (action.type) {
      case PURCHASEAMOUNT_CHANGE:
        const wishItems = 
            state.wishItems.map(x => Object.assign({}, x, {
                quantity : action.value / x.cost
            }));
        return Object.assign({}, state, {
          purchaseAmount : action.value,
          wishItems : wishItems
        });
      default:
        return state
    }
  }

export default appReducer;