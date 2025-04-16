
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../ui/hover-card';
import { toast } from '../ui/use-toast';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cart, updateQuantity, removeFromCart } = useCart();
  const [isHovering, setIsHovering] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity === 0) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      
      toast({
        title: "Added to cart",
        description: `${product.name} added to your cart`,
        duration: 2000,
      });
    }
  };
  
  const handleIncreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity === 0) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    } else {
      updateQuantity(product.id, quantity + 1);
    }
  };
  
  const handleDecreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity === 1) {
      removeFromCart(product.id);
    } else if (quantity > 0) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div 
      className="product-card bg-white rounded-lg overflow-hidden shadow animate-fade-in h-full flex flex-col"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link to={`/product/${product.id}`} className="flex flex-col h-full">
        <div className="product-card-content flex flex-col h-full">
          <div className="product-card-image-container relative group aspect-square overflow-hidden">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img 
              src={product.image} 
              alt={product.name} 
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            
            {/* Quick view on hover */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-teal-700">
                Quick View
              </div>
            </div>
          </div>
          
          <div className="p-4 flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-serif font-medium text-teal-800 group-hover:text-teal-600 transition-colors">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.size}</p>
              </div>
              <p className="text-lg font-medium text-salmon-500">${product.price.toFixed(2)}</p>
            </div>
            
            <p className="text-sm text-foreground line-clamp-2 mb-4">{product.description}</p>
          </div>
          
          <div className="p-4 pt-0 mt-auto">
            {quantity === 0 ? (
              <button 
                onClick={handleAddToCart} 
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center justify-between border border-teal-200 rounded overflow-hidden">
                <button 
                  onClick={handleDecreaseQuantity}
                  className="p-2 bg-teal-50 hover:bg-teal-100 text-teal-700 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                
                <span className="font-medium text-center flex-grow">{quantity}</span>
                
                <button 
                  onClick={handleIncreaseQuantity}
                  className="p-2 bg-teal-50 hover:bg-teal-100 text-teal-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
