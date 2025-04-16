
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-olive-50 overflow-hidden">
      <div className="container-custom py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-olive-900 leading-tight">
            Pure, Organic <span className="text-terracotta-600">Cold-Pressed Oils</span>
          </h1>
          <p className="text-lg mb-8 text-olive-800 max-w-lg">
            Experience the authentic taste and health benefits of traditionally extracted oils from Valarmathi. From farm to table, we ensure the highest quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="btn-primary flex items-center justify-center sm:justify-start gap-2 text-center">
              Shop Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/about" className="btn-outline flex items-center justify-center sm:justify-start gap-2 text-center">
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 animate-slide-in">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-cream-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-terracotta-100 rounded-full opacity-60"></div>
            <img 
              src="https://i0.wp.com/mukundhaorganics.com/wp-content/uploads/2023/03/pngegg-4-2.png?fit=982%2C522&ssl=1" 
              alt="Organic Oil Collection" 
              className="w-full h-auto rounded-lg shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="20" cy="20" r="3" fill="currentColor" className="text-olive-700"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
