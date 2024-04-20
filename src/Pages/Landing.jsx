import { LandingHeader } from '../app/components/Header/LandingHeader';
import { Home } from '../app/components/Home';
import { Hero } from '../app/components/Hero';
import { About } from '../app/components/About';
// import { RiceSession } from '../app/components/RiceSession';

export const Landing = () => {
  
  return (
    <>
      <LandingHeader />
      <Home />
      <Hero />
      <About />
      {/* <RiceSession /> */}
    </>
  );
};
