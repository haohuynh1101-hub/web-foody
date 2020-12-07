import React, { Suspense } from "react";
import "./ContactPage.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CircularProgress from "@material-ui/core/CircularProgress";
function ContactPage(props) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <div className="contactPage">
        <div className="contactPage__slideshow">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://foodsided.com/files/image-exchange/2016/04/ie_21071.jpeg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.ishalleat.com.au/wp-content/uploads/2012/06/jamie-oliver2.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.pinimg.com/originals/6e/f8/4c/6ef84ce8f50fceeb08b56bcea193e922.jpg"
                  className="d-block w-100"
                  alt="..."
                />
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
        <div className="contactPage__branch ">
          <h2>Our branched</h2>
          <div className="container fade__in">
            <div className="row">
              <div className="col-md-6">
                <div className="branch__right">
                  <img src="https://s27363.pcdn.co/wp-content/uploads/2020/05/One-Day-in-Brooklyn.jpg.optimal.jpg" />
                  <h2>BROOKLYN</h2>
                  <h3>
                    St Johns Pl/Nostrand Av, Brooklyn, NY 11216, USA +1 215 456
                    15 15 brooklyn@vincent.com
                  </h3>
                  <button>
                    Get directions
                    <ChevronRightIcon />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="branch__right">
                  <img src="https://s27363.pcdn.co/wp-content/uploads/2020/05/One-Day-in-Brooklyn.jpg.optimal.jpg" />
                  <h2>QUEENS</h2>
                  <h3>
                    Hillside Av/162 St, Queens, NY, Queens, New York 11432, USA
                    +1 079 385 4690 queens@vincent.com
                  </h3>
                  <button>
                    Get directions
                    <ChevronRightIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default ContactPage;
