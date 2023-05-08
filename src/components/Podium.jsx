import React from 'react';
import { useState, useEffect } from 'react';

import firstIcon from '../images/1st.png';
import secondIcon from '../images/2nd.png';
import thirdIcon from '../images/3rd.png';

export default function Podium(props) {
  const { icon, name, stat, type, place } = props;

  const [placeIcon, setPlaceIcon] = useState(null);

  useEffect(() => {
    let icon = null;
    if (place === 1) icon = firstIcon;
    if (place === 2) icon = secondIcon;
    if (place === 3) icon = thirdIcon;

    setPlaceIcon(icon);
  }, [place]);

  return (
    <div className='podium'>
      <h1 className='podium-name'>{name}</h1>
      <img
        className='podium-icon'
        src={icon}
        alt=''
      />
      <div className='stat'>{stat}</div>
      <div className='stat-type'>{type}</div>
      <img
        className='place-icon'
        src={placeIcon}
        alt=''
      />
    </div>
  );
}
