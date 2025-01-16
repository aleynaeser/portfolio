import Link from 'next/link';
import NavigateButton from '@components/Buttons/NavigateButton';
import { socialMediaList } from '@constants/social-media-list';
import Figma from '@icons/figma.svg';
export default function Footer() {
  return (
    <footer className='flex items-center justify-between gap-2'>
      <Link href='https://aleynaeser.tech/' className='group relative text-xs text-[var(--accent)]'>
        www.aleynaeser.tech
        <span className='absolute bottom-[-2] left-0 h-[1px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full'></span>
      </Link>

      <Figma />

      <ul className='social-media-list flex gap-4'>
        {socialMediaList.map((item, index) => (
          <li key={index}>
            <NavigateButton Icon={item.icon} href={item.href} className='flex items-center justify-center rounded-full' />
          </li>
        ))}
      </ul>
    </footer>
  );
}
