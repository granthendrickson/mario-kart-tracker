import React, { useState } from 'react';

// Components
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Records from '../components/Records';
import History from '../components/History';
import Tracks from '../components/Tracks';
import AddTime from '../components/AddTime';
import Login from '../components/Login';
import Loading from '../components/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2000);

  return (
    <div>
      <div>{loading && <Loading />}</div>
      <Navbar />
      <Title />
      <Records />
      <History />
      <Tracks />
      <AddTime />
      <Login />
    </div>
  );
}
