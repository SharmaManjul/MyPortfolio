import About from '../components/About/About';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <About/>
      {/* <br/>
      <br/>
      <Timeline /> */}
      <br/>
      <br/>
      <Technologies />
      <br/>
      <br/>
      <Projects />
      <br/>
      <br/>
      <Acomplishments />
    </Layout>
  );
};

export default Home;
