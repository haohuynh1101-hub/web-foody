import React from "react";
import "./FoodCard.css";
import CardImg from "../../assets/images/add_to_cart.png";
function FoodCard(props) {
  const { image, title, desciption, price } = props;
  return (
    <div className="foodCard">
      <div className="d-flex justify-content-center foodCard__img">
        <img className="cartImg" src={CardImg} />
        <img className="cardImg" src={image} />
      </div>
      <h2>{title}</h2>
      <p>{desciption}</p>
      <h3>${price}</h3>
    </div>
  );
}

export default FoodCard;
