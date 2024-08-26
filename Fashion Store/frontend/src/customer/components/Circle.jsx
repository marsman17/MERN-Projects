import React from "react";

const Circle = ({ color, opacity, className }) => {
  const circleStyle = {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    backgroundColor: color,
    opacity: opacity,
    display: "inline-block",
    border: "1px solid black",
  };

  return <div style={circleStyle} className={className}></div>;
};

export default Circle;
