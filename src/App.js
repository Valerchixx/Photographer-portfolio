import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/Component/Home/Home';
import Table from './Pages/Component/Table/Table';

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
