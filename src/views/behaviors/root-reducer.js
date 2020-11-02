import { combineReducers } from 'redux';

import authReducer from '#behaviors/Auth/auth-reducer.js';

export default combineReducers({
  authReducer,
});
