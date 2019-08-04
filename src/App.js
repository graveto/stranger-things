import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import EpisodeList from "./components/episode-list/episode-list.component";
import Header from "./components/header/header.component.jsx";

import data1 from "./data/en_US.json";
import data2 from "./data/la_PG.json";

let data = data2;

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/popularepisodes" component={PopularEpisodes} />
      </div>
    </Router>
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
      <Header data={data}/>
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
