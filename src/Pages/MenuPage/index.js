import React, { useState } from "react";
import "./MenuPage.css";
import Section2 from "../HomePage/Section2";
import { useSelector } from "react-redux";
import FoodItemsRow from "../../components/FoodItemsRow";
function MenuPage(props) {
  const foodMenus = useSelector((state) => state.foodReducer.listFood);
  const [idMenu, setIdMenu] = useState(0);
  console.log(idMenu, "idmenu");
  function changeMenu(id) {
    setIdMenu(id);
  }

  return (
    <div className="menuPage">
      <div className="container">
        <div className="menupage__menu">
          {foodMenus.map((menus) => (
            <h2 onClick={() => changeMenu(menus.id)}>{menus.name}</h2>
          ))}
        </div>
        {foodMenus.map((menus, index) => {
          if (menus.id === idMenu) {
            return <FoodItemsRow menus={menus} key={index} />;
          }
        })}
      </div>
      <Section2 />
    </div>
  );
}

export default MenuPage;
