import React from "react";

import "./MusicSuggestion.css";

const MusicSuggestion = (props) => {
  return (
    <div className="music-suggestion-container">
      <div className="suggestion-container">
        <h2>For a day like this, try listening to:</h2>
        <h5 className="font-weight-light">{props.song.songName} by {props.song.artistName}</h5>
      </div>
      <iframe className="spotify-widget"
        src={`https://open.spotify.com/embed/track/${props.song.uri}`}
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default MusicSuggestion;
