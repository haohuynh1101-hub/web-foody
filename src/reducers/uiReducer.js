import * as uiTypes from "../constants/UITypes";
import initialState from "./../redux/initialState";
export default function uiReducer(state = initialState.ui, action) {
  switch (action.type) {
    case uiTypes.MSG_ADD_SUCCESS: {
      return { ...state, msgAddToCart: true };
    }
    case uiTypes.MSG_ADD_FAILED: {
      return { ...state, msgAddToCart: false };
    }
    default:
      return { ...state };
  }
}
