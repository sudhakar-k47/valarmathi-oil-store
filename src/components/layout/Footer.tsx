
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-olive-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-serif mb-4">Valarmathi Oil Store</h2>
            <p className="mb-4 text-olive-100">Providing premium quality organic oils since 1998. Our cold-pressed oils retain all the natural goodness and nutrients.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-cream-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-cream-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-cream-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-cream-300 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-cream-300 transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-cream-300 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-cream-300 transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-cream-300 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-cream-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 mt-0.5 text-cream-300" />
                <span>123 Oil Press Lane, Chennai, Tamil Nadu, India - 600001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-cream-300" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-cream-300" />
                <a href="mailto:info@valarmathioils.com" className="hover:text-cream-300 transition-colors">info@valarmathioils.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-olive-800 pt-6 mt-6 text-center text-olive-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Valarmathi Oil Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
