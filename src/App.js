import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Navbar";
import Footer from "./components/Footer/index.js";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import { connect } from "react-redux";
import { getFoodMenusRequest } from "./redux/action";
import ContactPage from "./Pages/ContactPage";
import OrderPage from "./Pages/OrderPage";

function App(props) {
  const { onFetchFoodMenus } = props;
  useEffect(() => {
    onFetchFoodMenus();
  }, []);
  const homePage = () => <HomePage />;
  const menuPage = ({ match }) => {
    return (
      <div>
        <div className="app__page">
          <h1>Discovery our menu</h1>
        </div>
        <MenuPage match={match} />
      </div>
    );
  };
  const detailPage = ({ match }) => {
    return (
      <div>
        <div className="app__page">
          <h1>Product detail</h1>
        </div>
        <DetailPage match={match} />
      </div>
    );
  };
  const contactPage = () => {
    return (
      <div>
        <div className="app__page">
          <h1>Contact us</h1>
        </div>
        <ContactPage />
      </div>
    );
  };
  const ordertPage = () => {
    return (
      <div>
        <div className="app__page">
          <h1>Cart</h1>
        </div>
        <OrderPage />
      </div>
    );
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={homePage} />
        <Route path="/menu" exact component={menuPage} />
        <Route path="/menu/:id/food-:id" exact="false" component={detailPage} />
        <Route path="/contact" exact="false" component={contactPage} />
        <Route path="/order" exact="false" component={ordertPage} />
        <Footer />
      </Router>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchFoodMenus: () => dispatch(getFoodMenusRequest()),
  };
};
export default connect(null, mapDispatchToProps)(App);
