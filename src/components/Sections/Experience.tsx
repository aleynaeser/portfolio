'use client';

import { useMemo, useState } from 'react';
import { experienceData } from '@constants/experience';
import LayoutCard from '@components/LayoutCard';
import classNames from 'classnames';

//TODO: Make absolute circle side, update mobile ui based on active, add active circle animation

export default function Experience() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);

  const currentExperience = useMemo(() => experienceData[activeIndex], [activeIndex]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % experienceData.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <LayoutCard className='mt-5 overflow-hidden'>
      <div className='flex flex-col gap-4'>
        <div className='text-2xl'>
          {currentExperience.company} - <span className='font-extralight italic'>{currentExperience.title}</span>
        </div>

        <div className='max-w-[400px] text-pretty text-xs leading-7 text-secondary'>{currentExperience.description}</div>
      </div>

      <div className='relative flex h-80 flex-col items-end gap-5'>
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

        <div className='absolute -bottom-0 -right-0 -top-0 flex flex-col gap-5'>
          <div>
            {experienceData.map((experience, index) => (
              <div
                key={index}
                className={classNames(`flex w-fit flex-col gap-2 whitespace-nowrap`, {
                  'mr-12 mt-10': index === 0,
                  'mr-24 mt-1': index === 1,
                  // 'mr-96 mt-16': index === 2,
                  // 'mr-80 mt-20': index === 3,
                })}
              >
                <div className='h-2 w-2 rounded-full bg-accent'></div>
                <div
                  className={classNames(`text-xs text-accent`, {
                    // 'mr-4': index === 0,
                    // '-mt-1 mr-72': index === 1,
                    // 'mr-96 mt-16': index === 2,
                    // 'mr-80 mt-20': index === 3,
                  })}
                >
                  {experience.date}
                </div>
              </div>
            ))}
          </div>

          <div className='absolute -bottom-20 -right-20 -z-10 h-96 w-96 rounded-full border border-dark'></div>
        </div>
      </div>
    </LayoutCard>
  );
}
