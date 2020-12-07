import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import MenuItems from "../Header/MenuItems.js";
function Footer(props) {
  return (
    <div className="footer">
      <div className="container footer__main">
        <h1>SUBSCRIBE FOR OUR NEWSLETTER</h1>
        <div className="footer__input">
          <div className="input">
            <input type="text" placeholder="Enter Your Email" />
            <div className="submit">
              <h2>Submit</h2>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__logo">
          <img src={Logo} />
        </div>
        <div className="footer__contact">
          <h2>
            0919799389.
            <span>8:00 am – 11:30 pm</span>
          </h2>
        </div>
        <div className="footer__social">
          <ul className="nav-menu">
            {MenuItems.map((menuItem) => {
              return (
                <li className="nav-item ">
                  <Link to={menuItem.url} className={menuItem.cName}>
                    {menuItem.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p>Copyright © 2020 ITB Club. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
