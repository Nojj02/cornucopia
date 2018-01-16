import { combineReducers } from 'redux';
import pluralize from 'pluralize';
import {
    PURCHASEAMOUNT_CHANGE
} from './actions.js';

const appReducer = (state = {
    purchaseAmount: 0,
    wishlist: [{
        quantity: 0,
        cost: 200,
        itemName: 'Coffee',
        itemNameDisplay: 'Coffees'
    }, {
        quantity: 0,
        cost: 60,
        itemName: 'Lunch',
        itemNameDisplay: 'Lunches'
    }, {
        quantity: 0,
        cost: 15000,
        itemName: 'Switch',
        itemNameDisplay: 'Switches'
    }]
}, action) => {
    switch (action.type) {
        case PURCHASEAMOUNT_CHANGE:
            const wishlist =
                state.wishlist.map(x => {
                    const quantity = Math.floor(action.value / x.cost, 2);
                    return Object.assign({}, x, {
                        quantity: quantity,
                        itemNameDisplay : pluralize(x.itemName, quantity)
                    });
                });
            return Object.assign({}, state, {
                purchaseAmount: action.value,
                wishlist: wishlist
            });
        default:
            return state
    }
}

export default appReducer;