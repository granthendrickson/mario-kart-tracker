import React from 'react';

// Styles
import '../styles/addTime.css';

// Images
import banner from '../images/scroller4.png';
import marioHero from '../images/MK8_Mario_Toad_Mechanics_Artwork.png';

export default function AddTime() {
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
          <div className='add-time-form-bottom'></div>
        </div>
      </div>
    </div>
  );
}
