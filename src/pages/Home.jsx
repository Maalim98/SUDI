import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <ImpactStats />
      <Partners />
      <Testimonials />
    </div>
  );
};

export default Home; 