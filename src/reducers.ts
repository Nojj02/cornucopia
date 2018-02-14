import * as Redux from 'redux';

import { AppState, AppReducer } from './appReducer';
import { WishFormState, WishFormReducer } from './wishFormReducer';

export type RootState = {
    app : AppState;
    wishForm : WishFormState;
};

const combinedReducers : Redux.ReducersMapObject = {
    app: AppReducer,
    wishForm: WishFormReducer
};

export default Redux.combineReducers<RootState>(combinedReducers);