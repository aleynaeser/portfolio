import { educationData } from '@constants/education';

export default function Education() {
  return (
    <div className='col-span-4 flex h-full flex-col justify-between gap-7 rounded-[30px] bg-neutral p-8'>
      <div className='text-2xl font-extralight'>Education</div>

      <div className='flex flex-col gap-4 text-xs'>
        {educationData.map((item, index) => (
          <div key={index} className='flex items-baseline justify-between'>
            <div className='flex gap-1'>
              <span className='text-dark'>{item.university},</span>
              <span className='font-extralight italic text-secondary'>{item.department} -</span>
              <span className='font-extralight italic text-secondary'>{item.degree}</span>
            </div>

            <div className='text-accent'>{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
