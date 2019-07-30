import React from "react";
import "./App.css";
import Description from "./components/description.component";
import {EpisodeList} from "./components/episode-list/episode-list.component";

import data from "./data/en_US.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Description>{data.description}</Description>
        </div>
      </header>
      <EpisodeList episodes={data["episode-list"]}>
      </EpisodeList>
    </div>
  );
}

export default App;
