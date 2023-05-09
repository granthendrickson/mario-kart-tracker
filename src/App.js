import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import TrackSummary from './pages/TrackSummary';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home />}
          />
          <Route
            path='pages/TrackSummary.jsx'
            element={<TrackSummary />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
