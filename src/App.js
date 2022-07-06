import React, { Suspense, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './i18n';
import ThemeContext from './utils/context/theme-context';
import Home from './Pages/Home/Home';
import themes from './utils/colorTheme/themes';
import TableF from './Pages/Table/Table';

const App = () => {
  const [theme, setTheme] = useState(themes.darkTheme);
  const value = React.useMemo(() => ({
    theme, setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <Suspense fallback="Loading...">
        <div className="App">
          <Router>
            <Routes>
              <Route path="/web-react" element={<Home />} />
              <Route path="/table/" element={<TableF />} />
              <Route path="/table/:id" element={<TableF />} />
            </Routes>
          </Router>
        </div>
      </Suspense>
    </ThemeContext.Provider>
  );
};

export default App;
