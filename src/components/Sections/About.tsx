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
            <div className='relative inline-block text-7xl font-semibold sm:text-5xl'>
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
            <span className='absolute left-0 top-0 -z-[1] h-full w-full bg-gradient-to-b from-[var(--base)] to-[var(--neutral)]'></span>
          </div>
        </div>
      </div>

      <div className='text-pretty py-5 text-xs leading-7 text-[var(--secondary)]'>
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
