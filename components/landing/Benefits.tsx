import React from "react";
import { motion } from "motion/react";
import { BarChart3, Globe2, Smartphone, ShieldCheck, Zap, Users } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Platform Optimization",
      description: "Expert strategy for TikTok, YouTube Shorts, and Reels algorithms."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Deep insights into audience behavior and content performance."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Global Distribution",
      description: "Expand your reach across international markets and demographics."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Brand Safety",
      description: "Professional management ensuring content compliance and protection."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Viral Strategy",
      description: "Proven frameworks to maximize viral potential of every post."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Growth",
      description: "Building loyal fanbases that convert into long-term value."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Header Section */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-oswald font-bold tracking-tight mb-6 uppercase leading-none">
                Creator<br />
                <span className="text-[#C9252C]">System</span>
              </h2>
              <p className="text-lg text-zinc-600 font-medium leading-relaxed max-w-md">
                We provide the infrastructure, strategy, and support system for creators to scale from content to empire.
              </p>
            </motion.div>
          </div>

          {/* Grid Section */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="mb-6 inline-block p-4 bg-[rgba(255,255,255,0)] border border-zinc-200 shadow-sm group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-oswald font-bold uppercase mb-3 tracking-wide group-hover:text-[#C9252C] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
