import LongArrow from '@icons/long-arrow.svg';
import NavigateButton from '@components/Buttons/NavigateButton';

export default function About() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-7xl font-semibold sm:text-5xl'>
        <div>Get more out</div>

        <div className='flex items-center gap-7 pt-6'>
          <LongArrow />

          <div className='relative w-fit p-6'>
            <div
              className='inline-block h-full min-h-[80px] animate-shine bg-clip-text text-7xl font-semibold text-[#e3e3e3a4] sm:text-5xl'
              style={{
                backgroundImage:
                  'linear-gradient(120deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 70%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
              }}
            >
              Creativity
            </div>
            <div className='absolute left-0 top-0 -z-[1] h-full w-full bg-gradient-to-b from-base to-neutral'></div>
          </div>
        </div>
      </div>

      <div className='text-pretty py-5 text-xs leading-7 text-secondary'>
        I have about 3 years of experience in software development, focusing on frontend. I actively contributed to all
        stages of design, planning, and development in projects and expanded my mobile development skills using Flutter. I
        specialize in creating user-friendly, creative interfaces and am constantly eager to learn new technologies. My aim
        is to collaborate with a team where I can contribute my expertise and strong work ethic while gaining new
        experiences.
      </div>

      <NavigateButton text='Get Touch' href='https://www.linkedin.com/in/aleyna-eser/' />
    </div>
  );
}
