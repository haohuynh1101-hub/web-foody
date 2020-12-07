import React from "react";
import SlideImgItems from "./SlideImgItems";
import Slider from "react-animated-slider";
import horizontalCss from "react-animated-slider/build/horizontal.css";
import "./SlideShow.css";
import { Trans, useTranslation } from "react-i18next";

function SlideShow(props) {
  const { t, i18n } = useTranslation();
  const renderDetailSlide = () => {
    return (
      <div className="center">
        <div className="center__detail">
          <h1>{t("slideshow.title")}</h1>
          <p> {t("slideshow.subTitle")}</p>
          <hr />
          <h3>{t("slideshow.detail")}</h3>
          <div className="center__btn">
            <a className="btn__book">{t("slideshow.button.button1")}</a>
            <a className="btn__view">{t("slideshow.button.button2")}</a>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="slideshow">
      <div className="slide__bg">
        <div className="homepage__slider d-flex justify-content-lg-between">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://secure.breezepos.net/image/ODEyNTEwMjBfODUwXzg1MF8xXzJfX190cmFuc3BhcmVudA/81251020_1.png"
                  className="d-block w-25 h-25"
                  alt="..."
                />
                {renderDetailSlide()}
              </div>
              <div className="carousel-item">
                <img
                  src="https://secure.breezepos.net/image/ODEyNTExMTBfODUwXzg1MF8xXzJfX190cmFuc3BhcmVudA/81251110_1.png"
                  className="d-block w-25 h-25"
                  alt="..."
                />
                {renderDetailSlide()}
              </div>
              <div className="carousel-item">
                <img
                  src="https://secure.breezepos.net/image/ODEyNTEwOTFfMjIyXzIyMl8xXzJfX190cmFuc3BhcmVudA/81251091_1.png"
                  className="d-block w-25 h-25"
                  alt="..."
                />
                {renderDetailSlide()}
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
