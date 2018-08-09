import {
    PURCHASEAMOUNT_CHANGE,
    WISHFORM_SUBMIT
} from '../actions.js';

import * as Redux from 'redux';

export type AppState = {
    purchaseAmount : number;
    wishlist : WishlistItem[];
};

export type WishlistItem = {
    readonly itemName : string | '';
    readonly cost : number | 0;
    readonly quantity : number | 0;
};

const AppReducer : Redux.Reducer<AppState> = (
    state : AppState = {
        purchaseAmount : 0,
        wishlist : []
    }, 
    action) => {
    switch (action.type) {
        case PURCHASEAMOUNT_CHANGE: {
            const wishlist =
                state.wishlist.map(x => {
                    const quantity = Math.floor(action.value / x.cost as number);
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
            if (!action.form.itemName) {
                return state;
            }

            const quantity = Math.floor(state.purchaseAmount / 100);
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
            return state;
    }
};

export { AppReducer };