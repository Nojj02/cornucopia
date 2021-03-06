import * as Redux from 'redux';

import { AppState, AppReducer } from './App/appReducer';

export type RootState = {
    app : AppState;
};

const combinedReducers : Redux.ReducersMapObject = {
    app: AppReducer
};

export default Redux.combineReducers<RootState>(combinedReducers);