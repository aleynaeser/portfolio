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
    <LayoutCard className='mt-5 overflow-hidden'>
      <div className='pb-20 flex flex-col gap-4'>
        <div className='text-2xl'>
          {currentExperience.company} - <span className='font-extralight italic'>{currentExperience.title}</span>
        </div>

        <div className='max-w-[410px] text-pretty text-xs leading-7 text-secondary'>{currentExperience.description}</div>
      </div>

      <div className='relative flex h-80 justify-end gap-5'>
        <div className='flex flex-col items-end gap-5'>
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={classNames(`w-70 flex flex-col gap-2`, {
                '-mt-14 mr-12': index === 0,
                '-mt-1 mr-72': index === 1,
                'mr-96 mt-16': index === 2,
                'mr-80 mt-20': index === 3,
              })}
            >
              <div>{experience.company}</div>
              <div className='text-xs font-extralight italic'>{experience.title}</div>
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
                  '-right-16 top-[16px] flex-col': index === 0,
                  'right-5 top-[101px]': index === 1,
                  'right-14 top-48': index === 2,
                  'right-9 top-72': index === 3,
                })}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: isActive ? 1.2 : 1 }}
                  transition={{ type: 'spring', duration: 0.5, damping: 10, stiffness: 100 }}
                  className={classNames('relative h-3 w-3 rounded-full bg-accent duration-300 ease-in-out', {
                    'bg-primary': isActive,
                  })}
                ></motion.div>

                <div className={classNames(`text-xs text-accent duration-300 ease-in-out`, { 'text-secondary': isActive })}>
                  {experience.date}
                </div>
              </div>
            );
          })}
        </div>

        <div className='absolute -bottom-[84px] -right-20 -z-10 h-96 w-96 rounded-full border border-secondary'></div>
      </div>
    </LayoutCard>
  );
}
