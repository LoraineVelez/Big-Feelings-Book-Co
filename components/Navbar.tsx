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

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="https://i.ibb.co/YFcXz106/Big-Feelings-Color-Wordmark.png" 
            alt="Big Feelings Book Co." 
            className="h-10 md:h-14 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-brand relative py-1 ${location.pathname === item.path ? 'text-brand' : 'text-slate-500'}`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>
          
          <Link 
            to="/collections" 
            className="bg-brand text-white px-7 py-3 rounded-full text-sm font-bold shadow-xl shadow-brand/20 hover:bg-brand-dark hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 active:scale-95 btn-animate"
          >
            <ShoppingBag size={18} />
            Shop Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800 p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`text-lg font-bold py-3 px-4 rounded-2xl transition-all ${location.pathname === item.path ? 'bg-brand/5 text-brand' : 'text-slate-600'}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link 
                  to="/collections" 
                  className="bg-brand text-white w-full py-4 rounded-2xl text-center font-bold shadow-lg shadow-brand/20 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <ShoppingBag size={22} />
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