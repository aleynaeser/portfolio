import About from '@components/Sections/About';
import Skills from '@components/Sections/Skills';
import Footer from '@components/Sections/Footer';
import Header from '@components/Sections/Header';

export default async function Portfolio() {
  return (
    <main className='grid grid-cols-12 gap-8 p-8'>
      <section className='col-span-5 flex h-[calc(100vh-100px)] flex-col justify-between gap-8 sm:col-span-12 sm:h-fit sm:gap-20'>
        <div className='flex flex-col gap-8'>
          <Header />
          <About />
        </div>

        <Footer />
      </section>

      <Skills />
      <section className='col-span-7 sm:col-span-12'>Info</section>
    </main>
  );
}
