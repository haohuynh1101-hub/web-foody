import React from "react";
import "./Section3.css";
import Line from "../../../assets/images/separator_dark.png";
import Avartar from "../../../components/Avatar";
import PersonBoy from "../../../assets/images/testimonial_1-200x200.jpg";
import PersonGirl from "../../../assets/images/testimonial_2-200x200.jpg";
import { Trans, useTranslation } from "react-i18next";

function Section3(props) {
  const { t, i18n } = useTranslation();

  return (
    <div className="section3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 section3__left">
            <h2>{t("section3.title")}</h2>
            <h3>{t("section3.detail1")}</h3>
            <img src={Line} />
            <p>{t("section3.detail2")}</p>
            <p>{t("section3.detail3")}</p>
          </div>
          <div className="col-md-6 section3__right">
            <p>{t("section3.detail4")}</p>
            <Avartar
              image={PersonBoy}
              name="ADAM JEFFERSON"
              address="Lawyer, New York"
            />
            <p>{t("section3.detail5")}</p>
            <Avartar
              image={PersonGirl}
              name="SAMANTHA GREENBERG
              "
              address="Artist, Boston"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
