
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Benefits from '../components/home/Benefits';
import Testimonials from '../components/home/Testimonials';
import { StickyCheckoutFooter } from "@/components/sticky-checkout-footer";
import { useCart } from '../context/CartContext';


const Home = () => {
  const { getCartCount } = useCart();
  const { getCartTotal } = useCart();

  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Testimonials />
      {getCartCount() > 0 ? 
      <StickyCheckoutFooter totalItems={getCartCount()} totalPrice={getCartTotal()} checkoutUrl="/checkout" />
      : null }
    </Layout>
  );
};

export default Home;
