import Link from 'next/link';

interface INavigateButton {
  text?: string;
  href: string;
  Icon?: React.FunctionComponent;
  className?: string;
}

export default function NavigateButton({ text, href, className, Icon }: INavigateButton) {
  return (
    <Link
      href={href}
      className={`navigate-button group relative flex w-fit items-center gap-2 overflow-hidden rounded-3xl border border-transparent bg-primary px-5 py-2 text-xs text-white ${className}`}
    >
      <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 transition-transform duration-1000 group-hover:translate-x-full'></span>
      {text}
      {Icon && <Icon />}
    </Link>
  );
}
