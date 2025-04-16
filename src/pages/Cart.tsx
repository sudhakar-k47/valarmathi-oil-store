
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket, ChevronRight, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  
  const shippingCost = 4.99;
  const subtotal = getCartTotal();
  const total = subtotal + (subtotal > 0 ? shippingCost : 0);
  
  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-teal-900">Your Shopping Cart</h1>
          <div className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-teal-700 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>Cart</span>
          </div>
        </div>
        
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="border-b pb-4 mb-4">
                  <h2 className="text-lg font-serif font-medium">Cart Items ({cart.length})</h2>
                </div>
                
                <div className="divide-y">
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                
                <div className="mt-6 text-right">
                  <button 
                    onClick={clearCart}
                    className="text-sm text-salmon-500 hover:text-salmon-700 transition-colors font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-serif font-medium mb-4 border-b pb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{subtotal > 0 ? `$${shippingCost.toFixed(2)}` : 'Free'}</span>
                  </div>
                  <div className="flex justify-between font-medium text-base pt-3 border-t">
                    <span>Total</span>
                    <span className="text-salmon-600">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link to="/checkout" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md flex items-center justify-center gap-2 transition-all duration-300 mb-4 transform hover:scale-105">
                  Proceed to Checkout <ArrowRight className="h-4 w-4" />
                </Link>
                
                <Link to="/products" className="w-full block text-center text-teal-700 hover:text-teal-800 transition-colors py-2">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <ShoppingBasket className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-serif font-medium mb-3">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products" className="btn-primary inline-flex">
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
