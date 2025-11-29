import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Recruitment = () => {
  return (
    <section className="py-32 bg-[#C9252C] text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border-2 border-white/10 mix-blend-overlay" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border-2 border-white/10 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm font-medium mb-6 uppercase tracking-widest">
            Recruitment
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold uppercase tracking-tight leading-none mb-8">
            Make Your Possibility<br />
            <span className="text-black">Reality</span>
          </h2>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-12 text-white/90">
            당신의 재능이 세상의 중심이 되는 순간,<br className="hidden md:block" />
            우리가 함께하겠습니다. 지금 바로 도전하세요.
          </p>
          
          <motion.button
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-black text-white px-10 py-5 text-lg font-bold uppercase tracking-wider hover:bg-white hover:text-[#C9252C] transition-colors inline-flex items-center gap-3"
          >
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
