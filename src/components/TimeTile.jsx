import React from 'react';

export default function TimeTile({ character, time, recordHolder }) {
  return (
    <div className='time-tile'>
      <p>{recordHolder}</p>
      <p>{character}</p>
      <p>{time}</p>
    </div>
  );
}
