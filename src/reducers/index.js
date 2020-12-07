import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import cartReducer from "./cartReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  foodReducer,
  cartReducer,
  uiReducer,
});
