import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ThemeContext from './utils/context/theme-context';
import Home from './Pages/Home/Home';
import themes from './utils/colorTheme/themes';
import Table from './Pages/Table/Table';

const App = () => {
  const [theme, setTheme] = useState(themes.darkTheme);
  const value = React.useMemo(() => ({
    theme, setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/web-react" element={<Home />} />
            <Route path="/table/" element={<Table />} />
            <Route path="/table/:id" element={<Table />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
