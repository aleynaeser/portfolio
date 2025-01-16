'use client';

import { skillsList } from '@constants/skills-list';

export default function Skills() {
  return (
    <section className='fixed bottom-0 left-0 z-30 flex w-full gap-4 overflow-hidden border-y border-neutral py-3 backdrop-blur-md'>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <ul key={index} className='animate-scroll-text flex gap-4 whitespace-nowrap will-change-transform'>
            {skillsList.map((skill, index) => (
              <li key={index} className='text-theme-color-3 flex items-center gap-1 text-xs text-accent'>
                {skill}
              </li>
            ))}
          </ul>
        ))}
    </section>
  );
}
