
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Benefits from '../components/home/Benefits';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Testimonials />
    </Layout>
  );
};

export default Home;
