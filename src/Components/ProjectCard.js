'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Styles
import styles from '@/styles/works.module.scss';
// Context
import { LanguageContext } from '@/context/LanguageContext';

const Project = ({ ProjectData }) => {
  const { changeLanguage, language } = useContext(LanguageContext);
  const data = ProjectData;
  return (
    <Link href={`/Works/${data.name}`}>
      <div className={styles.Items}>
        <div className={styles.ImgContainer}>
          <Image
            alt="img"
            src={data.img[0]}
            fill
            sizes="max-width: 768px"
            className={styles.Img}
          />
        </div>
        <div
          className={styles.Info}
          style={
            language === 'En' ? { direction: 'ltr' } : { direction: 'rtl' }
          }>
          <div className={styles.MatnDiv}>
            <h1 className="font-Titr font-bold text-xl xl:text-base md:text-sm sm:text-[8px] lg:text-xl w-full flex justify-start text-start px-1 text-BorderColor">
              {data.Title}
            </h1>
            <p className="font-Yekan text-sm">{data.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
