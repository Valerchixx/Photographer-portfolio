import React from 'react';
import themes from '../colorTheme/themes';

const ThemeContext = React.createContext(themes.darkTheme);

export default ThemeContext;
