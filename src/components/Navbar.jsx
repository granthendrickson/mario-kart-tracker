import React from 'react'

// Styles
import '../styles/navbar.css'

// Images
import clock from '../images/clock.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='clock-container'>
        <img id='clock-img' src={clock} alt="Tracker" />
      </div>
      <ul className='nav-menu'>
        <li className='nav-item'>STANDINGS</li>
        <li className='nav-item'>TRACKS</li>
        <li className='nav-item'>ADD A TIME</li>
        <li className='nav-item'>ABOUT</li>
      </ul>
    </div>
  )
}
