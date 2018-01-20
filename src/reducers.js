import { combineReducers } from 'redux';
import pluralize from 'pluralize';
import {
    PURCHASEAMOUNT_CHANGE,
    WISHFORM_FIELDCHANGE,
    WISHFORM_SUBMIT
} from './actions.js';

const app = (state = {
    purchaseAmount: 0,
    wishlist: []
}, action) => {
    switch (action.type) {
        case PURCHASEAMOUNT_CHANGE: {
            const wishlist =
                state.wishlist.map(x => {
                    const quantity = Math.floor(action.value / x.cost, 2);
                    return Object.assign({}, x, {
                        quantity: quantity
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
                    cost: action.form.cost,
                    itemName: action.form.itemName
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
    itemName : '',
    cost : 0
}, action) => {
    switch (action.type) {
        case WISHFORM_FIELDCHANGE:
            const fieldChange = {};
            fieldChange[action.fieldName] = action.value;
            return Object.assign({}, state, fieldChange)
        case WISHFORM_SUBMIT:
            return Object.assign({}, state, {
                cost : 0,
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