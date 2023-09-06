'use client';
import Image from 'next/image';
import { useContext } from 'react';
// Styles
import styles from '@/styles/home.module.scss';
// Context
import { LanguageContext } from '@/context/LanguageContext';
// Image
import Me from 'public/Me/Me.jpg';

export default function Home() {
  const { changeLanguage, language } = useContext(LanguageContext);

  return (
    <div className={styles.MainContainer}>
      <div
        className={styles.container}
        style={language === 'En' ? { direction: 'ltr' } : { direction: 'rtl' }}>
        <div className={styles.ImgContainer}>
          <Image
            alt="Me"
            sizes="(max-width: 768px) 80svw, (max-width: 1200px) 50svw, 33svw"
            src={Me}
            fill
            className={styles.Img}
          />
        </div>
        {language === 'En' ? (
          <div className="flex-col justify-center items-center">
            <h1 className="text-[50px] font-bold md:text-[35px]">Full Stack</h1>
            <h1 className="text-[80px] font-bold text-BorderColor mt-10 ml-40 md:text-[50px] md:mt-5 md:ml-14">
              Programmer
            </h1>
          </div>
        ) : (
          <div className="flex-col justify-center items-center">
            <h1 className="text-[80px] font-Titr text-BorderColor md:text-[50px]">
              برنامه نویس
            </h1>
            <h1 className="text-[50px] font-Yekan mt-10 mr-60 md:text-[35px] md:mt-5 md:mr-28">
              فول استک
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
