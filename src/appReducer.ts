import {
    PURCHASEAMOUNT_CHANGE,
    WISHFORM_SUBMIT
} from './actions.js';

export type State = {
    purchaseAmount : number;
    wishlist : WishlistItem[];
};

export type WishlistItem = {
    readonly itemName : string | null;
    readonly cost : number | 0;
    readonly quantity : number | 0;
};

const appReducer = (
    state : State = {
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

export default appReducer;