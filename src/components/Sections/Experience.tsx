'use client';

import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { experienceData } from '@constants/experience';
import LayoutCard from '@components/LayoutCard';
import classNames from 'classnames';

//TODO: Improve calculations
//TODO: Make absolute circle side, update mobile ui based on active, add active circle animation

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentExperience = useMemo(() => experienceData[activeIndex], [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % experienceData.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutCard className='mt-5 h-[calc(100vh-330px)] min-h-[530px] gap-0 md:h-[570px]'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-2xl'>
          {currentExperience.company} - <span className='font-extralight italic'>{currentExperience.title}</span>
        </h3>

        <p className='max-w-lg text-pretty text-xs leading-7 text-secondary'>{currentExperience.description}</p>
      </div>

      <div className='relative flex h-80 justify-end gap-5'>
        <div className='flex flex-col items-end gap-5'>
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={classNames(`w-70 flex flex-col gap-2`, {
                '-mt-14 mr-12 md:-mr-4 md:mt-4': index === 0,
                '-mt-1 mr-72 md:mr-44 md:mt-4': index === 1,
                'mr-96 mt-16 md:mr-56 md:mt-8': index === 2,
                'mr-80 mt-20 md:mr-52 md:mt-6': index === 3,
              })}
            >
              <div>{experience.company}</div>
              <div className='text-xs font-extralight italic md:text-[10px]'>{experience.title}</div>
            </div>
          ))}
        </div>

        <div className='absolute right-28'>
          {experienceData.map((experience, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={classNames(`absolute flex w-fit items-center gap-5 whitespace-nowrap`, {
                  '-right-16 top-[16px] flex-col md:-right-28 md:top-[94px]': index === 0,
                  'right-5 top-[101px] md:-right-[66px] md:top-[150px]': index === 1,
                  'right-14 top-48 md:-right-9 md:top-[210px]': index === 2,
                  'right-9 top-72 md:-right-[52px] md:top-[300px]': index === 3,
                })}
              >
                <motion.button
                  initial={{ scale: 1 }}
                  animate={{ scale: isActive ? 1.2 : 1 }}
                  transition={{ type: 'spring', duration: 0.5, damping: 10, stiffness: 100 }}
                  className={classNames('relative h-3 w-3 rounded-full bg-accent duration-300 ease-in-out md:h-2 md:w-2', {
                    'bg-primary': isActive,
                  })}
                  type='button'
                  onClick={() => setActiveIndex(index)}
                ></motion.button>

                <div
                  className={classNames(`text-xs text-accent duration-300 ease-in-out md:text-[10px]`, {
                    'text-secondary': isActive,
                  })}
                >
                  {experience.date}
                </div>
              </div>
            );
          })}
        </div>

        <div className='absolute -bottom-[84px] -right-20 -z-10 h-96 w-96 rounded-full border border-secondary md:-bottom-[65px] md:-right-24 md:h-72 md:w-72'></div>
      </div>
    </LayoutCard>
  );
}
