import React from "react";
import { useDispatch } from "react-redux";
import { removeToCartRequest } from "../../../redux/action";
function CartItem(props) {
  const { cartItem } = props;
  const dispatch = useDispatch();
  function onRemoveToCart() {
    dispatch(removeToCartRequest(cartItem.product));
  }
  return (
    <tr>
      <td className="cart-remove">
        <a onClick={() => onRemoveToCart(cartItem.product)} className="remove">
          x
        </a>
      </td>
      <td className="cart-img">
        <img src={cartItem.product.image} className="img-fluid z-depth-0" />
      </td>
      <td className="cart-name">
        <a>
          <strong>{cartItem.product.title}</strong>
        </a>
      </td>
      <td className="cart-price">${cartItem.product.price}</td>
      <td className=" cart-quantity center-on-small-only">
        <div className="d-flex justify-content-center">
          <button>-</button>
          <span>{cartItem.quantity}</span>
          <button>+</button>
        </div>
      </td>
      <td className="cart-subtotal">
        ${cartItem.product.price * cartItem.quantity}
      </td>
    </tr>
  );
}

export default CartItem;
