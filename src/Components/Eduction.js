'use client';
import React, { useContext } from 'react';
// Styles
import styles from '@/styles/profile.module.scss';
// Context
import { LanguageContext } from '@/context/LanguageContext';

const Eduction = () => {
  const { changeLanguage, language } = useContext(LanguageContext);

  return (
    <div className={styles.MainContainer}>
      {language === 'Fa' ? (
        <>
          <div className={`${styles.EductionContainer} font-Yekan`}>
            <div className="w-full">
              <h1 className={`${styles.TitleSection} font-Titr`}>
                سوابق تحصیلی
              </h1>
            </div>
            <div className={styles.EductionItem}>
              <div>
                <h3 className={styles.EductionTitle}>
                  دکترای مهندسی تکنولوژی نرم افزار
                </h3>
              </div>
              <div className={styles.GPAContainer}>
                <h5 className={styles.MatnEduction}>معدل :</h5>
                <h5 className={styles.MatnEduction}>18/67</h5>
              </div>
            </div>
            <div className={styles.EductionItem}>
              <div>
                <h3 className={styles.EductionTitle}>
                  کارشناسی ارشد نرم افزار کامپیوتر
                </h3>
              </div>
              <div className={styles.GPAContainer}>
                <h5 className={styles.MatnEduction}>معدل : </h5>
                <h5 className={styles.MatnEduction}>16/54</h5>
              </div>
            </div>
            <div className={styles.EductionItem}>
              <div>
                <h3 className={styles.EductionTitle}>
                  کارشناسی نرم افزار کامپیوتر
                </h3>
              </div>
              <div className={styles.GPAContainer}>
                <h5 className={styles.MatnEduction}>معدل : </h5>
                <h5 className={styles.MatnEduction}>17/50</h5>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.EductionContainer}>
            <div className="w-full">
              <h1 className={styles.TitleSection}>Eduction</h1>
            </div>
            <div className={styles.EductionItem}>
              <div>
                <h3 className={styles.EductionTitle}>
                  PhD: Software engineering
                </h3>
              </div>
              <div className={styles.GPAContainer}>
                <h5 className={styles.MatnEduction}>GPA :</h5>
                <h5 className={styles.MatnEduction}>18/67</h5>
              </div>
            </div>
            <div className={styles.EductionItem}>
              <div>
                <h3 className={styles.EductionTitle}>
                  Master: Software engineering
                </h3>
              </div>
              <div className={styles.GPAContainer}>
                <h5 className={styles.MatnEduction}>GPA :</h5>
                <h5 className={styles.MatnEduction}>16/54</h5>
              </div>
            </div>
            <div className={styles.EductionItem}>
              <div>
                <h3 className={styles.EductionTitle}>
                  Bachelor: Software engineering
                </h3>
              </div>
              <div className={styles.GPAContainer}>
                <h5 className={styles.MatnEduction}>GPA :</h5>
                <h5 className={styles.MatnEduction}>17/50</h5>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Eduction;
