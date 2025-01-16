export default function Header() {
  return (
    <header className='flex items-baseline justify-between'>
      <div className='flex items-center justify-center gap-3'>
        <div className='h-8 border-r border-[var(--primary)] pr-3 text-3xl font-semibold'>AE.</div>

        <div className='flex flex-col gap-[2px]'>
          <div className='font-medium'>Aleyna Eser</div>
          <div className='text-xs font-extralight text-[var(--secondary)]'>Frontend Developer</div>
        </div>
      </div>

      <div className='text-xs font-extralight text-[var(--secondary)]'>3 years of experience</div>
    </header>
  );
}
