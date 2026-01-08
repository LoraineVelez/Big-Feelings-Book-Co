import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, BookOpen, Users, ArrowRight, Globe, Palette, Feather, Send, CheckCircle2, ChevronDown, Store, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<'creator' | 'retailer' | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', detail: '', subject: '' });
  const [isSent, setIsSent] = useState(false);

  // Fix: changed parameter 'Leeds' to 'e' to match standard event naming and avoid 'not found' errors
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormState({ name: '', email: '', detail: '', subject: '' });
      setInquiryType(null);
    }, 3000);
  };

  const authors = [
    {
      name: "Loraine Velez-Lugo",
      role: "Founder & Author",
      bio: "Loraine Velez-Lugo is a Puerto Rican artist and writer and the founder of Big Feelings Book Co. She created the imprint to offer children and the adults who support them thoughtful, age-appropriate stories for navigating grief, loss, and difficult conversations, without relying on abstract or religious explanations. Her work centers on warmth, clarity, and emotional honesty, with the goal of helping families meet hard moments with care and connection.",
      image: "https://i.ibb.co/F4v7mtd1/Generated-Image-January-08-2026-4-28-PM.jpg"
    }
  ];

  const illustrators = [
    {
      name: "Paola Acosta",
      role: "Illustrator",
      bio: "Paola Acosta is a children’s book illustrator based in Chile, working in both English and Spanish. With a background in graphic design and a passion for storytelling through illustration, her work is known for its warmth, color, and gentle sense of play. Paola brings stories to life through expressive characters and thoughtful visual worlds, creating illustrations that feel inviting, emotional, and rich with detail.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="pt-20 md:pt-24 pb-0 bg-white">
      {/* 1. Who We Are */}
      <section className="px-5 md:px-6 py-6 md:py-10 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-brand/5 rounded-full blur-[80px] md:blur-[100px] -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-brand/5 border border-brand/10 text-brand px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-6"
          >
            <Sparkles size={12} className="md:w-3.5 md:h-3.5" />
            Who We Are
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-serif font-bold text-slate-900 mb-4 md:mb-6 leading-tight text-balance"
          >
            An independent home for <span className="text-brand">big</span> emotions.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-xl text-slate-600 leading-relaxed space-y-3 md:space-y-4 max-w-3xl mx-auto"
          >
            <p>
              Big Feelings Book Co. is an independent children’s publisher dedicated to thoughtful, story-driven work that supports emotional understanding. 
            </p>
            <p>
              By centering Latin American and Hispanic voices and art, we provide children with mirrors for their own experiences and windows into the diverse beauty of the human heart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Why We Do It */}
      <section className="bg-white py-8 md:py-12 px-5 md:px-6 border-y border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-[280px] sm:max-w-md mx-auto">
              <div className="absolute inset-0 bg-brand/5 rounded-[32px] md:rounded-[40px] rotate-3 -z-10" />
              <img 
                src="https://i.ibb.co/p6M8bDvH/2024-Refelection-Blog-Web-Hero.jpg" 
                alt="Supportive connection" 
                className="w-full h-full object-cover rounded-[32px] md:rounded-[40px] shadow-xl md:shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-700" 
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="text-brand font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-2 block">Why We Do It</span>
            <h2 className="text-2xl md:text-5xl font-serif font-bold text-slate-900 mb-4 md:mb-6 leading-tight text-balance">
              Creating tools for the conversations that matter.
            </h2>
            <div className="space-y-3 md:space-y-4 text-slate-600 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Navigating difficult moments can be overwhelming. We exist to create gentle tools that help bridge that gap for children and their caregivers.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left max-w-sm sm:max-w-none mx-auto lg:mx-0">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center text-brand shrink-0"><Heart size={12} fill="currentColor" /></div>
                  <span className="text-xs md:text-sm font-semibold text-slate-800">Radical Empathy</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center text-brand shrink-0"><Globe size={12} fill="currentColor" /></div>
                  <span className="text-xs md:text-sm font-semibold text-slate-800">Cultural Fidelity</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center text-brand shrink-0"><BookOpen size={12} fill="currentColor" /></div>
                  <span className="text-xs md:text-sm font-semibold text-slate-800">Honest Dialogue</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center text-brand shrink-0"><Users size={12} fill="currentColor" /></div>
                  <span className="text-xs md:text-sm font-semibold text-slate-800">Community Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Team */}
      <section className="py-8 md:py-12 px-5 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-5xl font-serif font-bold text-slate-900 mb-2">Our Creative Team</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xs md:text-lg">The voices and hands behind every story we tell.</p>
          </div>

          <div className="flex flex-col gap-8 md:gap-12 items-center">
            {/* Authors Section */}
            <div className="w-full max-w-4xl">
              <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-brand/5 rounded-lg flex items-center justify-center text-brand">
                  <Feather size={18} />
                </div>
                <h3 className="text-base md:text-lg font-serif font-bold text-slate-800 uppercase tracking-widest">Authors</h3>
              </div>
              <div className="flex justify-center">
                {authors.map((author, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-6 items-center md:items-start p-6 rounded-[32px] bg-white border border-slate-100 max-w-3xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img src={author.image} alt={author.name} className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shrink-0" />
                    <div className="text-center md:text-left">
                      <Link to="/author/loraine-velez-lugo" className="hover:text-brand transition-colors">
                        <h4 className="text-lg font-serif font-bold text-slate-900 mb-0.5">{author.name}</h4>
                      </Link>
                      <span className="text-brand font-bold uppercase tracking-wider text-[9px] mb-2 block">{author.role}</span>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{author.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Illustrators Section */}
            <div className="w-full max-w-4xl">
              <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-brand/5 rounded-lg flex items-center justify-center text-brand">
                  <Palette size={18} />
                </div>
                <h3 className="text-base md:text-lg font-serif font-bold text-slate-900 uppercase tracking-widest">Illustrators</h3>
              </div>
              <div className="flex justify-center">
                {illustrators.map((artist, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-6 items-center md:items-start p-6 rounded-[32px] bg-white border border-slate-100 max-w-3xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img src={artist.image} alt={artist.name} className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shrink-0" />
                    <div className="text-center md:text-left">
                      <h4 className="text-lg font-serif font-bold text-slate-900 mb-0.5">{artist.name}</h4>
                      <span className="text-brand font-bold uppercase tracking-wider text-[9px] mb-2 block">{artist.role}</span>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{artist.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Collaborative Options Section */}
      <section className="py-8 md:py-12 px-5 md:px-6 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] mb-2 block">Collaborate</span>
            <h2 className="text-2xl md:text-5xl font-serif font-bold text-slate-900 mb-3 leading-tight">Join Our Journey</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xs md:text-base px-4">
              We're building a collection that celebrates emotional intelligence. Whether you create stories or share them, we'd love to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Card 1: Creators */}
            <motion.div 
              whileHover={{ y: -5 }}
              onClick={() => { setInquiryType('creator'); setIsSent(false); window.scrollTo(0, window.pageYOffset + 300); }}
              className={`cursor-pointer p-6 md:p-8 rounded-[32px] md:rounded-[40px] border transition-all duration-300 flex flex-col items-center text-center ${
                inquiryType === 'creator' ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20' : 'bg-white border-slate-100 hover:border-brand/20 shadow-sm'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${inquiryType === 'creator' ? 'bg-white/20 text-white' : 'bg-brand/5 text-brand'}`}>
                <UserPlus size={28} />
              </div>
              <h3 className={`text-xl md:text-2xl font-serif font-bold mb-2 ${inquiryType === 'creator' ? 'text-white' : 'text-slate-900'}`}>For Creators</h3>
              <p className={`text-sm md:text-base leading-relaxed mb-4 ${inquiryType === 'creator' ? 'text-white/80' : 'text-slate-600'}`}>
                Are you an author or illustrator with a story that honors a child's inner world? We're looking for authentic voices to join our imprint.
              </p>
              <div className={`mt-auto text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${inquiryType === 'creator' ? 'text-white' : 'text-brand'}`}>
                {inquiryType === 'creator' ? 'Form Opened' : 'Submit Portfolio'} <ArrowRight size={14} />
              </div>
            </motion.div>

            {/* Card 2: Retailers */}
            <motion.div 
              whileHover={{ y: -5 }}
              onClick={() => { setInquiryType('retailer'); setIsSent(false); window.scrollTo(0, window.pageYOffset + 300); }}
              className={`cursor-pointer p-6 md:p-8 rounded-[32px] md:rounded-[40px] border transition-all duration-300 flex flex-col items-center text-center ${
                inquiryType === 'retailer' ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20' : 'bg-white border-slate-100 hover:border-brand/20 shadow-sm'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${inquiryType === 'retailer' ? 'bg-white/20 text-white' : 'bg-brand/5 text-brand'}`}>
                <Store size={28} />
              </div>
              <h3 className={`text-xl md:text-2xl font-serif font-bold mb-2 ${inquiryType === 'retailer' ? 'text-white' : 'text-slate-900'}`}>For Retailers</h3>
              <p className={`text-sm md:text-base leading-relaxed mb-4 ${inquiryType === 'retailer' ? 'text-white/80' : 'text-slate-600'}`}>
                Interested in stocking Big Feelings Book Co. titles or the Comfort Collection? We partner with bookstores, boutiques, and specialists.
              </p>
              <div className={`mt-auto text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${inquiryType === 'retailer' ? 'text-white' : 'text-brand'}`}>
                {inquiryType === 'retailer' ? 'Form Opened' : 'Wholesale Inquiry'} <ArrowRight size={14} />
              </div>
            </motion.div>
          </div>

          {/* Dynamic Inquiry Form */}
          <AnimatePresence>
            {inquiryType && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-8 max-w-2xl mx-auto"
              >
                <div className="bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/40 relative">
                  <button 
                    onClick={() => setInquiryType(null)} 
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 text-xs font-bold uppercase tracking-wider"
                  >
                    Close
                  </button>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-6">
                    {inquiryType === 'creator' ? 'Creator Submission' : 'Retailer Inquiry'}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Name</label>
                        <input 
                          type="text" 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Email</label>
                        <input 
                          type="email" 
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
                          placeholder="hello@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Subject</label>
                      <input 
                        type="text" 
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
                        placeholder={inquiryType === 'creator' ? "Manuscript Title / Portfolio Link" : "Wholesale Request for Boutique Name"}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Message</label>
                      <textarea 
                        rows={3}
                        required
                        value={formState.detail}
                        onChange={(e) => setFormState({...formState, detail: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none text-sm"
                        placeholder="Tell us a little about yourself and your interest..."
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSent}
                      className={`w-full py-3.5 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] text-[10px] md:text-xs uppercase tracking-widest ${
                        isSent 
                        ? 'bg-green-500 text-white' 
                        : 'bg-brand text-white hover:bg-brand-dark shadow-xl shadow-brand/20'
                      }`}
                    >
                      {isSent ? 'Sent Successfully!' : (
                        <>
                          Send Inquiry <Send size={14} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-10 md:py-14 bg-brand text-white text-center px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-6 text-balance">Explore stories for tender hearts.</h2>
          <Link 
            to="/collections" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-brand px-8 py-3.5 md:px-10 md:py-4 rounded-full font-bold shadow-2xl hover:bg-slate-50 hover:scale-105 transition-all group active:scale-95 text-xs md:text-base uppercase tracking-wider sm:normal-case sm:tracking-normal"
          >
            Browse the Library
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;