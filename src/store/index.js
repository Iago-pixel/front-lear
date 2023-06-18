import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import ReduxThunk from "redux-thunk";

import { ThemeMockReducer } from "./modules/theme_mock/reducer";

const reducers = combineReducers({
  ThemeMock: ThemeMockReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
