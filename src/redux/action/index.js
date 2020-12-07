import * as foodTypes from "../../constants/FoodTypes";
import * as cartTypes from "../../constants/CartTypes";
import * as uiTypes from "../../constants/UITypes";
import * as api from "../../utils/apiCaller";

export const getFoodMenusSuccess = (data) => {
  return {
    type: foodTypes.GET_FOOD_SUCCESS,
    payload: { data },
  };
};
export const getFoodMenusFailed = (error) => {
  return {
    type: foodTypes.GET_FOOD_FAILED,
    payload: { error },
  };
};
export const getFoodMenusRequest = () => {
  return async (dispatch) => {
    try {
      const data = await api.getFoodMenus();
      dispatch(getFoodMenusSuccess(data));
    } catch (error) {
      await dispatch(getFoodMenusFailed(error));
    }
  };
};

export const getFoodMenusIdSuccess = (data) => {
  return {
    type: foodTypes.GET_FOODMENUS_ID_SUCCESS,
    payload: { data },
  };
};
export const getFoodMenusIdFailed = (error) => {
  return {
    type: foodTypes.GET_FOODMENUS_ID_FAILED,
    payload: { error },
  };
};
export const getFoodMenusIdRequest = (id) => {
  return async (dispatch) => {
    try {
      const data = await api.getFoodMenusId(id);
      dispatch(getFoodMenusIdSuccess(data));
    } catch (error) {
      await dispatch(getFoodMenusIdFailed(error));
    }
  };
};

//CART action

export const addToCartRequest = (product, quantity) => {
  return {
    type: cartTypes.ADD_TO_CART,
    payload: { product, quantity },
  };
};
export const removeToCartRequest = (product) => {
  return {
    type: cartTypes.REMOVE_TO_CART,
    payload: { product },
  };
};

//UI action
export const msgAddSuccess = () => {
  return {
    type: uiTypes.MSG_ADD_SUCCESS,
  };
};
export const msgAddFailed = () => {
  return {
    type: uiTypes.MSG_ADD_FAILED,
  };
};
