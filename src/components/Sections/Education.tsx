import LayoutCard from '@components/LayoutCard';
import { educationData } from '@constants/education';

export default function Education() {
  return (
    <LayoutCard className='col-span-4'>
      <div>
        <div className='text-2xl font-extralight'>Education</div>
        <div className='pt-2 text-xs font-extralight italic text-secondary'>Master Degree</div>
      </div>

      <div className='flex flex-col gap-4 text-xs'>
        {educationData.map((item, index) => (
          <div key={index} className='flex items-baseline justify-between'>
            <div className='flex gap-1'>
              <span className='text-secondary'>{item.university},</span>
              <span className='font-extralight italic text-secondary'>{item.department} -</span>
              <span className='font-extralight italic text-secondary'>{item.degree}</span>
            </div>

            <div className='font-extralight text-secondary'>{item.date}</div>
          </div>
        ))}
      </div>
    </LayoutCard>
  );
}
