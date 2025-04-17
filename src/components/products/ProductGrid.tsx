
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../data/products';
import { StickyCheckoutFooter } from "@/components/sticky-checkout-footer";
import { useCart } from '../../context/CartContext';

type ProductGridProps = {
  products: Product[];
};


const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {

  const { getCartCount } = useCart();
  const { getCartTotal } = useCart();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}

{getCartCount() > 0 ? 
      <StickyCheckoutFooter totalItems={getCartCount()} totalPrice={getCartTotal()} checkoutUrl="/checkout" />
      : null }


</div>
  );
};

export default ProductGrid;
