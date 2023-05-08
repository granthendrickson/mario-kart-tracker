import './App.css';

// Components
import Navbar from './components/Navbar';
import Title from './components/Title';
import Records from './components/Records';
import Points from './components/Points';
import Tracks from './components/Tracks';
import AddTime from './components/AddTime';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
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

export default App;
