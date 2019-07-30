import React from "react";
import EpisodeDetail from "../episode-detail/episode-detail.component";
import "./episode-list.styles.css";

export const EpisodeList = props => (
  <div className="episode-list">
    {props.episodes.map((episode, index) => (
      <EpisodeDetail key={index} episode={episode} />
    ))}
  </div>
);
