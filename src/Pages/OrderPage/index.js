import React from "react";
import "./OrderPage.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SearchIcon from "@material-ui/icons/Search";
import TableRow from "./TableRow";
import { useDispatch, useSelector } from "react-redux";
const renderOrderPageRight = (menuCategories) => {
  return (
    <div className="col-md-4">
      <div className="orderPage__search">
        <input placeholder="Search" />
        <SearchIcon className="iconSearch" />
      </div>
      <div className="detailPage__menuCategories">
        <h5>Menu Categories</h5>
        {menuCategories.map((categories) => (
          <div className="menucategories">
            <a href="">{categories.name}</a>
            <ChevronRightIcon className="menuCategories__iconRight" />
          </div>
        ))}
      </div>
      <div className="detailPage__tags">
        <h5>Tags</h5>
        <ul>
          {menuCategories.map((categories) => (
            <li className="menucategories__tag">
              <a href="">{categories.name}</a>
              <ChevronRightIcon className="menuCategories__iconRight" />
            </li>
          ))}
        </ul>
      </div>
      <div className="detailPage__featuredMenuItems"></div>
    </div>
  );
};
function OrderPage(props) {
  const menuCategories = useSelector((state) => state.foodReducer.listFood);
  const cartItems = useSelector((state) => state.cartReducer.listCart);
  return (
    <div className="orderPage">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <TableRow cartItems={cartItems} />
          </div>
          {renderOrderPageRight(menuCategories)}
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
