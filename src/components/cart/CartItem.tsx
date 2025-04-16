
import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';

type CartItemProps = {
  item: CartItemType;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b animate-fade-in">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded overflow-hidden mr-4">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-grow pt-2 sm:pt-0">
        <Link to={`/product/${item.id}`} className="text-lg font-serif font-medium text-olive-800 hover:text-olive-600 transition-colors">
          {item.name}
        </Link>
        <p className="text-muted-foreground text-sm">Unit Price: ${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
        <button 
          onClick={handleDecreaseQuantity}
          className="p-1 rounded-full hover:bg-muted transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <span className="w-8 text-center">{item.quantity}</span>
        
        <button 
          onClick={handleIncreaseQuantity}
          className="p-1 rounded-full hover:bg-muted transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div className="flex items-center space-x-4 ml-4 mt-2 sm:mt-0">
        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
        
        <button 
          onClick={handleRemove}
          className="text-terracotta-500 hover:text-terracotta-700 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
