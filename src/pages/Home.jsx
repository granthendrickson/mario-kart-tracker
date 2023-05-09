import React from 'react';

// Components
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Records from '../components/Records';
import Points from '../components/Points';
import Tracks from '../components/Tracks';
import AddTime from '../components/AddTime';
import Login from '../components/Login';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Title />
      <Records />
      <Points />
      <Tracks />
      <AddTime />
      <Login />
    </div>
  );
}
