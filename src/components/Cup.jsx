import React from 'react';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const toTrackPage = (track) => {
    navigate('/pages/trackSummary.jsx', { state: track });
  };

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

      <div className='track-container'>
        <img
          className='track-pic'
          src={track1Pic}
          alt=''
          onClick={() => {
            toTrackPage(track1Name);
          }}
        />
      </div>
      <div className='track-container'>
        <img
          className='track-pic'
          src={track2Pic}
          alt=''
          onClick={() => {
            toTrackPage(track2Name);
          }}
        />
      </div>
      <div className='track-container'>
        <img
          className='track-pic'
          src={track3Pic}
          alt=''
          onClick={() => {
            toTrackPage(track3Name);
          }}
        />
      </div>
      <div className='track-container'>
        <img
          className='track-pic'
          src={track4Pic}
          alt=''
          onClick={() => {
            toTrackPage(track4Name);
          }}
        />
      </div>
    </div>
  );
}
