import { createStore, compose } from 'redux';
import reducers from './reducers';
import middlewares from './middlewares';

const store = createStore(
    reducers,
    compose(middlewares)
);

export default store;