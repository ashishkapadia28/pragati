import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ResumePreview from '../components/ResumePreview';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <ResumePreview />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
