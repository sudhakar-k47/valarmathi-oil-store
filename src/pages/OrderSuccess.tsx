
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { useCart } from '../context/CartContext';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  
  useEffect(() => {
    // Redirect to home if user accessed this page without placing an order
    if (cart.length > 0) {
      navigate('/');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [cart, navigate]);
  
  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 text-teal-600 animate-bounce-in">
            <CheckCircle className="h-8 w-8" />
          </div>
          
          <h1 className="text-3xl font-serif font-bold mb-4 text-teal-900 animate-text-reveal">Order Successful!</h1>
          
          <div className="text-muted-foreground mb-8 animate-text-reveal" style={{ animationDelay: "0.1s" }}>
            <p className="mb-2">Thank you for your purchase. Your order has been received and is being processed.</p>
            <p>We'll send you a confirmation email with your order details shortly.</p>
          </div>
          
          <div className="space-y-4 animate-text-reveal" style={{ animationDelay: "0.2s" }}>
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingBag className="h-5 w-5" /> Continue Shopping
            </Link>
            
            <div className="pt-4">
              <Link 
                to="/" 
                className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors"
              >
                Return to Home <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;
