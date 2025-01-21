import { educationData } from '@constants/education';

export default function Education() {
  return (
    <div className='col-span-4 flex h-full flex-col justify-between gap-7 rounded-[30px] bg-primary p-8 text-base'>
      <div className='text-2xl font-extralight'>Education</div>

      <div className='flex flex-col gap-4 text-xs'>
        {educationData.map((item, index) => (
          <div key={index} className='flex items-baseline justify-between'>
            <div className='flex gap-1'>
              <span className='text-secondary'>{item.university},</span>
              <span className='font-extralight italic text-secondary'>{item.department} -</span>
              <span className='font-extralight italic text-dark'>{item.degree}</span>
            </div>

            <div className='text-dark'>{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
