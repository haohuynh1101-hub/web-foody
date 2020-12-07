import React, { Suspense, useEffect, useState } from "react";
import "./DetailPage.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useDispatch, useSelector } from "react-redux";
import { getFoodMenusIdRequest } from "./../../redux/action";

import Message from "./../../components/Messenger";
import _ from "lodash";
import ProductRelate from "./ProductRelate";
const FoodDetail = React.lazy(() => import("./FoodDetail"));

function DetailPage(props) {
  const productDetails = useSelector(
    (state) => state.foodReducer.productDetail
  );
  const productDetail = productDetails.submenu || [];
  const menuCategories = useSelector((state) => state.foodReducer.listFood);
  var urlProduct = props.match.url;
  var idProduct = urlProduct.split("-");
  const [foodDetail, setFoodDetail] = useState();
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getFoodMenusIdRequest(props.match.params.id));

    await setFoodDetail(
      productDetail.find((detail) => detail.id == idProduct[1])
    );
  }, [menuCategories]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className="detailPage">
        <Message />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <FoodDetail foodDetail={foodDetail} />
              </div>
            </div>
            <div className="col-md-4">
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
            <div className="row">
              <div className="related__product">
                <h2 className="related__title">Related Product</h2>
                <div className="row">
                  <ProductRelate productDetail={productDetail} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default DetailPage;
