import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-12 pb-8 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-10 md:mb-6">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="https://i.ibb.co/svhydXRv/Big-Feelings-Color-Logo.png" 
                alt="Big Feelings Book Co." 
                className="h-32 md:h-36 w-auto"
              />
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
              We publish books that help children navigate the beautiful complexity of their emotions. Elegant stories for big hearts and curious minds.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-bold text-slate-800 mb-4 font-serif">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-slate-500 hover:text-brand transition-colors">Our Mission</Link></li>
              <li><Link to="/collections" className="text-slate-500 hover:text-brand transition-colors">The Collections</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-brand transition-colors">Get in Touch</Link></li>
              <li><Link to="/submissions" className="text-slate-500 hover:text-brand transition-colors">Submission Guidelines</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-bold text-slate-800 mb-4 font-serif text-sm">Join the Heartbeat</h4>
            <p className="text-xs text-slate-500 mb-4 px-4 md:px-0">Get updates on new releases and resources for families.</p>
            <div className="flex gap-2 w-full max-w-xs md:max-w-none">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-xs flex-1 focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
              <button className="bg-brand text-white px-4 py-2.5 rounded-lg text-xs font-semibold hover:bg-brand-dark transition-colors">
                Join
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-brand transition-colors p-1"><Instagram size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-brand transition-colors p-1"><Twitter size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-brand transition-colors p-1"><Mail size={18} /></a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-4 text-xs">
          <p className="text-slate-400 text-center md:text-left">© 2026 Big Feelings Book Co. All rights reserved. | Website by Loraine Velez-Lugo</p>
          <div className="flex items-center gap-1 text-slate-400">
            Made with <Heart size={14} className="text-brand fill-brand" /> for little readers.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;