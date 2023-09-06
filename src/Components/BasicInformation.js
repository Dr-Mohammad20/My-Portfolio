'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Styles
import styles from '@/styles/profile.module.scss';
// Icons
import LocationIcon from 'public/icons/Location-Icon.png';
import EmailIcon from 'public/icons/Email-Icon.png';
import PhoneIcon from 'public/icons/Phone-Icon.png';
// React Icons
import { IconContext } from 'react-icons';
import { BsGithub } from 'react-icons/bs';
import {
  FaWhatsapp,
  FaTelegram,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
// Context
import { LanguageContext } from '@/context/LanguageContext';

const BasicInformation = () => {
  const { changeLanguage, language } = useContext(LanguageContext);

  return (
    <div className={styles.MainContainer}>
      {language === 'Fa' ? (
        <div className={`${styles.InformationContainer} font-Yekan`}>
          <div className="w-full md:w-[50%]">
            <h1 className={`${styles.Title1} font-Titr`}>اطلاعات پایه</h1>
          </div>

          <div className={styles.IContainer1}>
            <h1 className={`${styles.Title1} font-Titr`}>محمد مومنی</h1>
            <h3 className={styles.Title2}>برنامه نویس فول استک</h3>
            <h3 className={styles.Title2}>دکترای مهندسی تکنولوژی نرم افزار</h3>
          </div>

          <div className={`${styles.IContainer1} font-Yekan`}>
            <div className={styles.ICENFirstDiv}>
              <Image src={EmailIcon} width={30} height={30} alt="Email" />
              <p className={styles.Matn}>Mohammad.momeni20@yahoo.com</p>
            </div>
            <div className={styles.ICENOtherDiv}>
              <Image src={PhoneIcon} width={30} height={30} alt="Email" />
              <p className={styles.Matn} style={{ direction: 'ltr' }}>
                (+98)9201917727
              </p>
            </div>
            <div className={styles.ICENOtherDiv}>
              <Image src={LocationIcon} width={30} height={30} alt="Email" />
              <p className={styles.Matn}>خرم آباد - تهران</p>
            </div>
            <div className={styles.SocialIconDiv}>
              <Link href="https://instagram.com/web_developer_2024">
                <IconContext.Provider value={{ className: styles.Icon }}>
                  <FaInstagram />
                </IconContext.Provider>
              </Link>
              <Link href="https://telegram.me/Dr_MohammadMomeni">
                <IconContext.Provider value={{ className: styles.Icon }}>
                  <FaTelegram />
                </IconContext.Provider>
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=989361917727">
                <IconContext.Provider value={{ className: styles.Icon }}>
                  <FaWhatsapp />
                </IconContext.Provider>
              </Link>
              <Link href="https://github.com/Dr-Mohammad20">
                <IconContext.Provider value={{ className: styles.Icon }}>
                  <BsGithub />
                </IconContext.Provider>
              </Link>
              <Link href="https://www.linkedin.com/in/dr-mohammadmomeni">
                <IconContext.Provider value={{ className: styles.Icon }}>
                  <FaLinkedinIn />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
          <div className={styles.IContainer2}>
            <div>
              <p className={styles.Matn}>متولد : </p>
              <p className={styles.Matn}>1370</p>
            </div>
            <div>
              <p className={styles.Matn}>وضعیت تاهل : </p>
              <p className={styles.Matn}>مجرد</p>
            </div>
            <div>
              <p className={styles.Matn}>وضعیت سربازی : </p>
              <p className={styles.Matn}>پایان خدمت</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={styles.InformationContainer}
          style={{ borderTop: 'none' }}>
          <div className="w-full">
            <h1 className={styles.Title1}>Basic Information</h1>
          </div>
          <div className={styles.IContainer1}>
            <h1 className={styles.Title1}>Mohammad Momeni</h1>
            <h3 className={styles.Title2}>Full stack Programmer</h3>
            <h3 className={styles.Title2}>
              PhD in computer software engineering
            </h3>
          </div>

          <div className={styles.IContainer1}>
            <div className={styles.ICENFirstDiv}>
              <Image src={EmailIcon} width={30} height={30} alt="Email" />
              <p className={styles.Matn}>Mohammad.momeni20@yahoo.com</p>
            </div>
            <div className={styles.ICENOtherDiv}>
              <Image src={PhoneIcon} width={30} height={30} alt="Email" />
              <p className={styles.Matn} style={{ direction: 'ltr' }}>
                (+98)9201917727
              </p>
            </div>
            <div className={styles.ICENOtherDiv}>
              <Image src={LocationIcon} width={30} height={30} alt="Email" />
              <p className={styles.Matn}>Iran - ( Tehran - Khorramabad )</p>
            </div>
            <div className={styles.SocialIconDiv}>
              <Link href="https://instagram.com/web_developer_2024">
                <IconContext.Provider value={{ className: styles.Icon }}>
                  <FaInstagram />
                </IconContext.Provider>
              </Link>
              <Link href="https://telegram.me/Dr_MohammadMomeni">
                <IconContext.Provider value={{ className: styles.Icon }}>
                  <FaTelegram />
                </IconContext.Provider>
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=989361917727">
                <IconContext.Provider value={{ className: styles.Icon }}>
                  <FaWhatsapp />
                </IconContext.Provider>
              </Link>
              <Link href="https://github.com/Dr-Mohammad20">
                <IconContext.Provider value={{ className: styles.Icon }}>
                  <BsGithub />
                </IconContext.Provider>
              </Link>
              <Link href="https://www.linkedin.com/in/dr-mohammadmomeni">
                <IconContext.Provider value={{ className: styles.Icon }}>
                  <FaLinkedinIn />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
          <div className={styles.IContainer2}>
            <div>
              <p className={styles.Matn}>Age : </p>
              <p className={styles.Matn}>32</p>
            </div>
            <div>
              <p className={styles.Matn}>marital status : </p>
              <p className={styles.Matn}>Single</p>
            </div>
            <div>
              <p className={styles.Matn}>Gender : </p>
              <p className={styles.Matn}>Male</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicInformation;
