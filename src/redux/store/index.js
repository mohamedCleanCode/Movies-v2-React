import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { moviesReducer } from "../reducer/moviesReducer";
// combine all reducers
// const reducers = combineReducers(moviesReducer);

// create store
export const store = createStore(
  moviesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
