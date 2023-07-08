import React from "react";

const ColorfullMessage = (props) => {
  const { color, message } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px",
  };

  return <p style={contentStyle}>{message}</p>;
};

export default ColorfullMessage;
