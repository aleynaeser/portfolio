import React from 'react';

export default function About() {
  return (
    <div>
      <div className='pt-4 text-7xl font-semibold'>
        <div>Get more out</div>

        <div className='pt-6'>
          <div className='relative w-fit p-4'>
            <div className='relative inline-block text-7xl font-bold'>
              <span>Creativity</span>
              <span
                className='absolute inset-0 inline-block h-[82px] animate-shine bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgb(213 213 213 / 80%) 50%, rgba(255, 255, 255, 0) 60%)',
                  backgroundSize: '200% 100%',
                }}
              >
                Creativity
              </span>
            </div>
            <span className='absolute left-0 top-0 -z-[1] h-full w-full bg-gradient-to-b from-[var(--background)] to-[var(--base)]'></span>
          </div>
        </div>
      </div>

      <div className='pt-9 text-xs leading-7 text-[var(--secondary)]'>
        I have about 3 years of experience in software development, focusing on frontend. I actively contributed to all
        stages of design, planning, and development in projects and expanded my mobile development skills using Flutter. I
        specialize in creating user-friendly, creative interfaces and am constantly eager to learn new technologies. My aim
        is to collaborate with a team where I can contribute my expertise and strong work ethic while gaining new
        experiences.
      </div>
    </div>
  );
}
