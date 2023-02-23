import {legacy_createStore as reduxCreateStore} from 'redux';
import reducers from "./reducers/index";

const store = reduxCreateStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store; 