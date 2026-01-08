import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Heart, MessageSquareQuote } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthorBio: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-5 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/about" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand transition-colors mb-6 group text-sm font-medium"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Our Mission
        </Link>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full md:w-2/5 aspect-[4/5] rounded-[32px] overflow-hidden mx-auto md:mx-0 max-w-sm md:max-w-none"
          >
            <img src="https://i.ibb.co/F4v7mtd1/Generated-Image-January-08-2026-4-28-PM.jpg" alt="Loraine Velez-Lugo" className="w-full h-full object-cover" />
          </motion.div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-1 text-balance">Loraine Velez-Lugo</h1>
              <p className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Author & Founder</p>
              
              <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
                <p>
                  Loraine Velez-Lugo is a Puerto Rican artist and writer and the founder of Big Feelings Book Co. She created the imprint to offer children and the adults who support them thoughtful, age-appropriate stories for navigating grief, loss, and difficult conversations, without relying on abstract explanations. Her work centers on warmth, clarity, and emotional honesty, with the goal of helping families meet hard moments with care and connection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-brand/5 rounded-[32px] p-8 md:p-10 border border-brand/10 relative overflow-hidden mb-12 md:mb-16"
        >
          <MessageSquareQuote size={100} className="absolute -top-8 -right-8 text-brand/5 -z-10" />
          <h2 className="text-lg md:text-2xl font-serif font-bold text-slate-900 mb-6 italic leading-relaxed">
            "I write for the moments when simple answers aren't enough—where love needs a language that respects a child's capacity for deep feeling."
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-10 h-1 bg-brand rounded-full" />
            <p className="font-bold text-slate-800 text-base md:text-lg">Loraine Velez-Lugo</p>
          </div>
        </motion.div>

        {/* Debut Book Feature */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6 text-center">Debut Title</h2>
          <div className="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-2xl shadow-slate-100 flex flex-col sm:flex-row gap-8 md:gap-10 items-center max-w-2xl mx-auto">
            <div className="w-32 sm:w-44 aspect-[3/4] rounded-xl overflow-hidden shadow-xl shrink-0 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://i.ibb.co/LzM2sqGj/Chat-GPT-Image-Jan-8-2026-05-06-21-PM.png" alt="Where Love Goes" className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-1">Where Love Goes</h3>
              <p className="text-brand font-semibold mb-4 italic text-xs">Illustrated by Paola Acosta</p>
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                The inaugural title of Big Feelings Book Co. A lyrical journey through the landscape of childhood grief.
              </p>
              <Link to="/collections/where-love-goes" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-xs hover:bg-brand transition-all">
                View in Collection <BookOpen size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;