import React from "react";
import Avatar from "@material-ui/core/Avatar";

function Person(props) {
  const { image, name, address } = props;
  return (
    <div className="d-flex align-items-center">
      <Avatar src={image} />
      <div className="ml-2">
        <h4>{name}</h4>
        <p>{address}</p>
      </div>
    </div>
  );
}

export default Person;
