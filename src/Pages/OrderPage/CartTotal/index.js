import React from "react";
import "./CartTotal.css";
function CartTotal(props) {
  const { cartItems } = props;
  return (
    <div className="cartTotal">
      <h3>CART TOTALS</h3>
      <div className="d-flex w-25 justify-content-between ">
        <h5>Subtotal</h5>
        <h5>${onShowTotalMoney(cartItems)}</h5>
      </div>
      <div className="d-flex w-25 justify-content-between">
        <h5>Total</h5>
        <h5>${onShowTotalMoney(cartItems)}</h5>
      </div>
      <button>Proceed to checkout</button>
    </div>
  );
}
function onShowTotalMoney(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total = total + cartItems[i].product.price * cartItems[i].quantity;
  }
  return total;
}
export default CartTotal;
