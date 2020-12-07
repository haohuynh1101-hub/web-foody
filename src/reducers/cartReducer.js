import * as cartTypes from "../constants/CartTypes";
import initialState from "../redux/initialState";

export default function cartReducer(state = initialState.cart, action) {
  let index = -1;
  let newListCart;
  switch (action.type) {
    case cartTypes.ADD_TO_CART: {
      var { product, quantity } = action.payload;
      newListCart = [...state.listCart];
      index = findProductInCart(newListCart, product);
      if (index !== -1) {
        newListCart[index].quantity += quantity;
      } else {
        newListCart.push({ product, quantity });
      }
      localStorage.setItem("CART", JSON.stringify(newListCart));
      return { ...state, listCart: newListCart };
    }
    case cartTypes.REMOVE_TO_CART: {
      var { product } = action.payload;
      newListCart = [...state.listCart];

      index = findProductInCart(newListCart, product);
      if (index !== -1) {
        newListCart.splice(index, 1);
      } else {
        console.log("error");
      }
      localStorage.setItem("CART", JSON.stringify(newListCart));
      return { ...state, listCart: newListCart };
    }
    default: {
      return { ...state };
    }
  }
}
var findProductInCart = (newListCart, product) => {
  var index = -1;
  if (newListCart.length > 0) {
    for (var i = 0; i < newListCart.length; i++) {
      if (newListCart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }

  return index;
};
