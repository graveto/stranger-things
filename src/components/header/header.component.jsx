import React from "react";
import Description from "../description/description.component";
import "./header.styles.css";

const Header = (props) => {
    return (
      <header className="App-header">
        <div>
          <h1>Stranger Things</h1>
          <h2>
            at <span>RTP</span>
          </h2>
        </div>
        <div>
          <Description data={props.data}></Description>
        </div>
      </header>
    );
  }

  export default Header;