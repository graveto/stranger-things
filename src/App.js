import React from "react";
import "./App.css";
import Description from "./components/description/description.component";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { EpisodeList } from "./components/episode-list/episode-list.component";

import data from "./data/en_US.json";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/popularepisodes" component={PopularEpisodes} />
        {/*<Route path="/topics" component={Topics} />*/}
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="App-header">
      <div>
        <h1>Stranger Things</h1>
        <h2>
          at <span>RTP</span>
        </h2>
      </div>
      <div>
        <Description>{data.description}</Description>
      </div>
    </header>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="https://www.netflix.com/title/80057281" target="_blank">The Show</a>
        </li>
        <li>
          <Link to="/popularepisodes">Popular Episodes</Link>
        </li>
      </ul>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

function PopularEpisodes() {
  return (
    <div>
      <Navbar />
      <EpisodeList episodes={data["episode-list"]}/>
    </div>
  );
}

export default App;
