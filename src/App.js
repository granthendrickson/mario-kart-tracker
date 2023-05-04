import './App.css';

// Components
import Navbar from './components/Navbar';
import Title from './components/Title';
import Records from './components/Records';
import Points from './components/Points';
import Tracks from './components/Tracks';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Title />
      <Records />
      <Points />
      <Tracks />
    </div>
  );
}

export default App;
