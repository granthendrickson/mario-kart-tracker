import React from 'react';
import ReactLoading from 'react-loading';

// Styles
import '../styles/loading.css';

export default function Loading() {
  document.onreadystatechange = function () {
    if (document.readyState !== 'complete') {
      document.querySelector('loading').style.visibility = 'visible';
    }
  };

  return (
    <div className='loading'>
      <h1>Loading...</h1>
      <ReactLoading
        id='loading-animation'
        type='cylon'
        color='#000000'
        height={200}
        width={100}
      />
    </div>
  );
}
