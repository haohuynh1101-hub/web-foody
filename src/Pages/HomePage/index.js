import React from "react";
import { useSelector } from "react-redux";
import "./HomePage.css";
import HotSale from "./HotSale";
import Section2 from "./Section2";
import Section3 from "./Section3";
import SlideShow from "./SlideShow";
function HomePage(props) {
  const foodItems = useSelector((state) => state.foodReducer.listFood);
  return (
    <div className="homepage">
      <SlideShow />
      <Section2 />
      <HotSale foodItems={foodItems} />
      <Section3 />
    </div>
  );
}

export default HomePage;
