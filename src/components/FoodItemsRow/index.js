import React from "react";
import "./FoodItemsRow.css";
import FoodCard from "../FoodCard";
import { Link } from "react-router-dom";
function FoodItemsRow(props) {
  const { menus } = props;
  const submenus = menus.submenu;
  return (
    <div className="row fade__in">
      {submenus.map((item, index) => (
        <Link to={`/menu/${menus.id}/food-${item.id}`}>
          <div className="col-md-3 col-sm-6">
            <div className="menuPage__foodCard">
              <FoodCard
                key={index}
                image={item.image}
                title={item.title}
                desciption="Classic marinara sauce, authentic old-world pepperoni, all-natural Ita"
                price={item.price}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FoodItemsRow;
