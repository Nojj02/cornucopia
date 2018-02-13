import {
    WISHFORM_FIELDCHANGE,
    WISHFORM_SUBMIT
} from './actions.js';

export type State = {
    readonly itemName : string | null;
    readonly cost : number | 0;
};

const wishFormReducer = (
    state : State = {
        itemName : '',
        cost : 0
    },
    action) : State => {
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

export default wishFormReducer;