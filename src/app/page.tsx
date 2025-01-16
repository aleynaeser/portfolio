import About from '@components/Sections/About';
import Footer from '@components/Sections/Footer';
import Header from '@components/Sections/Header';

export default async function Portfolio() {
  return (
    <main className='grid grid-cols-12 gap-8 p-8'>
      <section className='h-[calc(100vh-110px)] col-span-5 flex flex-col justify-between gap-8'>
        <div className='flex flex-col gap-8'>
          <Header />
          <About />
        </div>

        <Footer />
      </section>

      <section className='col-span-7'>Info</section>
    </main>
  );
}
