import React from "react";
import "./HotSale.css";
import FoodItems from "./FoodItem";
function HotSale(props) {
  return (
    <div className="hotsale">
      <div className="container hotsale__title">
        <h1>hot sales</h1>
        <div className="row">
          {FoodItems.map((foodItem) => {
            return (
              <div className="col-md-3">
                <div className="hotsale__detail">
                  <div className="d-flex justify-content-center hotsale__img">
                    <img src={foodItem.image} />
                  </div>
                  <h2>{foodItem.title}</h2>
                  <p>{foodItem.desciption}</p>
                  <h3>{foodItem.price}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HotSale;
