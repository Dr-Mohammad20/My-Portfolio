'use client';
import React, { useState, useContext } from 'react';
import style from '../styles/Loader.module.scss';

// Context
import { ThemeContext } from '@/context/ThemeContext';

function Loader() {
  const { changeTheme, mode } = useContext(ThemeContext);
  const [timeOut, setTimeOut] = useState(false);
  setTimeout(() => setTimeOut(true), 15000);
  return timeOut ? (
    <h3>
      Sorry there is a problem to fetching data, Please Refresh the page and try
      again.
    </h3>
  ) : (
    <span
      className={
        mode === 'dark' ? style.LoaderBlack : style.LoaderWhite
      }></span>
  );
}

export default Loader;
