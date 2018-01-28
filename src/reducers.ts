import { combineReducers } from 'redux';

import appReducer from './appReducer';
import wishFormReducer from './wishFormReducer';

export default combineReducers({
    app: appReducer,
    wishForm: wishFormReducer
});