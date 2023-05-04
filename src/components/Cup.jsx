import React from 'react';

export default function Cup(props) {
  const { cupPic, cupName, track1Pic, track2Pic, track3Pic, track4Pic } = props;

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
        />
      </div>
      <div className='track-container'>
        <img
          className='track-pic'
          src={track2Pic}
          alt=''
        />
      </div>
      <div className='track-container'>
        <img
          className='track-pic'
          src={track3Pic}
          alt=''
        />
      </div>
      <div className='track-container'>
        <img
          className='track-pic'
          src={track4Pic}
          alt=''
        />
      </div>
    </div>
  );
}
