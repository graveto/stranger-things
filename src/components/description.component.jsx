import React from "react";

function Description(props) {
  return (
    <div className="Description">
      <h1>{props.children}</h1>
    </div>
  );
}

export default Description;
