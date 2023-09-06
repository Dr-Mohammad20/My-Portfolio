// scr rendering by add "use client" to this components
'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
// Styles
import styles from '@/styles/footer.module.scss';
// Context
import { LanguageContext } from '@/context/LanguageContext';
// React Icons
import { IconContext } from 'react-icons';
import { BsGithub } from 'react-icons/bs';
import {
  FaWhatsapp,
  FaTelegram,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
const Footer = () => {
  const { changeLanguage, language } = useContext(LanguageContext);
  return (
    <div className={styles.MainContainer}>
      <div
        className={styles.container}
        style={language === 'En' ? { direction: 'ltr' } : { direction: 'rtl' }}>
        {language === 'En' ? (
          <div>@2023 Dr-Mohammad Momeni. All right reserved</div>
        ) : (
          <div>تمامی حقوق این سایت محفوظ می باشد.</div>
        )}
        <div className={styles.iconContainer}>
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
    </div>
  );
};

export default Footer;
