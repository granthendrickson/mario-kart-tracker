import React from 'react';
import { Link } from 'react-scroll';

// Styles
import '../styles/navbar.css';

// Images
import clock from '../images/clock.png';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='clock-container'>
        <Link
          to='title'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <img
            id='clock-img'
            src={clock}
            alt='Tracker'
          />
        </Link>
      </div>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <Link
            to='records'
            spy={true}
            smooth={true}
            offset={200}
            duration={500}
          >
            STANDINGS
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='history'
            spy={true}
            smooth={true}
            offset={200}
            duration={500}
          >
            HISTORY
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='tracks'
            spy={true}
            smooth={true}
            offset={200}
            duration={500}
          >
            TRACKS
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='add-time'
            spy={true}
            smooth={true}
            offset={250}
            duration={500}
          >
            ADD A TIME
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='login'
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            LOGIN
          </Link>
        </li>
        <li className='nav-item'>
          <Link>ABOUT</Link>
        </li>
      </ul>
    </div>
  );
}
