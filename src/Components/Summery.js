'use client';
import React, { useContext } from 'react';
// Styles
import styles from '@/styles/profile.module.scss';
// Context
import { LanguageContext } from '@/context/LanguageContext';

const Summery = () => {
  const { changeLanguage, language } = useContext(LanguageContext);

  return (
    <div className={styles.MainContainer}>
      {language === 'Fa' ? (
        <>
          <div className={styles.SummeryContainer}>
            <div className="w-full">
              <h1 className={`${styles.TitleSection} font-Titr`}>درباره من</h1>
            </div>
            <div className="w-full font-Yekan">
              <h4 className={styles.MatnSummery}>
                محمد مومنی هستم . برنامه نویس فعال فول استک وب . بسیار با انرژی
                و همیشه در تلاش به دنبال افزایش دانش و مهارتهایم در زمینه برنامه
                نویسی وب . با انگیزه بالا از آخرین تکنولوژی ها و روش های توسعه
                وب آگاهی دارم و همچنین دارای مسئولیت پزیری بالا نسبت به تعهدات
                کاری که دارم . علاقمند به کار تیمی ، تا با همکارانم در پروژ های
                جذاب و چالش برانگیز همکاری کنم و به ارتقای وبسایت ها و برنامه
                های کاربردی کمک کنم . علاقمند به یادگیری تکنولوژ های جدید و به
                روز در زمینه توسعه وب .
              </h4>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.SummeryContainer}>
            <div className="w-full">
              <h1 className={styles.TitleSection}>Summery</h1>
            </div>
            <div className="w-full">
              <h4 className={styles.MatnSummery}>
                I am Mohammad Momeni. Active full stack web developer. Very
                energetic and always trying to increase my knowledge and skills
                in the field of web programming. With high motivation, I am
                aware of the latest technologies and methods of web development,
                and I also have high responsibility towards my work obligations.
                Interested in team work, to collaborate with my colleagues in
                interesting and challenging projects and to help improve
                websites and applications. Interested in learning new and
                updated technologies in the field of web development.
              </h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Summery;
