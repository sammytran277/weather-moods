import React from "react";

import "./MusicSuggestion.css";

const MusicSuggestion = () => {
  return (
    <div className="music-suggestion-container">
      <div className="suggestion-container">
        <h2>For a rainy day like this, try listening to:</h2>
        <h5 className="font-weight-light">Purple Rain by Prince</h5>
      </div>
      <iframe className="spotify-widget"
        src="https://open.spotify.com/embed/track/54X78diSLoUDI3joC2bjMz"
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
