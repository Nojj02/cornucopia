import { combineReducers } from 'redux';

import {
    PURCHASEAMOUNT_CHANGE
} from './actions.js';

const appReducer = (state = {
    purchaseAmount : 0,
    wishlist : [{
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
        const wishlist = 
            state.wishlist.map(x => Object.assign({}, x, {
                quantity : Math.round(action.value / x.cost, 2)
            }));
        return Object.assign({}, state, {
          purchaseAmount : action.value,
          wishlist : wishlist
        });
      default:
        return state
    }
  }

export default appReducer;