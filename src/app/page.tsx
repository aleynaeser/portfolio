import About from '@components/Sections/About';
import Skills from '@components/Sections/Skills';
import Footer from '@components/Sections/Footer';
import Header from '@components/Sections/Header';
import Projects from '@components/Sections/Projects';
import Education from '@components/Sections/Education';
import Experience from '@components/Sections/Experience';

export default async function Portfolio() {
  return (
    <main className='grid h-full min-h-screen grid-cols-12 gap-8 p-8'>
      <section className='md:col-span-12 col-span-5 flex flex-col gap-8'>
        <Header />
        <About />
      </section>

      <section className='md:col-span-12 md:pt-8 col-span-7'>
        <div className='grid grid-cols-7 gap-5'>
          <Education />
          <Projects />
        </div>

        <Experience />
      </section>

      <Skills />

      <Footer />
    </main>
  );
}
