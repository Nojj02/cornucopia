import * as Redux from 'redux';

import {
    WISHFORM_FIELDCHANGE,
    WISHFORM_SUBMIT
} from './actions.js';

export type WishFormState = {
    readonly itemName : string;
    readonly cost : number | 0;
};

const WishFormReducer : Redux.Reducer<WishFormState> = (
    state : WishFormState = {
        itemName : '',
        cost : 0
    },
    action) : WishFormState => {
    switch (action.type) {
        case WISHFORM_FIELDCHANGE:
            const fieldChange = {};
            fieldChange[action.fieldName] = action.value;
            return Object.assign({}, state, fieldChange);
        case WISHFORM_SUBMIT:
            return Object.assign({}, state, {
                cost : 0,
                itemName: ''
            });
        default:
            return state;
    }
};

export {
    WishFormReducer
};