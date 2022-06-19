import React, { useContext } from 'react';
import ThemeContext from '../../utils/context/theme-context';
import styles from './css/switchThemes.module.css';
import themes from '../../utils/colorTheme/themes';

const SwitchThemes = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={() => setTheme((prev) => (prev === 'dark' ? themes.lightTheme : themes.darkTheme))}
        className={styles.input}
      />
      <span className={styles.slider} />
    </label>
  );
};

export default SwitchThemes;
