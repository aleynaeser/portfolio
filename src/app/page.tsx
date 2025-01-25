import About from '@components/Sections/About';
import Skills from '@components/Sections/Skills';
import Footer from '@components/Sections/Footer';
import Header from '@components/Sections/Header';
import Projects from '@components/Sections/Projects';
import Education from '@components/Sections/Education';
import Experience from '@components/Sections/Experience';

export default async function Portfolio() {
  return (
    <main className='relative z-10 mb-8 grid h-full min-h-screen grid-cols-12 gap-8 p-8 md:gap-6 md:p-6'>
      <section className='col-span-5 flex h-[calc(100%-24px)] flex-col justify-between gap-8 md:col-span-12'>
        <div className='flex flex-col gap-8 md:col-span-12'>
          <Header />
          <About />
        </div>

        <Footer />
      </section>

      <section className='col-span-7 md:col-span-12 md:pt-8'>
        <div className='grid grid-cols-7 gap-5'>
          <Education />
          <Projects />
        </div>

        <Experience />
      </section>

      <Skills />
    </main>
  );
}
