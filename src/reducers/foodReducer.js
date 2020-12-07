import * as foodTypes from "../constants/FoodTypes";
import initialState from "../redux/initialState";

export default function foodReducer(state = initialState.foodMenus, action) {
  switch (action.type) {
    case foodTypes.GET_FOOD_SUCCESS: {
      const { data } = action.payload;
      return { ...state, listFood: data };
    }
    case foodTypes.GET_FOOD_FAILED: {
      const error = action.payload;
      return { ...state, listFood: error };
    }
    case foodTypes.GET_FOODMENUS_ID_SUCCESS: {
      const { data } = action.payload;
      return { ...state, productDetail: data };
    }
    case foodTypes.GET_FOODMENUS_ID_FAILED: {
      const error = action.payload;
      return { ...state, productDetail: error };
    }
    default: {
      return { ...state };
    }
  }
}
