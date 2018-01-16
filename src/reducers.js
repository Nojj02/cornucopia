import { combineReducers } from 'redux';
import pluralize from 'pluralize';
import {
    PURCHASEAMOUNT_CHANGE,
    WISHFORM_ITEMNAMECHANGE,
    WISHFORM_SUBMIT
} from './actions.js';

const app = (state = {
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
        case PURCHASEAMOUNT_CHANGE: {
            const wishlist =
                state.wishlist.map(x => {
                    const quantity = Math.floor(action.value / x.cost, 2);
                    return Object.assign({}, x, {
                        quantity: quantity,
                        itemNameDisplay: pluralize(x.itemName, quantity)
                    });
                });
            return Object.assign({}, state, {
                purchaseAmount: action.value,
                wishlist: wishlist
            });
        }
        case WISHFORM_SUBMIT: {
            const quantity = Math.floor(state.purchaseAmount / 100, 2);
            const wishlist =
                state.wishlist.concat([{
                    quantity: quantity,
                    cost: 100,
                    itemName: action.form.itemName,
                    itemNameDisplay: action.form.itemName
                }]);
            return Object.assign({}, state, {
                wishlist: wishlist
            });
        }
        default:
            return state
    }
}

const wishForm = (state = {
    itemName: ''
}, action) => {
    switch (action.type) {
        case WISHFORM_ITEMNAMECHANGE:
            return Object.assign({}, state, {
                itemName: action.value
            })
        case WISHFORM_SUBMIT:
            return Object.assign({}, state, {
                itemName: ''
            });
        default:
            return state
    }
}

export default combineReducers({
    app: app,
    wishForm: wishForm
});