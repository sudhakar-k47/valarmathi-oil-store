
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const { getCartCount } = useCart();
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Remove initial load state after animation completes
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 2000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`py-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-background'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className={`text-2xl font-serif font-bold ${initialLoad ? 'logo-animation' : ''}`}>
            <span className="text-teal-800">Valarmathi</span>{' '}
            <span className="text-salmon-500">Oil Store</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-foreground hover:text-teal-700 transition-all duration-300 hover:scale-105 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/products" className="text-foreground hover:text-teal-700 transition-all duration-300 hover:scale-105 relative group">
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="text-foreground hover:text-teal-700 transition-all duration-300 hover:scale-105 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="text-foreground hover:text-teal-700 transition-all duration-300 hover:scale-105 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Cart and Mobile Menu Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative group">
            <div className="p-2 bg-cream-50 rounded-full group-hover:bg-cream-100 transition-colors">
              <ShoppingCart className="h-5 w-5 text-teal-700 group-hover:text-teal-800 transition-colors" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-salmon-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce-in">
                  {getCartCount()}
                </span>
              )}
            </div>
          </Link>
          
          <button onClick={toggleMenu} className="md:hidden p-2 bg-cream-50 rounded-full hover:bg-cream-100 transition-colors">
            {isMenuOpen ? (
              <X className="h-5 w-5 text-teal-700" />
            ) : (
              <Menu className="h-5 w-5 text-teal-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md animate-slide-in z-50">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-teal-700 transition-colors py-2 border-b border-muted" onClick={toggleMenu}>Home</Link>
            <Link to="/products" className="text-foreground hover:text-teal-700 transition-colors py-2 border-b border-muted" onClick={toggleMenu}>Products</Link>
            <Link to="/about" className="text-foreground hover:text-teal-700 transition-colors py-2 border-b border-muted" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="text-foreground hover:text-teal-700 transition-colors py-2" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
