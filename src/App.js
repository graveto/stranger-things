import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./App.css";
import EpisodeList from "./components/episode-list/episode-list.component";
import Header from "./components/header/header.component";

import en_US from "./data/en_US.json";
import la_PG from "./data/la_PG.json";

let languageList = [
  {id: 1, name: "en_US", displayName: "English", data: en_US},
  {id: 2, name: "la_PG", displayName: "Upsidedownerish", data: la_PG}
];

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/popularepisodes" component={PopularEpisodes} />
        <Route path="/gallery" component={Gallery} />
      </div>
    </Router>
  );
}

function Navbar() {
  const initialLanguage = () => window.localStorage.getItem("data") || "en_US"
  const  [language, setLanguage] = useState(initialLanguage); 
  const selectLanguage = (lang) => setLanguage(lang);

  useEffect(() => {
    window.localStorage.setItem("data", language);
  }, [language]);

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a
            href="https://www.netflix.com/title/80057281"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Show
          </a>
        </li>
        <li>
          <Link to="/popularepisodes">Popular Episodes</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <p>You switched language to: {language}</p>
      <select onChange={(event) => selectLanguage(event.target.value)}>
        {languageList.map(language => (
          <option key={language.id} value={language.name}>
            {language.displayName}
          </option>
        ))}
      </select>      
    </div>
  );
}

function Home() {
  const [data, setLanguage] = useState(window.localStorage.getItem("data") || "en_US");
  const selectLanguage = (lang) => setLanguage(lang);
  
  return (
    <div>
      <Navbar />
      <Header data={languageList.filter((language) => {
        return language.name === data;
      })[0]["data"]} />
    </div>
  );
}

function PopularEpisodes() {
  const [data] = useState(window.localStorage.getItem("data") || "en_US");
  return (
    <div>
      <Navbar />
      <EpisodeList episodes={languageList.filter((language) => {
        return language.name === data;
      })[0]["data"]["episode-list"]} />
    </div>
  );
}

function Gallery() {
  const [data] = useState(window.localStorage.getItem("data") || "en_US");
  return (
    <div>
      <Navbar />
      <Carousel>
        {languageList.filter((language) => {
          return language.name === data;
        })[0]["data"].gallery.map((img, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={img.src} alt={img.text} />
            <Carousel.Caption>
              <h3>{img.text}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default App;