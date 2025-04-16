
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import CategoryFilter from '../components/products/CategoryFilter';
import ProductGrid from '../components/products/ProductGrid';
import { getProductsByCategory } from '../data/products';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState(getProductsByCategory('all'));

  useEffect(() => {
    setProducts(getProductsByCategory(activeCategory));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="mb-10 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-olive-900">Our Products</h1>
          <p className="text-muted-foreground max-w-3xl">
            Explore our range of premium cold-pressed oils, crafted with traditional methods to preserve nutrients and authentic flavors.
          </p>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <CategoryFilter 
            activeCategory={activeCategory} 
            onCategoryChange={handleCategoryChange} 
          />
        </div>
        
        {products.length > 0 ? (
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ProductGrid products={products} />
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-lg text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
