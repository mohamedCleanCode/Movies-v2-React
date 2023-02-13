import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { MoviesReducer } from "./reducers/movies-reducer";

export const store = createStore(MoviesReducer, applyMiddleware(thunk));
