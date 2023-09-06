'use client';
import React, { useContext } from 'react';
// Styles
import styles from '@/styles/profile.module.scss';
// Context
import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link';

const WorkExperience = () => {
  const { changeLanguage, language } = useContext(LanguageContext);

  return (
    <div className={styles.MainContainer}>
      {language === 'Fa' ? (
        <>
          <div className={`${styles.WorksExperienceContainer} font-Yekan`}>
            <div className="w-full">
              <h1 className={`${styles.TitleSection} font-Titr`}>سوابق کاری</h1>
            </div>
            <div className="w-full justify-center text-center">
              <h2 className={styles.WorkTitleFa}>
                برای دیدن تمامی پروژه ها ، نمونه کارها و توضیحات آنها{'   '}
                <Link href="/Works" className="text-BorderColor">
                  اینجا
                </Link>
                {'   '} کلیک بکنید
              </h2>
            </div>
            <div className="w-full">
              <div className={styles.WorkFaNameContainer}>
                <h3 className={styles.WorkTitleFa}>فریلنسر - طراحی وب</h3>
              </div>
              <div className={styles.WorkItemContainer}>
                <h3 className={styles.MatnFaWork}>
                  طراحی فول استک و ریسپانسیو صفحات وب
                </h3>
                <h2 className={styles.MatnFaWork}>سال 1400 تا کنون</h2>
              </div>
            </div>
            <div className="w-full">
              <div className={styles.WorkFaNameContainer}>
                <h3 className={styles.WorkTitleFa}>نویان ارتباط - نصاب شبکه</h3>
              </div>
              <div className={styles.WorkItemContainer}>
                <h3 className={styles.MatnFaWork}>
                  نصب مودم های سیم کارتی برای مدارس روستایی استان لرستان
                </h3>
                <h2 className={styles.MatnFaWork}>سال 1399</h2>
              </div>
            </div>
            <div className="w-full">
              <div className={styles.WorkFaNameContainer}>
                <h3 className={styles.WorkTitleFa}>
                  اداره شیلات شهرستان خرم آباد – نصاب شبکه
                </h3>
              </div>
              <div className={styles.WorkItemContainer}>
                <h3 className={styles.MatnFaWork}>
                  کابل کشی و نصب فیزیکی شبکه اداره شیلات شهرستان خرم آباد
                </h3>
                <h2 className={styles.MatnFaWork}>سال 1390</h2>
              </div>
            </div>
            <div className="w-full">
              <div className={styles.WorkFaNameContainer}>
                <h3 className={styles.WorkTitleFa}>
                  جهاد کشاورزی استان لرستان - انفورماتیک
                </h3>
              </div>
              <div className={styles.WorkItemContainer}>
                <h3 className={styles.MatnFaWork}>
                  مسئول پشتیبانی و تعمیرات سخت افزار سیستم های کامپیوتری و شبکه
                </h3>
                <h2 className={styles.MatnFaWork}>سال 1390</h2>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.WorksExperienceContainer}>
            <div className="w-full">
              <h1 className={styles.TitleSection}>Work experience</h1>
            </div>
            <div className="w-full justify-center text-center">
              <h2 className={styles.WorkEnNameContainer}>
                To see all projects, portfolios and their descriptions, click{' '}
                <Link href="/Works" className="text-BorderColor underline">
                  here
                </Link>
              </h2>
            </div>
            <div className="w-full">
              <div className={styles.WorkItemContainer}>
                <h3 className={styles.WorkEnNameContainer}>
                  Web Developer - Freelancer
                </h3>
                <h2 className={styles.Matn}>18 Months</h2>
              </div>
            </div>
            <div className="w-full">
              <div className={styles.WorkItemContainer}>
                <h3 className={styles.WorkEnNameContainer}>
                  Informatics - Jihad Agriculture
                </h3>
                <h2 className={styles.Matn}>1 Years</h2>
              </div>
            </div>
            <div className="w-full">
              <div className={styles.WorkItemContainer}>
                <h3 className={styles.WorkEnNameContainer}>
                  Network Installer - Office Fisheries
                </h3>
                <h2 className={styles.Matn}>3 Month</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WorkExperience;
