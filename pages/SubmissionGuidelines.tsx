import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Heart, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubmissionGuidelines: React.FC = () => {
  return (
    <div className="pt-44 md:pt-64 pb-20 px-4 md:px-6 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/about" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand transition-colors mb-8 group text-sm font-medium"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to About
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 bg-brand/5 border border-brand/10 text-brand px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
              <Sparkles size={12} />
              Open for Submissions
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Submission Guidelines</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Big Feelings Book Co., we are always looking for authentic stories and art that help children navigate life's big emotions.
            </p>
          </header>

          <section className="bg-slate-50 rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40 mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Heart className="text-brand" size={24} />
              Our Focus
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                We are interested in children's manuscripts and illustration portfolios that align with our mission of radical empathy and emotional honesty. We specifically look for work that explores:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Grief and Loss",
                  "Transition and Change",
                  "Emotional Intelligence",
                  "Hispanic & Latin American Perspectives",
                  "Diverse Family Structures",
                  "Self-Compassion"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-4 border-t border-slate-100 italic">
                We prefer stories that avoid abstract or religious explanations, focusing instead on the tangible warmth of human connection.
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">How to Submit</h3>
              <p className="text-slate-600 mb-4">
                Please send your manuscript or portfolio link to our editorial team via our contact form. We accept digital submissions only.
              </p>
              <div className="bg-brand/5 border border-brand/10 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand shadow-sm">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Ready to share?</p>
                    <p className="text-xs text-slate-500">Visit our contact page to get started.</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-brand text-white px-6 py-2.5 rounded-full font-bold text-xs hover:bg-brand-dark transition-all flex items-center gap-2 shadow-lg shadow-brand/20">
                  Go to Form <Send size={14} />
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                Note: Due to the volume of submissions, we are unable to respond to every inquiry personally. If we feel your work is a fit for our current collection, we will be in touch within 8-10 weeks.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default SubmissionGuidelines;