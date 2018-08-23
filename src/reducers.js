
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// reducers
import loginReducer from './features/login/duck';

const appReducer = combineReducers({
    loginReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'APP_USER_LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;