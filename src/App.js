import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import Table from './Pages/Table';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/web-react" element={<Home />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
