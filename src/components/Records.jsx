import React, { useEffect, useState } from 'react';

// Firebase
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

// Components
import Podium from './Podium';

// Styles
import '../styles/records.css';

// Images
import banner from '../images/scrolling-banner-sample-1.png';
import yoshiHero from '../images/char-yoshi.webp';
import kingBooIcon from '../images/kingBoo_th.png';
import rosalinaIcon from '../images/rosalina_th.png';
import linkIcon from '../images/link_th.png';
import yoshiIcon from '../images/yoshi_th.webp';

export default function Records() {
  // States to store the display names of the podium
  const [firstPlaceName, setFirstPlaceName] = useState('');
  const [secondPlaceName, setSecondPlaceName] = useState('');
  const [thirdPlaceName, setThirdPlaceName] = useState('');

  const [firstPlaceCount, setFirstPlaceCount] = useState('');
  const [secondPlaceCount, setSecondPlaceCount] = useState('');
  const [thirdPlaceCount, setThirdPlaceCount] = useState('');

  useEffect(() => {
    // Get all the tracks
    const tracksRef = collection(db, 'tracks');

    getDocs(tracksRef).then((snapshot) => {
      // Create an object to store the counts
      const recordHoldersCount = {};

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
          let times = [];
          snapshot.docs.forEach((doc) => {
            times.push({ ...doc.data() });
          });

          // Sort the time objects by fastest time
          times.sort((a, b) => (a.time > b.time ? 1 : -1));

          if (times.length > 0) {
            const recordHolder = times[0].recordHolder;

            // Update the count for this recordHolder
            recordHoldersCount[recordHolder] =
              (recordHoldersCount[recordHolder] || 0) + 1;
          }
        });

        // Convert the recordHoldersCount object to an array of entries
        const recordHoldersCountEntries = Object.entries(recordHoldersCount);

        // Sort the array based on the count values in descending order
        recordHoldersCountEntries.sort((a, b) => b[1] - a[1]);

        // Convert the sorted array back to an object
        const sortedRecordHoldersCount = Object.fromEntries(
          recordHoldersCountEntries
        );

        console.log(sortedRecordHoldersCount); // Log the final counts

        // Extract the top three record holders from sortedRecordHoldersCount
        const topThree = Object.entries(sortedRecordHoldersCount).slice(0, 3);

        // Set the top three record holders to the corresponding state variables
        if (topThree.length >= 1) {
          setFirstPlaceName(topThree[0][0]);
          setFirstPlaceCount(topThree[0][1]);
        }

        if (topThree.length >= 2) {
          setSecondPlaceName(topThree[1][0]);
          setSecondPlaceCount(topThree[1][1]);
        }

        if (topThree.length >= 3) {
          setThirdPlaceName(topThree[2][0]);
          setThirdPlaceCount(topThree[2][1]);
        }
      });
    });
  }, []);

  return (
    <div className='records'>
      <div className='divider-down'>
        <img
          className='banner-pic-down'
          src={yoshiHero}
          alt=''
        />
        <div className='carousel-banner-down'>
          <img
            className='banner-down'
            src={banner}
            alt=''
          />
        </div>
      </div>
      <div className='section-header'>Most Records</div>
      <div className='podium-container'>
        <Podium
          name={secondPlaceName}
          stat={secondPlaceCount}
          type={'Tracks'}
          icon={
            secondPlaceName === 'Henny'
              ? kingBooIcon
              : secondPlaceName === 'Sepe'
              ? rosalinaIcon
              : secondPlaceName === 'Reppo'
              ? linkIcon
              : secondPlaceName === 'Samoto'
              ? yoshiIcon
              : null
          }
          place={2}
        />
        <Podium
          name={firstPlaceName}
          stat={firstPlaceCount}
          type={'Tracks'}
          icon={
            firstPlaceName === 'Henny'
              ? kingBooIcon
              : firstPlaceName === 'Sepe'
              ? rosalinaIcon
              : firstPlaceName === 'Reppo'
              ? linkIcon
              : firstPlaceName === 'Samoto'
              ? yoshiIcon
              : null
          }
          place={1}
        />
        <Podium
          name={thirdPlaceName}
          stat={thirdPlaceCount}
          type={'Tracks'}
          icon={
            thirdPlaceName === 'Henny'
              ? kingBooIcon
              : thirdPlaceName === 'Sepe'
              ? rosalinaIcon
              : thirdPlaceName === 'Reppo'
              ? linkIcon
              : thirdPlaceName === 'Samoto'
              ? yoshiIcon
              : null
          }
          place={3}
        />
      </div>
    </div>
  );
}
