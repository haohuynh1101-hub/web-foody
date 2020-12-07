import React from "react";
import "./Section2.css";
import SectionItem from "./SectionItem";
function Section2(props) {
  return (
    <div className="section2">
      <div className="homepage__section2">
        <div className="container">
          <div className="row">
            {SectionItem.map((item) => {
              return (
                <div className="col-md-4 col-sm-6 ">
                  <div className="section__detail">
                    <div className="section__img">
                      <img src={item.image} />
                    </div>

                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
