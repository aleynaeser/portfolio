import ShortArrow from '@icons/short-arrow.svg';
import NavigateButton from '@components/Buttons/NavigateButton';

export default function Projects() {
  return (
    <div className='col-span-3 flex flex-col justify-between gap-10 rounded-[30px] bg-primary p-8 text-base'>
      <div>
        <div className='text-2xl font-extralight'>Projects</div>
        <div className='pt-2 text-xs text-secondary leading-6'>erp, crm, single websites, web apps, healtie, flutter apps, ui/ux</div>
      </div> 

      <NavigateButton
        Icon={ShortArrow}
        href='https://github.com/aleynaeser'
        className='navigate-projects-button flex w-3 items-center justify-center bg-base'
      />
    </div>
  );
}
