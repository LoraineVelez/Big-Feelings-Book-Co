
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-1.5' : 'bg-transparent py-2 md:py-3'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="https://i.ibb.co/YFcXz106/Big-Feelings-Color-Wordmark.png" 
            alt="Big Feelings Book Co." 
            className="h-14 md:h-24 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-brand ${location.pathname === item.path ? 'text-brand' : 'text-slate-600'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/collections" 
            className="bg-brand text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-brand/20 hover:bg-brand-dark hover:shadow-brand/40 transition-all duration-300 flex items-center gap-2 active:scale-95"
          >
            <ShoppingBag size={18} />
            Shop Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800 p-2 -mr-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-slate-100 absolute top-full left-0 w-full shadow-xl"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`text-base font-semibold py-3 px-2 rounded-xl transition-colors ${location.pathname === item.path ? 'bg-brand/5 text-brand' : 'text-slate-600 active:bg-slate-50'}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 pb-2">
                <Link 
                  to="/collections" 
                  className="bg-brand text-white w-full py-3.5 rounded-xl text-center font-bold shadow-lg shadow-brand/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                >
                  <ShoppingBag size={20} />
                  Shop Collections
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
