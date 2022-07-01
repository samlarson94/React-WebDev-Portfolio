import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import ContinuedLearning from '../components/ContinuedLearning/ContinuedLearning';
import { Layout } from '../layout/Layout';
import { ProfileImage, Section } from '../styles/GlobalComponents';
import ProfilePicture from '../components/ProfilePicture/ProfilePicture'

const Home = () => {
  return (
    <Layout>
      <ProfilePicture />
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
      <Acomplishments />
      <ContinuedLearning />
    </Layout>
  );
};

export default Home;
