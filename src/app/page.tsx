import About from '@components/Sections/About';
import Header from '@components/Sections/Header';

export default async function Portfolio() {
  return (
    <main className='grid grid-cols-12 gap-8 p-8'>
      <section className='col-span-5 flex flex-col gap-8'>
        <Header />

        <About />
      </section>

      <section className='col-span-7'>Info</section>
    </main>
  );
}
