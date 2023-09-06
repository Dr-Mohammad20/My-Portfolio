'use client';
import React, { useContext } from 'react';
// Styles
import styles from '@/styles/themeToggle.module.scss';
// Context
import { ThemeContext } from '@/context/ThemeContext';
// Icons
import { WiDaySunny, WiMoonWaxingCrescent4 } from 'react-icons/wi';

const ThemeToggle = () => {
  const { changeTheme, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={changeTheme}>
      <div className={styles.icon}>
        <WiMoonWaxingCrescent4 />
      </div>
      <div className={styles.icon}>
        <WiDaySunny />
      </div>
      <div
        className={styles.ball}
        style={mode === 'dark' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
};

export default ThemeToggle;
