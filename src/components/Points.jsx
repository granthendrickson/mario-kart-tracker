import React from 'react';

// Components
import Podium from './Podium';

// Styles
import '../styles/records.css';

// Images
import banner from '../images/scroller2.png';
import linkHero from '../images/char_link.png';
import kingBooIcon from '../images/kingBoo_th.png';
import rosalinaIcon from '../images/rosalina_th.png';
import linkIcon from '../images/link_th.png';

export default function Points() {
  return (
    <div className='points'>
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
      <div className='section-header'>Most Points</div>
      <div className='podium-container'>
        <div className='coming-soon-container'>
          <h1 className='coming-soon'>COMING SOON</h1>
        </div>
        <Podium
          name={'Grant'}
          stat={'287'}
          type={'Points'}
          icon={kingBooIcon}
          place={2}
        />
        <Podium
          name={'Jake'}
          stat={'312'}
          type={'Points'}
          icon={linkIcon}
          place={1}
        />
        <Podium
          name={'Chris'}
          stat={'263'}
          type={'Points'}
          icon={rosalinaIcon}
          place={3}
        />
      </div>
    </div>
  );
}
