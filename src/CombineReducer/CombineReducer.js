import Increment from "../Reducers/Increment";
import Decrement from "../Reducers/Decrement";
import media from "../Reducers/media";
import { combineReducers } from "redux";

const CombineReducer = combineReducers({
  Increment,
  Decrement,
  media,
});
export default CombineReducer;
