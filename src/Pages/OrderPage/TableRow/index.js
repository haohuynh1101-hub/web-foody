import React from "react";
import "./TableRow.css";
import CartItem from "../CartItem";
import CartTotal from "../CartTotal";
function TableRow(props) {
  const { cartItems } = props;
  return (
    <div className="tableRow">
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="cart-remove"></th>
            <th className="cart-img"></th>
            <th className="cart-product">Product</th>
            <th className="cart-price">Price</th>
            <th className="cart-quantity">Quantity</th>
            <th className="cart-subtotal">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem, index) => (
            <CartItem cartItem={cartItem} key={index} />
          ))}
        </tbody>
      </table>
      <div className="coupon-group">
        <div className="coupon">
          <input placeholder="Mã ưu đãi" type="text" />
          <button>Áp dụng</button>
        </div>
        <button>Cập nhật giỏ hàng</button>
      </div>
      <CartTotal cartItems={cartItems} />
    </div>
  );
}

export default TableRow;
