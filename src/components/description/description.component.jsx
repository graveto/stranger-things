import React from "react";

function Description(props) {
  return (
    <div className="Description">
      <h2>{props.children}</h2>
    </div>
  );
}

export default Description;
