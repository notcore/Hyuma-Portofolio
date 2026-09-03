import React from 'react';
import './CinematicLoader.css';

export const CinematicLoader = () => {
  return (
    <div className="cinematic-viewport" role="progressbar" aria-busy="true">
      <div className="cinematic-bar">
        <div className="cinematic-assembly">
          <div className="cinematic-trail" />
          <div className="cinematic-flare" />
          <div className="cinematic-star" />
        </div>
      </div>
    </div>
  );
};

export default CinematicLoader;