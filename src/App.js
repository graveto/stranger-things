import React from "react";
import "./App.css";
import Description from "./components/description/description.component";
import { EpisodeList } from "./components/episode-list/episode-list.component";

import data from "./data/en_US.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Stranger Things</h1>
          <h2>at<span> RTP</span></h2>
        </div>
        <div>
          <Description>{data.description}</Description>
        </div>
      </header>
      <EpisodeList episodes={data["episode-list"]} />
    </div>
  );
}

export default App;
