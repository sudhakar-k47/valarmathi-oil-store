
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { getFeaturedProducts } from '../../data/products';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-cream-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-olive-900">Our Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our selection of premium cold-pressed oils, crafted with traditional methods to preserve nutrients and authentic flavors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Link to="/products" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
