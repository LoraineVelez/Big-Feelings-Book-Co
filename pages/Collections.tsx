
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BOOKS } from '../constants';

const Collections: React.FC = () => {
  // Focus exclusively on the primary title
  const currentBook = BOOKS[0];

  return (
    <div className="pt-28 pb-20 px-4 md:px-6 min-h-[85vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <header className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-brand/5 border border-brand/10 text-brand px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-5"
          >
            <Sparkles size={12} />
            Our Current Collection
          </motion.div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-5 text-balance">The Library</h1>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto px-4">
            Discover carefully crafted stories designed to hold space for the conversations that matter most.
          </p>
        </header>

        {/* Featured Title Biography Card */}
        <section className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[32px] md:rounded-[48px] p-6 md:p-12 lg:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden flex flex-col lg:row-reverse lg:flex-row gap-10 md:gap-12 items-center"
          >
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-brand/5 rounded-full blur-[80px] md:blur-[100px] -z-0" />
            
            <div className="relative z-10 w-full lg:w-2/5 group px-4 sm:px-0">
              <div className="absolute inset-0 bg-brand/10 rounded-[24px] md:rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              <img 
                src={currentBook.coverImage} 
                alt={currentBook.title}
                className="w-full max-w-[260px] sm:max-w-sm mx-auto rounded-[24px] md:rounded-[32px] shadow-2xl transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-700 border-4 border-white"
              />
            </div>

            <div className="relative z-10 flex-1 text-center lg:text-left px-2 sm:px-0">
              <span className="text-brand font-bold uppercase tracking-[0.4em] text-[10px] mb-3 block">New Release</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-2 leading-tight">{currentBook.title}</h2>
              <p className="text-brand font-bold text-xs sm:text-sm uppercase tracking-wide mb-6">
                By {currentBook.author} · Illustrated by {currentBook.illustrator}
              </p>
              <div className="space-y-4 mb-10 text-balance px-2 sm:px-0">
                <p className="text-base md:text-xl text-slate-900 font-medium italic leading-relaxed">
                  "{currentBook.shortDescription}"
                </p>
                <p className="text-sm md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Follow Little Willow as she discovers where love goes when Grand Willow is no longer there.
                </p>
              </div>
              
              <Link 
                to={`/collections/${currentBook.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-brand/20 hover:bg-brand-dark hover:scale-105 transition-all group active:scale-95"
              >
                Enter the book's world
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Collections;
