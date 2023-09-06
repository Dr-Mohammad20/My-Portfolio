'use client';
import React, { useContext } from 'react';
// Styles
import styles from '@/styles/profile.module.scss';
// Context
import { LanguageContext } from '@/context/LanguageContext';

const Language = () => {
  const { changeLanguage, language } = useContext(LanguageContext);

  return (
    <>
      {language === 'Fa' ? (
        <div className={styles.MainContainer}>
          <div className={`${styles.LanguageContainer} font-Yekan`}>
            <div className="w-full">
              <h1 className={`${styles.TitleSection} font-Titr`}>زبان</h1>
            </div>
            <div className={`${styles.LanguageNameContainer} font-Titr`}>
              <h3 className={styles.EductionTitle}>انگلیسی</h3>
            </div>
            <div className={styles.LanguageSkillContainer}>
              <div className={styles.LanguageSkill}>
                <h4 className={styles.MatnLanguage}>مهارت خواندن</h4>
                <div className={styles.LanguageSoccerContainer}>
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerNo} />
                  <div className={styles.LanguageSoccerNo} />
                </div>
              </div>
              <div className={styles.LanguageSkill}>
                <h4 className={styles.MatnLanguage}>مهارت نوشتن</h4>
                <div className={styles.LanguageSoccerContainer}>
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerNo} />
                  <div className={styles.LanguageSoccerNo} />
                </div>
              </div>
              <div className={styles.LanguageSkill}>
                <h4 className={styles.MatnLanguage}>مهارت گفتاری</h4>
                <div className={styles.LanguageSoccerContainer}>
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerNo} />
                  <div className={styles.LanguageSoccerNo} />
                  <div className={styles.LanguageSoccerNo} />
                </div>
              </div>
              <div className={styles.LanguageSkill}>
                <h4 className={styles.MatnLanguage}>مهارت شنیداری</h4>
                <div className={styles.LanguageSoccerContainer}>
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerNo} />
                  <div className={styles.LanguageSoccerNo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.MainContainer}>
          <div className={styles.LanguageContainer}>
            <div className="w-full">
              <h1 className={styles.Title1}>Language</h1>
            </div>
            <div className={styles.LanguageNameContainer}>
              <h3 className={styles.Title2} style={{ padding: '3rem 0 0 0' }}>
                English
              </h3>
            </div>
            <div className={styles.LanguageSkillContainer}>
              <div className={styles.LanguageSkill}>
                <h4 className={styles.MatnLanguage}>Reading</h4>
                <div className={styles.LanguageSoccerContainer}>
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerNo} />
                  <div className={styles.LanguageSoccerNo} />
                </div>
              </div>
              <div className={styles.LanguageSkill}>
                <h4 className={styles.MatnLanguage}>Writing</h4>
                <div className={styles.LanguageSoccerContainer}>
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerNo} />
                  <div className={styles.LanguageSoccerNo} />
                </div>
              </div>
              <div className={styles.LanguageSkill}>
                <h4 className={styles.MatnLanguage}>Speaking</h4>
                <div className={styles.LanguageSoccerContainer}>
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerNo} />
                  <div className={styles.LanguageSoccerNo} />
                  <div className={styles.LanguageSoccerNo} />
                </div>
              </div>
              <div className={styles.LanguageSkill}>
                <h4 className={styles.MatnLanguage}>Listening</h4>
                <div className={styles.LanguageSoccerContainer}>
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerOk} />
                  <div className={styles.LanguageSoccerNo} />
                  <div className={styles.LanguageSoccerNo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Language;
