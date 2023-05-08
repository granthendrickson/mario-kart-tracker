import React, { useRef } from 'react';

// Styles
import '../styles/addTime.css';

// Images
import banner from '../images/scroller4.png';
import marioHero from '../images/MK8_Mario_Toad_Mechanics_Artwork.png';

export default function AddTime() {
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
        <div className='add-time-form'>
          <div className='add-time-form-top'>
            <div className='add-time-form-top-left'>
              <label htmlFor='course'>Course</label>
              <input
                type='text'
                name='course'
                id='add-time-course'
              />
            </div>

            <div className='add-time-form-top-right'>
              <label htmlFor='character'>Character</label>
              <input
                type='text'
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
        </div>
      </div>
    </div>
  );
}
