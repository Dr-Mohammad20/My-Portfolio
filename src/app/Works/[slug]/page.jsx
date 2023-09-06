'use client';
import React, { useEffect, useState, useContext, useRef } from 'react';
// Project Data
import FaData from '../../../../public/FrontData/ProjectsFa.json';
import EnData from '../../../../public/FrontData/ProjectsEn.json';
// Context
import { LanguageContext } from '@/context/LanguageContext';
// Styles
import styles from '@/styles/ProjectDetail.module.scss';
import Image from 'next/image';
import Link from 'next/link';
// Icon
import { TbArrowBigLeftLineFilled } from 'react-icons/tb';
import { IoMdClose } from 'react-icons/io';
// Loader
import Loader from '@/shared/Loader';

const page = (context) => {
  const [imgClass, setImgClass] = useState('hide');
  const [img, setImg] = useState('');
  const ref = useRef();
  const { changeLanguage, language } = useContext(LanguageContext);
  const [project, setProject] = useState();
  const pageSlug = context.params.slug;
  useEffect(() => {
    language === 'Fa'
      ? setProject(FaData.projects.find((item) => item.name === pageSlug))
      : setProject(EnData.projects.find((item) => item.name === pageSlug));
  });

  const PicClickHandler = (pic) => {
    setImg(pic);
    setImgClass('show');
  };
  const clickHandler = () => {
    setImgClass('hide');
  };
  return (
    <>
      {project ? (
        <div
          className="w-[90dvw] min-h-[70dvh] max-h-fit flex justify-evenly items-start relative md:flex-col "
          style={
            language === 'En' ? { direction: 'ltr' } : { direction: 'rtl' }
          }>
          <div className="w-[45%] h-full flex-col justify-start items-start text-justify md:w-full relative py-10 ">
            <div className="absolute left-0 top-0">
              <Link href="/Works">
                <TbArrowBigLeftLineFilled size={30} />
              </Link>
            </div>
            <div className="w-full flex justify-center items-center text-2xl font-bold font-Titr md:px-10">
              {project.Title}
            </div>
            <div className="w-full flex flex-wrap justify-between items-center text-lg leading-[4rem] mt-10 font-Yekan">
              {language === 'Fa' ? (
                <h1 className="w-full font-Titr text-2xl py-8">توضیحات :</h1>
              ) : (
                <h1 className="w-full font-bold text-2xl py-8">
                  Description :{' '}
                </h1>
              )}
              {project.description}
            </div>
            <div className="w-full flex flex-wrap justify-start items-center gap-10 text-lg leading-10 mt-10 font-Yekan">
              {language === 'Fa' ? (
                <h1 className="w-full font-Titr text-2xl">
                  پکیجهای استفاد شده :
                </h1>
              ) : (
                <h1 className="w-full font-bold text-2xl">
                  Pakages Use In Project :{' '}
                </h1>
              )}
              {project.packages.map((item, index) => (
                <h1 className="font-bold text-xl text-BorderColor" key={index}>
                  {item}
                </h1>
              ))}
            </div>
            <div className="w-full flex flex-wrap gap-2 justify-start items-center text-lg leading-10 mt-10 font-Yekan">
              {language === 'Fa' ? (
                <h1 className="font-Titr text-2xl">لینک پروژه :</h1>
              ) : (
                <h1 className="font-bold text-2xl">Project Link :</h1>
              )}{' '}
              <a
                className="font-bold underline text-xl text-BorderColor"
                target="_blank"
                href={project.link}>
                {project.link}
              </a>
            </div>
          </div>
          <div className="w-[45%] h-full flex-col justify-between flex-wrap items-center p-2 md:w-full ">
            <div className="w-full h-[45%] flex justify-center items-center">
              <video
                src={project.vid}
                poster="/Player-Poster.png"
                style={{ width: '100%', height: '100%' }}
                controls
              />
            </div>
            <div className=" w-full flex flex-wrap gap-5 justify-evenly items-center mt-6 md:gap-2">
              {project.img.map((pic, index) => (
                <div className="w-[30%] h-[200px] flex justify-center items-center relative md:h-[150px]">
                  <Image
                    key={index}
                    src={pic}
                    fill={true}
                    onClick={() => PicClickHandler(pic)}
                    alt="Img"
                    sizes="100vw"
                    className={styles.Img}
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className={
              imgClass === 'show' ? styles.ImageShow : styles.ImageHide
            }
            ref={ref}>
            <div className={styles.BtnClose} onClick={clickHandler}>
              <IoMdClose size={30} />
            </div>
            <Image src={img} fill={true} alt="Img" />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default page;
