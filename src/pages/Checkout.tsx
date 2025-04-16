
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Send, Loader2 } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { useCart } from '../context/CartContext';
import { toast } from '../components/ui/use-toast';
import { submitOrderToGoogleSheets, OrderFormData } from '../services/googleSheets';

type CheckoutFormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormState>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  // This would typically be stored in an environment variable
  const GOOGLE_SHEETS_WEBHOOK_URL = "YOUR_GOOGLE_SHEETS_WEBHOOK_URL";

  const shippingCost = 4.99;
  const subtotal = getCartTotal();
  const total = subtotal + (subtotal > 0 ? shippingCost : 0);

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [cart, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare order data
      const orderItems = cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      }));

      const orderData: OrderFormData = {
        ...formData,
        items: orderItems,
        totalAmount: total
      };

      const success = await submitOrderToGoogleSheets(orderData, GOOGLE_SHEETS_WEBHOOK_URL);

      if (success) {
        toast({
          title: "Order Submitted",
          description: "Thank you for your order! We'll process it right away.",
          duration: 5000,
        });

        // Clear cart and redirect to success page
        clearCart();
        navigate('/order-success');
      } else {
        toast({
          title: "Error",
          description: "There was an error processing your order. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      toast({
        title: "Error",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <button
              onClick={() => navigate('/cart')}
              className="flex items-center text-teal-600 hover:text-teal-800 transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Cart
            </button>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-teal-900">Checkout</h1>
            <p className="text-muted-foreground">Please enter your shipping and payment details to complete your order.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-xl font-serif font-medium mb-4 pb-2 border-b">Contact Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <h2 className="text-xl font-serif font-medium mb-4 pb-2 border-b">Shipping Address</h2>

                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-1">Street Address</label>
                      <input
                        type="text"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                        <input
                          type="text"
                          id="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="state" className="block text-sm font-medium mb-1">State/Province</label>
                        <input
                          type="text"
                          id="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="zip" className="block text-sm font-medium mb-1">Postal/ZIP Code</label>
                        <input
                          type="text"
                          id="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-serif font-medium mb-4 pb-2 border-b">Payment Method</h2>

                  <div className="mb-6">
                    <div className="flex items-center bg-cream-50 p-4 rounded-lg border border-cream-200">
                      <CreditCard className="h-5 w-5 text-teal-600 mr-2" />
                      <span className="font-medium">Cash on Delivery</span>
                      <span className="ml-auto text-sm text-teal-600 bg-teal-50 px-2 py-1 rounded">Only Available Option</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 disabled:opacity-70 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" /> Processing...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" /> Place Order
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-serif font-medium mb-4 border-b pb-2">Order Summary</h2>

                <div className="space-y-3 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm py-2">
                      <div className="flex">
                        <span className="font-medium">{item.quantity} × </span>
                        <span className="ml-1">{item.name}</span>
                      </div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-3 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium text-base pt-3 border-t">
                    <span>Total</span>
                    <span className="text-salmon-600">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
