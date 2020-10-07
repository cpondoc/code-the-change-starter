import React from "react";
import "../index.css";

const Square = (props) => {
  return (
    <>
      <button className="squares" onClick={props.onClick}>
        <p class="moveText">{props.value}</p>
        </button>
    </>
  );
};

export default Square;