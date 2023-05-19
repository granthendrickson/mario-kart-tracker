import React from 'react';

// Components
import TrackTile from './TrackTile';

export default function Cup(props) {
  const {
    cupPic,
    cupName,
    track1Pic,
    track2Pic,
    track3Pic,
    track4Pic,
    track1Name,
    track2Name,
    track3Name,
    track4Name,
  } = props;

  return (
    <div className='cup'>
      <div className='cup-container'>
        <img
          className='cup-pic'
          src={cupPic}
          alt=''
        />
        <p className='cup-name'>{cupName}</p>
      </div>

      <TrackTile
        trackPic={track1Pic}
        trackName={track1Name}
      />

      <TrackTile
        trackPic={track2Pic}
        trackName={track2Name}
      />
      <TrackTile
        trackPic={track3Pic}
        trackName={track3Name}
      />
      <TrackTile
        trackPic={track4Pic}
        trackName={track4Name}
      />
    </div>
  );
}
