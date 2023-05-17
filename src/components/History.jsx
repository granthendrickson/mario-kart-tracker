import React, { useEffect, useState } from 'react';

// Firebase
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

// Styles
import '../styles/records.css';
import '../styles/history.css';

// Components
import TimeTile from '../components/TimeTile';

// Images
import banner from '../images/scroller2.png';
import linkHero from '../images/char_link.png';

export default function History() {
  // Create a list of time tiles to display
  const [timeTiles, setTimeTiles] = useState([]);

  useEffect(() => {
    // Get all the tracks
    const tracksRef = collection(db, 'tracks');
    let allTimes = [];

    getDocs(tracksRef).then((snapshot) => {
      // Create an array of promises for each track's times
      const timesPromises = snapshot.docs.map((doc) => {
        const trackName = doc.id;
        const timesUrl = 'tracks/' + trackName + '/times';
        const timesRef = collection(db, timesUrl);
        return getDocs(timesRef);
      });

      // Wait for all the promises to resolve
      Promise.all(timesPromises).then((snapshots) => {
        // Loop through each track's times
        snapshots.forEach((snapshot) => {
          // create an array of time objects
          snapshot.docs.forEach((doc) => {
            if (doc.data().date) allTimes.push({ ...doc.data() });
          });
        });

        // Sort all the times by the date added
        allTimes.sort((a, b) => (a.date < b.date ? 1 : -1));

        setTimeTiles(
          allTimes.map((time, index) => (
            <TimeTile
              track={time.track}
              recordHolder={time.recordHolder}
              time={time.time}
              date={time.date}
              isRecord={time.newRecord}
              key={index}
            />
          ))
        );
      });
    }, []);
  }, []);

  return (
    <div className='history'>
      <div className='divider-down'>
        <img
          className='banner-pic-up'
          src={linkHero}
          alt=''
        />
        <div className='carousel-banner-up'>
          <img
            className='banner-up'
            src={banner}
            alt=''
          />
        </div>
      </div>
      <div className='section-header'>Latest Records</div>
      <div className='history-container'>
        <div className='history-list'>{timeTiles}</div>
      </div>
    </div>
  );
}
