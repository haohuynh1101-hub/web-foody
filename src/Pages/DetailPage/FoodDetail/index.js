import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addToCartRequest, msgAddSuccess } from "./../../../redux/action";
import CircularProgress from "@material-ui/core/CircularProgress";
function FoodDetail(props) {
  const { foodDetail } = props;
  const dispatch = useDispatch();
  async function onAddToCart() {
    await dispatch(addToCartRequest(foodDetail, 1));
    await dispatch(msgAddSuccess());
  }
  if (foodDetail === undefined)
    return (
      <div>
        <CircularProgress />
      </div>
    );
  else
    return (
      <Fragment>
        <div className="col-md-6">
          <img className="img__detail" src={foodDetail.image} alt="image" />
        </div>
        <div className="col-md-6">
          <div className="detailPage__itemDetail">
            <h2>{foodDetail.title}</h2>
            <p className="detailPage__itemPrice">${foodDetail.price}</p>
            <p className="detailPage__itemDescription">
              Classic marinara sauce, authentic old-world pepperoni, all-natural
              Italian sausage, slow-roasted ham, hardwood smoked bacon, seasoned
              pork and beef. Best an our Hand Tossed crust. With more than 50
              years of experience under our belts, we understand how to best
              serve our customers through tried and true service principles.
              Instead of following trends, we set them. We create food we’re
              proud to serve and deliver it fast, with a smile.
            </p>
            <div className="detailPage__btn">
              <span>1</span>
              <button
                onClick={() => {
                  onAddToCart(foodDetail);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default FoodDetail;
