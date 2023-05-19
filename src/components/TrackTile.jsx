import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Firebase
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

// Images
import whiteYoshiIcon from '../images/whiteYoshi_th.webp';
import rosalinaIcon from '../images/rosalina_th.png';
import linkIcon from '../images/link_th.png';
import yoshiIcon from '../images/yoshi_th.webp';

export default function TrackTile(props) {
  const { trackName, trackPic } = props;
  const navigate = useNavigate();
  const toTrackPage = (track) => {
    navigate('/pages/trackSummary.jsx', { state: track });
  };

  // Find who has the record on the track and use the according icon
  const [recordHolderIcon, setRecordHolderIcon] = useState(null);
  useEffect(() => {
    // Get the tracks times
    const timesUrl = 'tracks/' + trackName + '/times';
    const timesRef = collection(db, timesUrl);

    getDocs(timesRef).then((snapshot) => {
      let times = [];
      snapshot.docs.forEach((doc) => {
        times.push({ ...doc.data() });
      });

      // Sort the time objects by fastest time
      times.sort((a, b) => (a.time > b.time ? 1 : -1));

      // If there are times set the recordHolder to the fastest time
      if (times.length !== 0) {
        let recordHolder = times[0].recordHolder;

        if (recordHolder === 'Henny') setRecordHolderIcon(whiteYoshiIcon);
        if (recordHolder === 'Reppo') setRecordHolderIcon(linkIcon);
        if (recordHolder === 'Sepe') setRecordHolderIcon(rosalinaIcon);
        if (recordHolder === 'Samoto') setRecordHolderIcon(yoshiIcon);
      }
    });
  });

  return (
    <div className='track-container'>
      <img
        className='time-tile-icon'
        src={recordHolderIcon}
        alt=''
      />
      <img
        className='track-pic'
        src={trackPic}
        alt=''
        onClick={() => {
          toTrackPage(trackName);
        }}
      />
    </div>
  );
}
