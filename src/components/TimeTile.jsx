import React from 'react';

export default function TimeTile({
  track,
  character,
  time,
  recordHolder,
  date,
  isRecord,
}) {
  if (date) {
    const recordDate = date.toDate().toLocaleDateString();
    const recordTime = date.toDate().toLocaleTimeString();

    if (isRecord) {
      return (
        <div className='red-history-time-tile'>
          <div className='time-tile-top'>
            <p>{recordHolder}</p>
            <p>{track}</p>
            <p>{time}</p>
          </div>

          <div className='time-tile-bottom'>
            <p>{recordDate}</p>
            <p>{recordTime}</p>
          </div>
        </div>
      );
    }
    return (
      <div className='history-time-tile'>
        <div className='time-tile-top'>
          <p>{recordHolder}</p>
          <p>{track}</p>
          <p>{time}</p>
        </div>

        <div className='time-tile-bottom'>
          <p>{recordDate}</p>
          <p>{recordTime}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='time-tile'>
      <p>{recordHolder}</p>
      <p>{character}</p>
      <p>{time}</p>
    </div>
  );
}
