'use client';
import React, { useContext, useEffect } from 'react';
// Styles
import styles from '@/styles/profile.module.scss';
// Context
import { LanguageContext } from '@/context/LanguageContext';
// Components
import BasicInformation from '@/Components/BasicInformation';
import Summery from '@/Components/Summery';
import Skills from '@/Components/Skills';
import Eduction from '@/Components/Eduction';
import Language from '@/Components/Language';
import WorkExperience from '@/Components/WorkExperience';
import Course from '@/Components/Course';
// Animation Package Import
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Animations
import { ZoomInAnimation, OpacityAnimation } from '@/shared/Animations';
// ******************************

const Profile = () => {
  const { changeLanguage, language } = useContext(LanguageContext);

  // transation on scroll code
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const control5 = useAnimation();
  const control6 = useAnimation();
  const control7 = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();

  useEffect(() => {
    if (inView1) {
      control1.start('visible');
    } else {
      control1.start('hidden');
    }
    if (inView2) {
      control2.start('visible');
    } else {
      control2.start('hidden');
    }
    if (inView3) {
      control3.start('visible');
    } else {
      control3.start('hidden');
    }
    if (inView4) {
      control4.start('visible');
    } else {
      control4.start('hidden');
    }
    if (inView5) {
      control5.start('visible');
    } else {
      control5.start('hidden');
    }
    if (inView6) {
      control6.start('visible');
    } else {
      control6.start('hidden');
    }
    if (inView7) {
      control7.start('visible');
    } else {
      control7.start('hidden');
    }
  }, [
    control1,
    control2,
    control3,
    control4,
    control5,
    control6,
    control7,
    inView1,
    inView2,
    inView3,
    inView4,
    inView5,
    inView6,
    inView7,
  ]);
  // ******************************
  return (
    <div
      className={styles.MainContainer}
      style={language === 'En' ? { direction: 'ltr' } : { direction: 'rtl' }}>
      <div className={styles.container}>
        <motion.div
          ref={ref1}
          initial="hidden"
          variants={OpacityAnimation}
          animate={control1}>
          <BasicInformation />
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          variants={ZoomInAnimation}
          animate={control2}>
          <Summery />
        </motion.div>
        <motion.div
          ref={ref3}
          initial="hidden"
          variants={OpacityAnimation}
          animate={control3}>
          <Skills />
        </motion.div>
        <motion.div
          ref={ref4}
          initial="hidden"
          variants={ZoomInAnimation}
          animate={control4}>
          <WorkExperience />
        </motion.div>
        <motion.div
          ref={ref5}
          initial="hidden"
          variants={OpacityAnimation}
          animate={control5}>
          <Language />
        </motion.div>
        <motion.div
          ref={ref6}
          initial="hidden"
          variants={ZoomInAnimation}
          animate={control6}>
          <Eduction />
        </motion.div>
        <motion.div
          ref={ref7}
          initial="hidden"
          variants={OpacityAnimation}
          animate={control7}>
          <Course />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
