import React from "react";
import "./App.css";
import Description from "./components/description/description.component";
//import { EpisodeList } from "./components/episode-list/episode-list.component";

import data from "./data/en_US.json";

function App() {
  return (
    <div className="App">
    <div className="navbar">
    <ul>
      <li><a href="https://www.netflix.com/title/80057281">The Show</a></li>
      <li><a href="index.html">Popular Episodes</a></li>
    </ul>
  </div>
      <header className="App-header">
        <div>
          <h1>Stranger Things</h1>
          <h2>at <span>RTP</span></h2>
        </div>
        <div>
          <Description>{data.description}</Description>
        </div>
      </header>
      {/*<EpisodeList episodes={data["episode-list"]} /> */}
    </div>
  );
}

export default App;
