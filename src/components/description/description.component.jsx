import React from "react";
import "./description.styles.css"

function Description(props) {
  return (
    <div className="Description">
      <h3>
        Where do you think all the <strong><em>&laquo;strangeness&raquo;</em></strong> came from? Hawkins, IN? Bermuda Triangle? Try Durham, NC. {props.children}
      </h3>
      <a href="https://www.rtp.org/company/ibm-corporation/" target="blank">If you want to see stranger things then visit us at RTP.</a>
    </div>
  );
}

export default Description;


