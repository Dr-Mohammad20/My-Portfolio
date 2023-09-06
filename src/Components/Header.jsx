import Link from 'next/link';
import React, { useContext } from 'react';
import Image from 'next/image';
// Styles
import styles from '@/styles/header.module.scss';
// Components
import ThemeToggle from '@/Components/ThemeToggle';
import LanguageToggle from '@/Components/LanguageToggle';
// Context
import { LanguageContext } from '@/context/LanguageContext';
// Images
import WebsiteLogo from 'public/Logo/WebSiteLogo.png';

const Header = () => {
  const { changeLanguage, language } = useContext(LanguageContext);
  return (
    <div className={styles.MainContainer}>
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <div className="flex-col flex-wrap justify-center items-center text-center w-[10%] md:w-[25%]">
            <Link href="/Works">
              <div className="w-full flex justify-center items-center text-center md:text-base sm:text-xs">
                {language === 'En' ? <>Works</> : <>پروژه ها</>}
              </div>
              <div className="w-full flex justify-center items-center text-center">
                <div className={styles.Line} />
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center align-middle w-[80%] md:w-[50%]">
            <Link href="/">
              <div className="flex justify-center items-center align-middle w-[90px] h-[90px] relative">
                <Image
                  className={styles.Logo}
                  src={WebsiteLogo}
                  width={85}
                  height={85}
                  alt="Logo"
                />
              </div>
            </Link>
          </div>
          <div className="flex-col flex-wrap justify-center items-center text-center w-[10%] md:w-[25%]">
            <Link href="/Profile">
              <div className="w-full flex justify-center items-center text-center md:text-base sm:text-xs">
                {language === 'En' ? <>Profile</> : <>پروفایل</>}
              </div>
              <div className="w-full flex justify-center items-center text-center">
                <div className={styles.Line} />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.toggleContainer}>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
