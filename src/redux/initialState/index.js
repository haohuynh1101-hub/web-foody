var data = JSON.parse(localStorage.getItem("CART"));

export default {
  foodMenus: {
    listFood: [],
    productDetail: {},
  },
  cart: {
    listCart: data ? data : [],
  },
  ui: {
    msgAddToCart: false,
  },
};
