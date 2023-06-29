import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import ReduxThunk from "redux-thunk";

import { currentLessonReducer } from "./modules/current_lesson/reducer";

const reducers = combineReducers({
  currentLesson: currentLessonReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
