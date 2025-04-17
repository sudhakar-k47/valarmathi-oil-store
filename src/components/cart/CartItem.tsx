import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 py-4 border-b"
    >
      {/* Image */}
      <Link
        to={`/product/${item.id}`}
        className="text-md sm:text-sm font-serif font-medium text-olive-800 hover:text-olive-600 transition-colors"
      >
        <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* Details */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-grow gap-2 sm:gap-4 w-full">
        <div className="flex flex-col">
          <Link
            to={`/product/${item.id}`}
            className="text-md sm:text-sm font-serif font-medium text-olive-800 hover:text-olive-600 transition-colors"
          >
            {item.name}
          </Link>
          <p className="text-sm text-muted-foreground">
            Unit Price: ${item.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleDecreaseQuantity}
            className="p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </motion.button>

          <motion.span
            key={item.quantity}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-8 text-center font-medium"
          >
            {item.quantity}
          </motion.span>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleIncreaseQuantity}
            className="p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Price and Remove */}
        <div className="flex items-center space-x-4 min-w-[100px] justify-end">
          <span className="font-medium text-right">
            ${(item.price * item.quantity).toFixed(2)}
          </span>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRemove}
            className="text-terracotta-500 hover:text-terracotta-700 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
