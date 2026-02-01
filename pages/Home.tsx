import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Users, Sun, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BOOKS } from '../constants';

const Home: React.FC = () => {
  const featuredBook = BOOKS[0]; // Where Love Goes

  return (
    <div className="overflow-hidden bg-white">
      {/* 1. Hero Introduction */}
      <section className="relative pt-40 pb-8 md:pt-64 md:pb-10 px-4 md:px-6">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
            className="absolute top-10 right-[-10%] w-[250px] md:w-[600px] h-[250px] md:h-[600px] rounded-full bg-brand blur-[60px] md:blur-[140px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-brand/5 border border-brand/10 text-brand px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles size={12} />
              Welcome to Big Feelings Book Co.
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15] mb-5 text-balance">
              Stories for <span className="text-brand italic">tender</span> hearts and the grown-ups who guide them.
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              We are a children’s publishing imprint dedicated to creating gentle, beautifully-crafted stories that act as a bridge for the conversations that matter most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <Link to="/collections" className="bg-brand text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-brand/20 hover:bg-brand-dark hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                Browse our Books
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative order-1 lg:order-2 px-6 sm:px-0"
          >
            <div className="relative z-10 aspect-[3/4] max-w-[280px] sm:max-w-sm mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl shadow-slate-300 transform rotate-1 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://i.ibb.co/sJQyCdYm/Generated-Image-January-08-2026-5-45-PM.png" 
                alt="Caregiver and child shared moment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-yellow-50 rounded-[20px] sm:rounded-[24px] -z-10 rotate-12" />
            <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-brand/10 rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* 2. Audience Section */}
      <section className="py-10 md:py-14 px-4 md:px-6 bg-white border-t border-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-5 leading-tight text-balance px-2">
            For the grown-ups who hold space for children.
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10 px-4">
            We support parents, caregivers, educators, and specialists who walk alongside young children through life's most meaningful moments.
          </p>
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 opacity-80">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand shadow-sm">
                <Users size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Parents</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-brand shadow-sm">
                <Sun size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Educators</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-brand/5 rounded-2xl flex items-center justify-center text-brand shadow-sm">
                <Heart size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Work: Main Focus */}
      <section className="py-12 md:py-16 bg-white px-4 md:px-6 border-y border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="bg-brand/10 text-brand font-bold uppercase tracking-[0.4em] text-[10px] px-3 py-1 rounded-full">Featured Launch</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-4 px-2">Where Love Goes</h2>
            <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full opacity-30"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group px-4 sm:px-0"
            >
              <div className="absolute -inset-4 bg-brand/5 rounded-[32px] sm:rounded-[40px] blur-2xl -z-10 group-hover:bg-brand/10 transition-colors" />
              <img 
                src={featuredBook.coverImage} 
                alt={featuredBook.title}
                className="w-full max-w-[280px] sm:max-w-sm mx-auto rounded-[24px] sm:rounded-3xl shadow-2xl transform sm:-rotate-1 sm:group-hover:rotate-0 transition-transform duration-700"
              />
            </motion.div>

            <div className="text-center lg:text-left px-2 sm:px-0">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3 leading-tight text-balance">
                A gentle journey through the landscape of childhood grief.
              </h3>
              <p className="text-xs sm:text-sm font-bold text-brand uppercase tracking-wider mb-6">
                By Loraine Velez-Lugo · Illustrated by Paola Acosta
              </p>
              
              <div className="space-y-5 text-base md:text-lg text-slate-600 leading-relaxed mb-8 px-2 sm:px-0">
                <p>
                  Little Willow remembers the quiet, loving moments shared with Grand Willow, and discovers where that love stays.
                </p>
                <p>
                  A story for families and caregivers to sit together in remembrance and understanding.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <Link to={`/collections/${featuredBook.id}`} className="bg-brand text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-brand/20 hover:bg-brand-dark hover:scale-105 transition-all flex items-center justify-center gap-2 group active:scale-95">
                  Purchase the Book
                  <ShoppingBag size={18} />
                </Link>
                <Link to={`/collections/${featuredBook.id}`} className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 group active:scale-95">
                  Learn More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Story: The Mission */}
      <section className="py-12 md:py-16 bg-white px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-brand/5 rounded-full blur-[80px] sm:blur-[100px] -z-10" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left px-4 sm:px-0">
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block">Our Story</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-5 leading-tight text-balance">
              Finding words for the unexplainable.
            </h2>
            <div className="space-y-4 text-base md:text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                Big Feelings Book Co. was born from a personal need to find a soft language for childhood loss.
              </p>
              <p>
                Every child deserves a story that meets them with honesty, respect, and deep human warmth.
              </p>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand font-bold hover:gap-3 transition-all">
              Learn about our mission <ArrowRight size={18} />
            </Link>
          </div>
          <div className="order-1 md:order-2 px-6 sm:px-0">
            <div className="relative aspect-square max-w-[280px] sm:max-w-sm mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-blue-50 rounded-[32px] sm:rounded-[40px] -rotate-2" />
              <img 
                src="https://i.ibb.co/5hpsvTbF/Generated-Image-January-08-2026-5-23-PM.png" 
                alt="Human connection" 
                className="absolute inset-0 w-full h-full object-cover rounded-[32px] sm:rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Story Elements & Products */}
      <section className="py-12 md:py-16 bg-white px-4 md:px-6 border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-[10px]">The Comfort Collection</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mt-3 leading-tight text-balance px-4">Beyond the Pages</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed px-6">
              Tangible tools designed to help children feel safe as they navigate big emotions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-2 sm:px-0">
            {BOOKS[0].relatedProducts?.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col group h-full"
              >
                <div className="w-full aspect-square overflow-hidden bg-slate-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="text-brand font-bold uppercase tracking-[0.2em] text-[9px]">{product.type}</span>
                    <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">{product.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-lg sm:text-xl font-bold text-slate-900">{product.price}</span>
                    <button className="bg-brand text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all flex items-center gap-2 active:scale-95 group/btn text-xs sm:text-sm">
                      <ShoppingBag size={16} />
                      Purchase
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;