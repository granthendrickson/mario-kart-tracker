import './App.css';

// Components
import Navbar from './components/Navbar';
import Title from './components/Title';
import Records from './components/Records';
import Points from './components/Points';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Title />
      <Records />
      <Points />
    </div>
  );
}

export default App;
