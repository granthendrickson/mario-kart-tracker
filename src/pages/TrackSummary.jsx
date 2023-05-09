import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from 'rsuite';
import { ArowBack } from '@rsuite/icons';

// Firebase
import { db } from '../firebase';
import { collection, getDocs, doc, onSnapshot } from 'firebase/firestore';

// Components
import TimeTile from '../components/TimeTile';

export default function TrackSummary() {
  // Get the current track
  const location = useLocation();
  const trackName = location.state;

  // Get the track's display name
  const [trackDisplayName, setTrackDisplayName] = useState('');
  useEffect(() => {
    const getTrackName = (trackId) => {
      const docRef = doc(db, 'tracks', trackId);
      onSnapshot(docRef, (doc) => {
        setTrackDisplayName(doc.data());
        console.log(trackDisplayName);
      });
    };

    getTrackName(trackName);
  }, []);

  // Create a list of time tiles to display
  const [timeTiles, setTimeTiles] = useState([]);

  useEffect(() => {
    // Get the tracks times
    const timesUrl = 'tracks/' + trackName + '/times';
    const timesRef = collection(db, timesUrl);

    getDocs(timesRef)
      .then((snapshot) => {
        // create an array of time objects
        let times = [];
        snapshot.docs.forEach((doc) => {
          times.push({ ...doc.data() });
        });
        console.log(times);

        // Sort the time objects by fastest time
        times.sort((a, b) => (a.time > b.time ? 1 : -1));

        // Create "time tiles" for each time on the track
        setTimeTiles(
          times.map((time, index) => (
            <TimeTile
              recordHolder={time.recordHolder}
              character={time.character}
              time={time.time}
              key={index}
            />
          ))
        );
      })
      .catch((error) => console.log(error));
  }, [trackName]);

  return (
    <div className='track-summary-page'>
      <Link to='/'>
        <IconButton
          className='back-icon'
          id='back-icon'
          icon={<ArowBack />}
          appearance='primary'
        />
      </Link>
      <h1 className='track-name-header'>{trackDisplayName.displayName}</h1>
      <div className='track-summary'>{timeTiles}</div>
    </div>
  );
}
