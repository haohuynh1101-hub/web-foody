import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import MenuItems from "./MenuItems";
import Logo from "../../assets/images/logo.png";
import "./Navbar.css";
import { Trans, useTranslation } from "react-i18next";
import VietNamIcon from "../../assets/images/vietnam.png";
import UnitedIcon from "../../assets/images/united-states.png";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const lang = localStorage.getItem("lang") || "en";

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  function changeLang(language) {
    i18n.changeLanguage(language);
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <ClearIcon className="fas fa-times" />
            ) : (
              <MenuIcon className="fas fa-bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((menuItem) => {
              return (
                <li className="nav-item cool-link">
                  <Link
                    to={menuItem.url}
                    className={menuItem.cName}
                    onClick={closeMobileMenu}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div>
            <div className="btn-flag d-flex align-items-center justify-content-end">
              <button onClick={() => changeLang("en")}>
                <img src={UnitedIcon} alt="flag" />
              </button>
              <button onClick={() => changeLang("vn")}>
                <img src={VietNamIcon} alt="flag" />
              </button>
            </div>
            <Link to="/order" className="navbar__right">
              <div className="cart">
                <h2 className="price__cart">$0.00</h2>
                <p className="items__cart">0 items - View Cart</p>
              </div>
              <StorefrontOutlinedIcon className="icon__cart" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
