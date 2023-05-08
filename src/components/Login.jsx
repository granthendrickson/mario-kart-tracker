import React from 'react';

// Styles
import '../styles/login.css';

export default function Login() {
  return (
    <div className='login'>
      <div
        className='section-header'
        id='login-header'
      >
        Login
      </div>
      <div className='login-form-container'>
        <div className='login-form'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='user-email'
          />
          <label
            htmlFor='password'
            id='user-password-header'
          >
            Password
          </label>
          <input
            type='text'
            name='password'
            id='user-password'
          />
          <button id='login-button'>Login</button>
        </div>
      </div>
    </div>
  );
}
