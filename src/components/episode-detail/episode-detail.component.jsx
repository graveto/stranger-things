import React from "react";
import "./episode-detail.styles.css";

function EpisodeDetail(props) {
  return (
    <div className="episode-container">
      <div>
        <h3>{props.episode.name}</h3>
        <p>Season: {props.episode.season}</p>
        <p>Rating: {props.episode.rating}</p>
      </div>
    </div>
  );
}

export default EpisodeDetail;
