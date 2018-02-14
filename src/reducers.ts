import * as Redux from 'redux';

import appReducer from './appReducer';
import { WishFormState, WishFormReducer } from './wishFormReducer';

export type RootState = {
    app : any;
    wishForm : WishFormState;
};

const combinedReducers : Redux.ReducersMapObject = {
    app: appReducer,
    wishForm: WishFormReducer
};

export default Redux.combineReducers<RootState>(combinedReducers);