import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(thunk.withExtraArgument(null));

export default middlewares;

