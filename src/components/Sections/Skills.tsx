import { skillsData } from '@constants/skills';

export default function Skills() {
  return (
    <section className='fixed bottom-0 left-0 z-30 flex w-full gap-4 overflow-hidden border-y border-dark py-3 backdrop-blur-md'>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <ul key={index} className='flex animate-scroll-text gap-4 whitespace-nowrap text-accent will-change-transform'>
            {skillsData.map((skill, index) => (
              <li key={index} className='flex items-center gap-1 text-xs'>
                {skill}
              </li>
            ))}
          </ul>
        ))}
    </section>
  );
}
