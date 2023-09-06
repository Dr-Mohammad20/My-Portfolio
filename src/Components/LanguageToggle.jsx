'use client';
import React, { useContext } from 'react';
// Styles
import styles from '@/styles/languageToggle.module.scss';
// Context
import { LanguageContext } from '@/context/LanguageContext';

const LanguageToggle = () => {
  const { changeLanguage, language } = useContext(LanguageContext);
  console.log(language);
  return (
    <div className={styles.container} onClick={changeLanguage}>
      <div className={styles.icon}>En</div>
      <div className={styles.icon}>Fa</div>
      <div className={language === 'Fa' ? styles.ballRight : styles.ballLeft} />
    </div>
  );
};

export default LanguageToggle;
