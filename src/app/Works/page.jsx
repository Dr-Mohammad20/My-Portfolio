'use client';
import { useContext } from 'react';
// Project Data
import FaData from '../../../public/FrontData/ProjectsFa.json';
import EnData from '../../../public/FrontData/ProjectsEn.json';
// Context
import { LanguageContext } from '@/context/LanguageContext';
// Components
import ProjectCard from '@/Components/ProjectCard';
// Styles
import styles from '../../styles/works.module.scss';

const Works = () => {
  const { changeLanguage, language } = useContext(LanguageContext);
  return (
    <div className={styles.MainContainer}>
      <div className="w-[80%] min-h-[70dvh] h-fit flex justify-evenly lg:w-[95%] items-center flex-wrap gap-y-20 py-24 text-white font-Titr font-medium md:w-full md:flex-col md:flex-wrap md:justify-center md:gap-y-5 md:py-5 md:px-8">
        {language === 'Fa'
          ? FaData.projects.map((project) => (
              <ProjectCard key={project.id} ProjectData={project} />
            ))
          : EnData.projects.map((project) => (
              <ProjectCard key={project.id} ProjectData={project} />
            ))}
      </div>
    </div>
  );
};

export default Works;
