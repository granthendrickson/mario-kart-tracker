import React, { useEffect, useState, useRef } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

// Firebase
import { auth, db } from '../firebase.js';
import {
  doc,
  setDoc,
  onSnapshot,
  getDocs,
  collection,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

// Styles
import '../styles/addTime.css';

// Images
import banner from '../images/scroller4.png';
import marioHero from '../images/MK8_Mario_Toad_Mechanics_Artwork.png';

export default function AddTime() {
  const characters = [
    { value: 'mario', label: 'Mario' },
    { value: 'luigi', label: 'Luigi' },
    { value: 'peach', label: 'Peach' },
    { value: 'daisy', label: 'Daisy' },
    { value: 'rosalina', label: 'Rosalina' },
    { value: 'tanooki-mario', label: 'Tanooki Mario' },
    { value: 'cat-peach', label: 'Cat Peach' },
    { value: 'yoshi', label: 'Yoshi' },
    { value: 'toad', label: 'Toad' },
    { value: 'koopa-troopa', label: 'Koopa Troopa' },
    { value: 'shy-guy', label: 'Shy Guy' },
    { value: 'lakitu', label: 'Lakitu' },
    { value: 'toadette', label: 'Toadette' },
    { value: 'king-boo', label: 'King Boo' },
    { value: 'baby-mario', label: 'Baby Mario' },
    { value: 'baby-luigi', label: 'Baby Luigi' },
    { value: 'baby-peach', label: 'Baby Peach' },
    { value: 'baby-daisy', label: 'Baby Daisy' },
    { value: 'baby-rosalina', label: 'Baby Rosalina' },
    { value: 'metal-mario', label: 'Metal Mario' },
    { value: 'pink-gold-peach', label: 'Pink Gold Peach' },
    { value: 'wario', label: 'Wario' },
    { value: 'waluigi', label: 'Waluigi' },
    { value: 'donkey-kong', label: 'Donkey Kong' },
    { value: 'bowser', label: 'Bowser' },
    { value: 'dry-bones', label: 'Dry Bones' },
    { value: 'bowser-jr', label: 'Bowser Jr.' },
    { value: 'dry-bowser', label: 'Dry Bowser' },
    { value: 'lemmy', label: 'Lemmy' },
    { value: 'larry', label: 'Larry' },
    { value: 'wendy', label: 'Wendy' },
    { value: 'ludwig', label: 'Ludwig' },
    { value: 'iggy', label: 'Iggy' },
    { value: 'roy', label: 'Roy' },
    { value: 'morton', label: 'Morton' },
    { value: 'inkling-girl', label: 'Inkling Girl' },
    { value: 'inkling-boy', label: 'Inkling Boy' },
    { value: 'link', label: 'Link' },
    { value: 'villager', label: 'Villager' },
    { value: 'isabelle', label: 'Isabelle' },
    { value: 'mii-character', label: 'Mii Character' },
    { value: 'birdo', label: 'Birdo' },
  ];

  const tracks = [
    { value: 'mario-kart-stadium', label: 'Mario Kart Stadium' },
    { value: 'water-park', label: 'Water Park' },
    { value: 'sweet-sweet-canyon', label: 'Sweet Sweet Canyon' },
    { value: 'thwomp-ruins', label: 'Thwomp Ruins' },
    { value: 'mario-circuit', label: 'Mario Circuit' },
    { value: 'toad-harbor', label: 'Toad Harbor' },
    { value: 'twisted-mansion', label: 'Twisted Mansion' },
    { value: 'shy-guy-falls', label: 'Shy Guy Falls' },
    { value: 'sunshine-airport', label: 'Sunshine Airport' },
    { value: 'dolphin-shoals', label: 'Dolphin Shoals' },
    { value: 'electrodrome', label: 'Electrodrome' },
    { value: 'mount-wario', label: 'Mount Wario' },
    { value: 'cloudtop-cruise', label: 'Cloudtop Cruise' },
    { value: 'bone-dry-dunes', label: 'Bone Dry Dunes' },
    { value: 'bowsers-castle', label: "Bowser's Castle" },
    { value: 'rainbow-road', label: 'Rainbow Road' },
    { value: 'Wii-moo-moo-meadows', label: 'Wii Moo Moo Meadows' },
    { value: 'GBA-mario-circuit', label: 'GBA Mario Circuit' },
    { value: 'DS-cheep-cheep-beach', label: 'DS Cheep Cheep Beach' },
    { value: 'N64-toads-turnpike', label: "N64 Toad's Turnpike" },
    { value: 'GCN-dry-dry-desert', label: 'GCN Dry Dry Desert' },
    { value: 'SNES-donut-plains-3', label: 'SNES Donut Plains 3' },
    { value: 'N64-royal-raceway', label: 'N64 Royal Raceway' },
    { value: '3DS-dk-jungle', label: '3DS DK Jungle' },
    { value: 'DS-wario-stadium', label: 'DS Wario Stadium' },
    { value: 'GCN-sherbet-land', label: 'GCN Sherbet Land' },
    { value: '3DS-music-park', label: '3DS Music Park' },
    { value: 'N64-yoshi-valley', label: 'N64 Yoshi Valley' },
    { value: 'DS-tick-tock-clock', label: 'DS Tick Tock Clock' },
    { value: '3DS-piranha-plant-slide', label: '3DS Piranha Plant Slide' },
    { value: 'Wii-grumble-volcano', label: 'Wii Grumble Volcano' },
    { value: 'N64-rainbow-road', label: 'N64 Rainbow Road' },
    { value: 'GCN-yoshis-circuit', label: "GCN Yoshi's Circuit" },
    { value: 'excitebike-arena', label: 'Excitebike Arena' },
    { value: 'dragon-driftway', label: 'Dragon Driftway' },
    { value: 'mute-city', label: 'Mute City' },
    { value: 'Wii-warios-gold-mine', label: "Wii Wario's Gold Mine" },
    { value: 'SNES-rainbow-road', label: 'SNES Rainbow Road' },
    { value: 'ice-ice-outpost', label: 'Ice Ice Outpost' },
    { value: 'hyrule-circuit', label: 'Hyrule Circuit' },
    { value: 'GCN-baby-park', label: 'GCN Baby Park' },
    { value: 'GBA-cheese-land', label: 'GBA Cheese Land' },
    { value: 'wild-woods', label: 'Wild Woods' },
    { value: 'animal-crossing', label: 'Animal Crossing' },
    { value: '3DS-neo-bowser-city', label: '3DS Neo Bowser City' },
    { value: 'GBA-ribbon-road', label: 'GBA Ribbon Road' },
    { value: 'super-bell-subway', label: 'Super Bell Subway' },
    { value: 'big-blue', label: 'Big Blue' },
  ];

  // Check if a user is logged in
  const [authUser, setAuthUser] = useState('');
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        getUserData(user.uid);
      }
    });

    return () => {
      listen();
    };
  }, []);

  // Get the logged in user's data
  const [user, setUser] = useState('');
  const getUserData = (userId) => {
    const docRef = doc(db, 'users', userId);
    onSnapshot(docRef, (doc) => {
      setUser(doc.data());
    });
  };

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  // Handle automatic focus to next input field in time
  const minutesRef = useRef(null);
  const secondsRef = useRef(null);
  const millisecondsRef = useRef(null);
  const addTimeButtonRef = useRef(null);

  const handleMinutesInput = (event) => {
    const minutes = event.target.value;
    if (minutes.length === 1) {
      secondsRef.current.focus();
    }
  };

  const handleSecondsInput = (event) => {
    const seconds = event.target.value;
    if (seconds.length === 2) {
      millisecondsRef.current.focus();
    }
    if (seconds.length === 0) {
      minutesRef.current.focus();
    }
  };

  const handleMillisecondsInput = (event) => {
    const milliseconds = event.target.value;
    if (milliseconds.length === 3) {
      addTimeButtonRef.current.focus();
    }
    if (milliseconds.length === 0) {
      secondsRef.current.focus();
    }
  };

  const navigate = useNavigate();
  const toTrackPage = (track) => {
    navigate('/pages/trackSummary.jsx', { state: track });
  };

  // Adding a time

  // Get the track's displayName
  const [trackDisplayName, setTrackDisplayName] = useState('');
  const [isTrackDisplayNameSet, setIsTrackDisplayNameSet] = useState(false);
  useEffect(() => {
    const addTimeForm = document.querySelector('.add-time-form');
    console.log('first UE');
    if (addTimeForm) {
      console.log('addTimeForm true');
      const handleSubmit = (e) => {
        console.log('handled submit');
        e.preventDefault();

        if (addTimeForm.track.value === 'mario-kart-stadium') {
          setTrackDisplayName('MK8 Mario Kart Stadium');
        }
        if (addTimeForm.track.value === 'water-park') {
          setTrackDisplayName('Water Park');
        }
        if (addTimeForm.track.value === 'sweet-sweet-canyon') {
          setTrackDisplayName('Sweet Sweet Canyon');
        }
        if (addTimeForm.track.value === 'thwomp-ruins') {
          setTrackDisplayName('Thwomp Ruins');
        }
        if (addTimeForm.track.value === 'mario-circuit') {
          setTrackDisplayName('Mario Circuit');
        }
        if (addTimeForm.track.value === 'toad-harbor') {
          setTrackDisplayName('Toad Harbor');
        }
        if (addTimeForm.track.value === 'twisted-mansion') {
          setTrackDisplayName('Twisted Mansion');
        }
        if (addTimeForm.track.value === 'shy-guy-falls') {
          setTrackDisplayName('Shy Guy Falls');
        }
        if (addTimeForm.track.value === 'sunshine-airport') {
          setTrackDisplayName('Sunshine Airport');
        }
        if (addTimeForm.track.value === 'dolphin-shoals') {
          setTrackDisplayName('Dolphin Shoals');
        }
        if (addTimeForm.track.value === 'electrodrome') {
          setTrackDisplayName('Electrodome');
        }
        if (addTimeForm.track.value === 'mount-wario') {
          setTrackDisplayName('Mount Wario');
        }
        if (addTimeForm.track.value === 'cloudtop-cruise') {
          setTrackDisplayName('Cloud Top Cruise');
        }
        if (addTimeForm.track.value === 'bone-dry-dunes') {
          setTrackDisplayName('Bone Dry Dunes');
        }
        if (addTimeForm.track.value === 'bowsers-castle') {
          setTrackDisplayName("Bowser's Castle");
        }
        if (addTimeForm.track.value === 'rainbow-road') {
          setTrackDisplayName('Rainbow Road');
        }
        if (addTimeForm.track.value === 'Wii-moo-moo-meadows') {
          setTrackDisplayName('Moo Moo Meadows');
        }
        if (addTimeForm.track.value === 'GBA-mario-circuit') {
          setTrackDisplayName('GBA Mario Circuit');
        }
        if (addTimeForm.track.value === 'DS-cheep-cheep-beach') {
          setTrackDisplayName('Cheep Cheep Beach');
        }
        if (addTimeForm.track.value === 'N64-toads-turnpike') {
          setTrackDisplayName("Toad's Turnpike");
        }
        if (addTimeForm.track.value === 'GCN-dry-dry-desert') {
          setTrackDisplayName('Dry Dry Desert');
        }
        if (addTimeForm.track.value === 'SNES-donut-plains-3') {
          setTrackDisplayName('Donut Plains 3');
        }
        if (addTimeForm.track.value === 'N64-royal-raceway') {
          setTrackDisplayName('Royal Raceway');
        }
        if (addTimeForm.track.value === '3DS-dk-jungle') {
          setTrackDisplayName('DK Jungle');
        }
        if (addTimeForm.track.value === 'DS-wario-stadium') {
          setTrackDisplayName('Wario Stadium');
        }
        if (addTimeForm.track.value === 'GCN-sherbet-land') {
          setTrackDisplayName('Sherbet Land');
        }
        if (addTimeForm.track.value === '3DS-music-park') {
          setTrackDisplayName('Music Park');
        }
        if (addTimeForm.track.value === 'N64-yoshi-valley') {
          setTrackDisplayName('Yoshi Valley');
        }
        if (addTimeForm.track.value === 'DS-tick-tock-clock') {
          setTrackDisplayName('Tick Tock Clock');
        }
        if (addTimeForm.track.value === '3DS-piranha-plant-slide') {
          setTrackDisplayName('Piranha Plant Slide');
        }
        if (addTimeForm.track.value === 'Wii-grumble-volcano') {
          setTrackDisplayName('Grumble Volcano');
        }
        if (addTimeForm.track.value === 'N64-rainbow-road') {
          setTrackDisplayName('N64 Rainbow Road');
        }
        if (addTimeForm.track.value === 'GCN-yoshis-circuit') {
          setTrackDisplayName('Yoshi Circuit');
        }
        if (addTimeForm.track.value === 'excitebike-arena') {
          setTrackDisplayName('Excitebike Arena');
        }
        if (addTimeForm.track.value === 'dragon-driftway') {
          setTrackDisplayName('Dragon Driftway');
        }
        if (addTimeForm.track.value === 'mute-city') {
          setTrackDisplayName('Mute City');
        }
        if (addTimeForm.track.value === 'Wii-warios-gold-mine') {
          setTrackDisplayName("Wario's Goldmine");
        }
        if (addTimeForm.track.value === 'SNES-rainbow-road') {
          setTrackDisplayName('SNESN Rainbow Road');
        }
        if (addTimeForm.track.value === 'ice-ice-outpost') {
          setTrackDisplayName('Ice Ice Outpost');
        }
        if (addTimeForm.track.value === 'hyrule-circuit') {
          setTrackDisplayName('Hyrule Circuit');
        }
        if (addTimeForm.track.value === 'GCN-baby-park') {
          setTrackDisplayName('Baby Park');
        }
        if (addTimeForm.track.value === 'GBA-cheese-land') {
          setTrackDisplayName('Cheese Land');
        }
        if (addTimeForm.track.value === 'wild-woods') {
          setTrackDisplayName('Wild Woods');
        }
        if (addTimeForm.track.value === 'animal-crossing') {
          setTrackDisplayName('Animal Crossing');
        }
        if (addTimeForm.track.value === '3DS-neo-bowser-city') {
          setTrackDisplayName('Neo Bowser City');
        }
        if (addTimeForm.track.value === 'GBA-ribbon-road') {
          setTrackDisplayName('Ribbon Road');
        }
        if (addTimeForm.track.value === 'super-bell-subway') {
          setTrackDisplayName('Super Bell Subway');
        }
        if (addTimeForm.track.value === 'big-blue') {
          setTrackDisplayName('Big Blue');
        }

        setIsTrackDisplayNameSet(true);
      };

      addTimeForm.addEventListener('submit', handleSubmit);

      return () => {
        // Cleanup: Remove the event listener when the component unmounts
        addTimeForm.removeEventListener('submit', handleSubmit);
      };
    }
  });

  useEffect(() => {
    const addTimeForm = document.querySelector('.add-time-form');

    console.log('Second UE');
    console.log(isTrackDisplayNameSet + ' second UE');
    if (isTrackDisplayNameSet) {
      console.log('trackDisplayNameSet true');
      // Get reference to add the time to the user
      const userTimeCollectionUrl = 'users/' + authUser.uid + '/times';
      const userTimeRef = doc(
        db,
        userTimeCollectionUrl,
        addTimeForm.track.value
      );

      // Get reference to add the time to the track
      const trackTimeCollectionUrl =
        'tracks/' + addTimeForm.track.value + '/times';
      const trackTimeRef = doc(db, trackTimeCollectionUrl, authUser.uid);

      const time =
        addTimeForm.minutes.value +
        ':' +
        addTimeForm.seconds.value +
        '.' +
        addTimeForm.milliseconds.value;

      const dateOfRecord = new Date();

      // Check if the new time is the fastest
      const checkFastestTime = async () => {
        const trackTimesSnapshot = await getDocs(
          collection(db, trackTimeCollectionUrl)
        );
        let isFastestTime = true;

        trackTimesSnapshot.forEach((doc) => {
          const docTime = doc.data().time;

          // Compare the new time with each existing time
          if (docTime < time) {
            isFastestTime = false;
          }
        });

        // Update the user's time and the track's time
        console.log('!!!');
        setDoc(userTimeRef, {
          character: addTimeForm.character.value,
          time: time,
          date: dateOfRecord,
          track: trackDisplayName,
          newRecord: isFastestTime,
        }).then(() => {
          setDoc(trackTimeRef, {
            character: addTimeForm.character.value,
            time: time,
            recordHolder: user.displayName,
            date: dateOfRecord,
            track: trackDisplayName,
            newRecord: isFastestTime,
          }).then(() => {
            addTimeForm.reset();
            toTrackPage(addTimeForm.track.value);
          });
        });
      };

      checkFastestTime();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTrackDisplayNameSet]);

  return (
    <div className='add-time'>
      <div className='divider-add-time'>
        <img
          className='banner-pic-up'
          src={marioHero}
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
      <div className='section-header'>Add Time</div>
      <div className='add-time-form-container'>
        {authUser ? (
          <form className='add-time-form'>
            <div className='add-time-form-top'>
              <div className='add-time-form-top-left'>
                <label htmlFor='track'>Track</label>
                <Select
                  options={tracks}
                  name='track'
                  id='add-time-track'
                />
              </div>

              <div className='add-time-form-top-right'>
                <label htmlFor='character'>Character</label>
                <Select
                  options={characters}
                  name='character'
                  id='add-time-character'
                />
              </div>
            </div>
            <div className='add-time-form-bottom'>
              <div className='add-time-form-bottom-third'>
                <label htmlFor='minutes'>Time</label>
                <input
                  type='text'
                  className='time-input'
                  name='minutes'
                  id='time-input-minutes'
                  onInput={handleMinutesInput}
                  ref={minutesRef}
                />
              </div>
              <span id='time-colon'>:</span>
              <input
                type='text'
                className='time-input'
                name='seconds'
                id='time-input-seconds'
                onInput={handleSecondsInput}
                ref={secondsRef}
              />
              <span id='time-period'>.</span>
              <input
                type='text'
                className='time-input'
                name='milliseconds'
                id='time-input-milliseconds'
                onInput={handleMillisecondsInput}
                ref={millisecondsRef}
              />
              <button
                id='add-time-button'
                ref={addTimeButtonRef}
              >
                Add
                <br />
                Time
              </button>
            </div>
          </form>
        ) : (
          <div className='add-time-form'>Sign in to add a time</div>
        )}
      </div>
    </div>
  );
}
