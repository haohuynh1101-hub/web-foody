import React, { Fragment } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function ProductRelate(props) {
  const { productDetail } = props;
  const productRelate = productDetail.splice(1, 4);
  return (
    <Fragment>
      {productRelate.map((relate, index) => (
        <div key={index} className="col-md-3">
          <div className="detailPage__productRelated">
            <img src={relate.image} />
            <h5>{relate.title}</h5>
            <p className="productRelated__itemDescription">
              Classic marinara sauce, authentic old-world pepperoni, all-natural
              Italian sausage, slow-roasted ham,
            </p>
            <p className="productRelated__itemPrice">${relate.price}</p>
            <div className="d-flex justify-content-lg-center">
              <button className="btn__realted">
                add to cart <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default ProductRelate;
