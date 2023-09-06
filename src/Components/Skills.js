'use client';
import React, { useContext } from 'react';
// Styles
import styles from '@/styles/profile.module.scss';
// Skills Data
import data from '../../public/FrontData/Skills.json';
// Context
import { LanguageContext } from '@/context/LanguageContext';

const Skills = () => {
  const { changeLanguage, language } = useContext(LanguageContext);

  return (
    <div className={styles.MainContainer}>
      {language === 'Fa' ? (
        <>
          <div className={styles.SkillsContainer}>
            <div className="w-full md:w-[58%]">
              <h1 className={`${styles.TitleSection} font-Titr`}>مهارتها</h1>
            </div>
            <div className={styles.SkillContainer}>
              {data.skills.map((item) => (
                <p key={item.No} className={styles.Skill}>
                  {item.Name}
                </p>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.SkillsContainer}>
            <div className="w-full">
              <h1 className={styles.TitleSection}>Skills</h1>
            </div>
            <div className="w-full flex gap-5 flex-wrap justify-center items-center">
              {data.skills.map((item) => (
                <p key={item.No} className={styles.Skill}>
                  {item.Name}
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Skills;
