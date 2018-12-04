import React from "react";

const Button = props => {
  return (
    <button className="default-button" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
