import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Table from './Pages/Table/Table';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/web-react" element={<Home />} />
          <Route path="/table/" element={<Table />} />
          <Route path="/table/:id" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
