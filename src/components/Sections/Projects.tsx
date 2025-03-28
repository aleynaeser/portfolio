import ShortArrow from '@icons/short-arrow.svg';
import NavigateButton from '@components/Buttons/NavigateButton';
import LayoutCard from '@components/LayoutCard';

export default function Projects() {
  return (
    <LayoutCard className='xs:col-span-7 col-span-3 sm:col-span-2'>
      <div>
        <h3 className='text-2xl font-extralight'>Projects</h3>
        <p className='pt-2 text-xs font-extralight italic leading-6 text-secondary'>
          erp, crm, single websites, web apps, healtie, flutter apps, ui/ux
        </p>
      </div>

      <NavigateButton
        Icon={ShortArrow}
        href='https://github.com/aleynaeser?tab=repositories'
        className='navigate-projects-button flex w-3 items-center justify-center bg-base'
      />
    </LayoutCard>
  );
}
