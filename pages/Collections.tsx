import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BOOKS } from '../constants';

const Collections: React.FC = () => {
  const currentBook = BOOKS[0];

  return (
    <div className="pt-44 md:pt-64 pb-24 px-6 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-brand/5 border border-brand/10 text-brand px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} />
            The Current Collection
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Our Library</h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Stories designed to hold space for the conversations that matter most. We believe every child deserves a bridge to their own big feelings.
          </p>
        </header>

        {/* Featured Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[48px] p-8 md:p-16 border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[100px] -z-0 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-6 bg-brand/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src={currentBook.coverImage} 
                  alt={currentBook.title}
                  className="w-full max-w-sm mx-auto rounded-[32px] shadow-2xl transform lg:rotate-2 group-hover:rotate-0 transition-all duration-700 border-4 border-white"
                />
              </div>
            </div>

            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <Heart size={16} className="text-brand fill-brand/20" />
                <span className="text-brand font-bold uppercase tracking-[0.4em] text-[10px]">Primary Title</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4 leading-tight">{currentBook.title}</h2>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-wide mb-8">
                By {currentBook.author} · Art by {currentBook.illustrator}
              </p>
              
              <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 mb-10 text-balance shadow-sm">
                <p className="text-lg md:text-2xl text-slate-900 font-medium italic leading-relaxed mb-4">
                  "{currentBook.shortDescription}"
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  A gentle exploration of love, absence, and the enduring connection that remains when words feel small.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link 
                  to={`/collections/${currentBook.id}`}
                  className="bg-brand text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-brand/20 hover:bg-brand-dark hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95 btn-animate"
                >
                  Enter the Story
                  <BookOpen size={20} />
                </Link>
                <button className="bg-white border border-slate-200 text-slate-600 px-10 py-5 rounded-full font-bold hover:bg-slate-50 transition-all">
                  Purchase on Amazon
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Placeholder */}
        <div className="mt-20 pt-20 border-t border-slate-100 text-center">
          <p className="text-slate-400 font-serif italic text-lg">More stories coming into the light soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Collections;