'use client'

import React from "react";

const Movie: React.FC = () => { 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Embed Example</h1>
        <div>
          <iframe
            id="myIframe"
            src="https://embedder.net/e/634649"
            width="1500"
            height="500"
            title="Embedded Video"
            style={{ position: 'absolute', top: 0, left: 0 }}
          ></iframe>
        </div>

      </header>
    </div>
  );
};

export default Movie;
