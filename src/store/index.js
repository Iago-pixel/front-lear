import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import ReduxThunk from "redux-thunk";

const reducers = combineReducers({});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
