import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Increment from "../Reducers/Increment";
import Decrement from "../Reducers/Decrement";
import media from "../Reducers/media";

const appReducer = combineReducers({
  Increment,
  Decrement,
  media, 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk))
);
