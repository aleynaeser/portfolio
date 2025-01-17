import Link from 'next/link';
import NavigateButton from '@components/Buttons/NavigateButton';
import { socialMediaLinks } from '@constants/social-media-links';

export default function Footer() {
  return (
    <footer className='flex items-center justify-between gap-2'>
      <Link href='https://aleynaeser.tech/' className='group relative text-xs text-accent'>
        www.aleynaeser.tech
        <span className='absolute bottom-[-2] left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full'></span>
      </Link>

      <ul className='social-media-list flex gap-4'>
        {socialMediaLinks.map((item, index) => (
          <li key={index}>
            <NavigateButton
              Icon={item.icon}
              href={item.href}
              className='social-media-button flex items-center justify-center rounded-full'
            />
          </li>
        ))}
      </ul>
    </footer>
  );
}
