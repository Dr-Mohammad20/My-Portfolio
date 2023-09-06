'use client';
import React, { useContext } from 'react';
// Styles
import styles from '@/styles/profile.module.scss';
// Context
import { LanguageContext } from '@/context/LanguageContext';

const Course = () => {
  const { changeLanguage, language } = useContext(LanguageContext);

  return (
    <div className={styles.MainContainer}>
      {language === 'Fa' ? (
        <>
          <div className={`${styles.CourseContainer} font-Yekan`}>
            <div className="w-full">
              <h1 className={`${styles.TitleSection} font-Titr`}>دوره ها</h1>
            </div>
            <div className="w-full">
              <div className={styles.CourseNameContainer}>
                <h1 className={styles.CourseTitle}>
                  دوره برنامه نویسی فرانت اند React
                </h1>
              </div>
              <div className={styles.CourseItemContainer}>
                <h1 className={styles.MatnCourse}>
                  <p>مدرس دوره : </p>
                  <p>میلاد اعظمی</p>
                </h1>
                <h2 className={styles.MatnCourse}>
                  <p>لینک مرتبط : </p>
                  <a href="https://botostart.ir">https://botostart.ir</a>
                </h2>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Course;
