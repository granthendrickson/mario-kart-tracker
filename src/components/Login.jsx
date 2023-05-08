import React, { useEffect, useState } from 'react';

// Firebase
import { auth, db } from '../firebase.js';
import { doc, onSnapshot } from 'firebase/firestore';

// Styles
import '../styles/login.css';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export default function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleLogin = () => {
    console.log('login attempt!');
    signInWithEmailAndPassword(
      auth,
      formValues.email,
      formValues.password
    ).catch((error) => {
      console.log(error);
    });
  };

  // Check if a user is logged in
  const [authUser, setAuthUser] = useState('');
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        getUserData(user.uid);
      } else {
        setAuthUser(null);
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

  // Sign out the current user
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign out successful');
      })
      .catch((error) => console.log(error));
  };

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
          {authUser ? (
            <div className='signed-in'>
              <div className='signed-in-message'>{`Signed in as ${user.displayName}`}</div>
              <button
                id='sign-out-button'
                onClick={userSignOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                id='user-email'
                value={formValues.email}
                onChange={handleChange}
              />
              <label
                htmlFor='password'
                id='user-password-header'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='user-password'
                value={formValues.password}
                onChange={handleChange}
              />
              <button
                id='login-button'
                onClick={handleLogin}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
