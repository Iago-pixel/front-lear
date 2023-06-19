import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import ReduxThunk from "redux-thunk";

import { themeMockReducer } from "./modules/theme_mock/reducer";

const reducers = combineReducers({
  themeMock: themeMockReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
