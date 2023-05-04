import React from 'react';

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

export default function Records() {
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
          name={'Jake'}
          stat={'18'}
          type={'Tracks'}
          icon={linkIcon}
          place={2}
        />
        <Podium
          name={'Chris'}
          stat={'36'}
          type={'Tracks'}
          icon={rosalinaIcon}
          place={1}
        />
        <Podium
          name={'Grant'}
          stat={'5'}
          type={'Tracks'}
          icon={kingBooIcon}
          place={3}
        />
      </div>
    </div>
  );
}
