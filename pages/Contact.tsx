import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Phone, Mail, UserPlus, Store, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<'creator' | 'retailer' | 'general' | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', detail: '', subject: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormState({ name: '', email: '', detail: '', subject: '' });
      setInquiryType(null);
    }, 3000);
  };

  return (
    <div className="pt-44 md:pt-64 pb-16 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-brand/5 border border-brand/10 text-brand px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4"
          >
            Get in Touch
          </motion.div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-4">Let’s chat.</h1>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto px-4">
            Whether you’re an author with a story, a retailer looking to stock our titles, or just a reader saying hello—we’d love to hear from you.
          </p>
        </div>

        {/* Path Selection Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Path 1: Creators */}
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => { setInquiryType('creator'); setIsSent(false); }}
            className={`cursor-pointer p-6 md:p-8 rounded-[32px] border transition-all duration-300 flex flex-col items-center text-center ${
              inquiryType === 'creator' ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20' : 'bg-white border-slate-100 hover:border-brand/20 shadow-sm'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${inquiryType === 'creator' ? 'bg-white/20 text-white' : 'bg-brand/5 text-brand'}`}>
              <UserPlus size={24} />
            </div>
            <h3 className={`text-xl font-serif font-bold mb-2 ${inquiryType === 'creator' ? 'text-white' : 'text-slate-900'}`}>Creators</h3>
            <p className={`text-xs md:text-sm leading-relaxed mb-6 ${inquiryType === 'creator' ? 'text-white/80' : 'text-slate-500'}`}>
              For authors and illustrators looking to share their work with our imprint.
            </p>
            <div className={`mt-auto text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${inquiryType === 'creator' ? 'text-white' : 'text-brand'}`}>
              {inquiryType === 'creator' ? 'Selected' : 'Portfolio Path'} <ArrowRight size={14} />
            </div>
          </motion.div>

          {/* Path 2: Retailers */}
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => { setInquiryType('retailer'); setIsSent(false); }}
            className={`cursor-pointer p-6 md:p-8 rounded-[32px] border transition-all duration-300 flex flex-col items-center text-center ${
              inquiryType === 'retailer' ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20' : 'bg-white border-slate-100 hover:border-brand/20 shadow-sm'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${inquiryType === 'retailer' ? 'bg-white/20 text-white' : 'bg-brand/5 text-brand'}`}>
              <Store size={24} />
            </div>
            <h3 className={`text-xl font-serif font-bold mb-2 ${inquiryType === 'retailer' ? 'text-white' : 'text-slate-900'}`}>Retailers</h3>
            <p className={`text-xs md:text-sm leading-relaxed mb-6 ${inquiryType === 'retailer' ? 'text-white/80' : 'text-slate-500'}`}>
              For bookstores and boutiques interested in carrying Big Feelings Book Co.
            </p>
            <div className={`mt-auto text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${inquiryType === 'retailer' ? 'text-white' : 'text-brand'}`}>
              {inquiryType === 'retailer' ? 'Selected' : 'Wholesale Path'} <ArrowRight size={14} />
            </div>
          </motion.div>

          {/* Path 3: General */}
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => { setInquiryType('general'); setIsSent(false); }}
            className={`cursor-pointer p-6 md:p-8 rounded-[32px] border transition-all duration-300 flex flex-col items-center text-center ${
              inquiryType === 'general' ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20' : 'bg-white border-slate-100 hover:border-brand/20 shadow-sm'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${inquiryType === 'general' ? 'bg-white/20 text-white' : 'bg-brand/5 text-brand'}`}>
              <Mail size={24} />
            </div>
            <h3 className={`text-xl font-serif font-bold mb-2 ${inquiryType === 'general' ? 'text-white' : 'text-slate-900'}`}>General</h3>
            <p className={`text-xs md:text-sm leading-relaxed mb-6 ${inquiryType === 'general' ? 'text-white/80' : 'text-slate-500'}`}>
              For parents, educators, or anyone with a question about our collections.
            </p>
            <div className={`mt-auto text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${inquiryType === 'general' ? 'text-white' : 'text-brand'}`}>
              {inquiryType === 'general' ? 'Selected' : 'Say Hello'} <ArrowRight size={14} />
            </div>
          </motion.div>
        </div>

        {/* Dynamic Form and Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Side Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
              <h4 className="text-lg font-serif font-bold text-slate-900 mb-2">Other ways to connect</h4>
              
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 border border-slate-100">
                  <Mail className="text-brand" size={16} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Email Us</h5>
                  <p className="text-slate-500 text-sm">hello@bigfeelingsbooks.co</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 border border-slate-100">
                  <MapPin className="text-brand" size={16} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Our Studio</h5>
                  <p className="text-slate-500 text-sm">123 Empathy Lane, Sunshine Valley, CA</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 border border-slate-100">
                  <Phone className="text-brand" size={16} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Call Us</h5>
                  <p className="text-slate-500 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {!inquiryType ? (
                <motion.div 
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-50/50 border border-dashed border-slate-200 rounded-[32px] p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <p className="text-slate-400 italic">Please select a path above to start your message.</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-slate-50 p-6 md:p-10 rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/40 relative"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">
                      {inquiryType === 'creator' && 'Creator Inquiry'}
                      {inquiryType === 'retailer' && 'Retailer Inquiry'}
                      {inquiryType === 'general' && 'General Message'}
                    </h3>
                    <button onClick={() => setInquiryType(null)} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-brand transition-colors">Reset</button>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Name</label>
                        <input 
                          type="text" 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
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
                          className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
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
                        className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
                        placeholder={
                          inquiryType === 'creator' ? "e.g. Manuscript Title / Portfolio Link" : 
                          inquiryType === 'retailer' ? "e.g. Wholesale Request for Boutique" : 
                          "How can we help?"
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Message</label>
                      <textarea 
                        rows={4}
                        required
                        value={formState.detail}
                        onChange={(e) => setFormState({...formState, detail: e.target.value})}
                        className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none text-sm"
                        placeholder="Share your thoughts with us..."
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSent}
                      className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] text-[10px] md:text-xs uppercase tracking-widest ${
                        isSent 
                        ? 'bg-green-500 text-white' 
                        : 'bg-brand text-white hover:bg-brand-dark shadow-xl shadow-brand/20'
                      }`}
                    >
                      {isSent ? 'Message Sent!' : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;