import React from "react";

const Bleed = props => {
  return (
    <div className="bleed">
      <div className="trim trim-tl" />
      <div className="trim trim-tr" />
      <div className="trim trim-br" />
      <div className="trim trim-bl" />
      {props.children}
    </div>
  );
};

export default Bleed;
