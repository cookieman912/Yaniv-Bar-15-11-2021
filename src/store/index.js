import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { weatherReducer } from "./reducers/weatherReducer";
import { favoriteReducer } from "./reducers/favoriteReducer";

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combining reducers into one
const rootReducer = combineReducers({
  weatherModule: weatherReducer,
  favoriteModule: favoriteReducer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
