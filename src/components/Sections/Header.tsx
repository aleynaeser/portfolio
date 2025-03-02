export default function Header() {
  return (
    <header className='flex items-baseline justify-between'>
      <div className='flex items-center justify-center gap-3'>
        <div className='h-8 border-r border-primary pr-3 text-3xl font-semibold'>AE.</div>

        <div className='flex flex-col gap-[2px]'>
          <h2 className='font-medium'>Aleyna Eser</h2>
          <h3 className='text-xs font-extralight text-secondary'>Frontend Developer</h3>
        </div>
      </div>

      <p className='text-xs font-extralight text-secondary'>3 years of experience</p>
    </header>
  );
}
