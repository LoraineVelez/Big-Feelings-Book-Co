import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, ShoppingBag, Star, CheckCircle2, Feather, Palette } from 'lucide-react';
import { BOOKS } from '../constants';

const BookProfile: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const book = BOOKS.find(b => b.id === bookId);

  if (!book) {
    return <Navigate to="/collections" replace />;
  }

  const reviews = [
    {
      text: "A beautiful bridge for children navigating loss. The imagery is as soft as the message. It has become a staple in our nighttime routine.",
      author: "Sarah M.",
      role: "Parent"
    },
    {
      text: "An essential tool for the classroom. It handles the weight of grief with incredible grace and opens up space for honest, gentle conversations.",
      author: "Mr. Julian",
      role: "Educator"
    },
    {
      text: "Finally, a book that respects a child's intelligence and emotional depth. A vital resource for supporting young hearts through transition.",
      author: "Dr. Elena",
      role: "Child Specialist"
    }
  ];

  const creators = [
    {
      name: "Loraine Velez-Lugo",
      role: "Author & Founder",
      bio: "Loraine Velez-Lugo is a Puerto Rican artist and writer and the founder of Big Feelings Book Co. She created the imprint to offer children and the adults who support them thoughtful, age-appropriate stories for navigating grief, loss, and difficult conversations, without relying on abstract or religious explanations. Her work centers on warmth, clarity, and emotional honesty, with the goal of helping families meet hard moments with care and connection.",
      image: "https://i.ibb.co/F4v7mtd1/Generated-Image-January-08-2026-4-28-PM.jpg",
      icon: <Feather size={16} />
    },
    {
      name: "Paola Acosta",
      role: "Illustrator",
      bio: "Paola Acosta is a children’s book illustrator based in Chile, working in both English and Spanish. With a background in graphic design and a passion for storytelling through illustration, her work is known for its warmth, color, and gentle sense of play. Paola brings stories to life through expressive characters and thoughtful visual worlds, creating illustrations that feel inviting, emotional, and rich with detail.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      icon: <Palette size={16} />
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Link 
          to="/collections" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand transition-colors mb-8 md:mb-12 group text-sm font-medium p-2 -ml-2"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Collections
        </Link>

        {/* Hero Section: The Universe Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative px-6 sm:px-0"
          >
            <div className="absolute -inset-8 md:-inset-10 bg-brand/5 rounded-full blur-[60px] md:blur-[80px] -z-10" />
            <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-md mx-auto rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl transform lg:-rotate-1">
              <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 md:-top-6 md:-right-6 w-14 h-14 md:w-20 md:h-20 bg-white rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center text-brand"
            >
              <Heart size={24} fill="currentColor" className="opacity-20 md:w-8 md:h-8" />
            </motion.div>
          </motion.div>

          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
                Book Biography
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-3 leading-tight text-balance">
                {book.title}
              </h1>
              <p className="text-base md:text-xl font-bold text-slate-800 mb-6 flex flex-wrap justify-center lg:justify-start items-center gap-x-2 gap-y-1">
                <span className="text-brand">Author:</span> {book.author}
                <span className="hidden sm:inline mx-1 text-slate-300">|</span>
                <span className="text-brand">Artist:</span> {book.illustrator}
              </p>
              
              <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed mb-8 px-2 sm:px-0">
                <p className="font-medium text-slate-900 italic text-balance px-4 sm:px-0">"{book.shortDescription}"</p>
                <div className="bg-slate-50 p-5 md:p-6 rounded-[24px] md:rounded-[32px] border border-slate-100 shadow-sm text-sm sm:text-base">
                  <p className="text-slate-700 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 p-4 md:p-5 bg-white backdrop-blur-sm rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm max-w-sm mx-auto lg:mx-0">
                <div className="text-left">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">Price</p>
                  <p className="text-xl md:text-2xl font-bold text-slate-900">{book.price}</p>
                </div>
                <div className="h-8 md:h-10 w-[1px] bg-slate-200" />
                <div className="text-left">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">Status</p>
                  <p className="text-xs md:text-sm font-bold text-green-600 flex items-center gap-1">
                    <CheckCircle2 size={14} /> {book.releaseDate}
                  </p>
                </div>
              </div>

              <button className="w-full sm:w-auto bg-brand text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-brand/20 hover:bg-brand-dark hover:scale-105 transition-all flex items-center justify-center gap-2 group active:scale-95 text-sm sm:text-base">
                <ShoppingBag size={20} />
                Purchase on Amazon
              </button>
            </motion.div>
          </div>
        </section>

        {/* Themes Section */}
        <section className="mb-16 md:mb-24 py-12 md:py-16 px-6 md:px-12 bg-slate-50 rounded-[32px] md:rounded-[48px] border border-slate-100 text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-2">Book Themes</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-xs md:text-base italic px-4">
            Core ideas explored in the story
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
            {book.themes.map((theme, idx) => (
              <motion.div 
                key={theme}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white px-4 md:px-6 py-2 rounded-lg md:rounded-xl shadow-sm border border-slate-100 flex items-center gap-1.5"
              >
                <Star size={10} className="text-brand fill-brand/10" />
                <span className="font-bold text-slate-800 text-[11px] md:text-sm">{theme}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Related Products Section */}
        {book.relatedProducts && book.relatedProducts.length > 0 && (
          <section className="mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-4 text-center md:text-left">
              <div>
                <span className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">The Shop</span>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 px-4 md:px-0">Related Companions</h2>
              </div>
              <p className="text-slate-500 max-w-sm text-xs md:text-sm px-8 md:px-0">
                Bring the comfort of our stories into your physical space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {book.relatedProducts.map(product => (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[24px] md:rounded-[40px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col sm:flex-row group"
                >
                  <div className="w-full sm:w-2/5 aspect-square sm:aspect-auto overflow-hidden bg-slate-50">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                    <div className="mb-3">
                      <span className="text-brand font-bold uppercase tracking-[0.2em] text-[9px]">{product.type}</span>
                      <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">{product.name}</h3>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed text-xs sm:text-sm">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                      <span className="text-lg md:text-xl font-bold text-slate-900">{product.price}</span>
                      <button className="bg-brand text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all flex items-center gap-2 active:scale-95 text-[10px] sm:text-xs">
                        <ShoppingBag size={14} />
                        Purchase
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Meet the Creators Section */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Creators</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900">Meet the Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {creators.map((creator, idx) => (
              <motion.div 
                key={creator.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start"
              >
                <img 
                  src={creator.image} 
                  alt={creator.name} 
                  className="w-20 h-20 md:w-28 md:h-28 rounded-2xl object-cover shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-brand/40">{creator.icon}</div>
                    <h3 className="text-xl font-serif font-bold text-slate-900">{creator.name}</h3>
                  </div>
                  <span className="text-brand font-bold uppercase tracking-wider text-[9px] mb-3 block">{creator.role}</span>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {creator.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="pt-12 md:pt-16 border-t border-slate-100 max-w-4xl mx-auto px-2">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 px-4 md:px-0">Reviews – What People Are Saying</h2>
          </div>

          <div className="space-y-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-b border-slate-100 pb-8 last:border-0 px-4 md:px-0"
              >
                <p className="text-slate-700 text-sm md:text-lg mb-4 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-xs md:text-sm">{review.author}</span>
                  <span className="text-slate-300 text-[10px]">•</span>
                  <span className="text-slate-500 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">{review.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookProfile;