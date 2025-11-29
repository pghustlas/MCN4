import React from "react";
import { motion } from "motion/react";

export const Stats = () => {
  const stats = [
    { label: "Total Views", value: "25M+" },
    { label: "Active Creators", value: "100+" },
    { label: "Brand Partners", value: "50+" },
    { label: "Global Reach", value: "12" },
  ];

  return (
    <section id="stats" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <h4 className="lg:text-6xl font-oswald font-bold text-black mb-4 tracking-tight leading-none text-[60px]">
                {stat.value}
              </h4>
              <p className="text-sm font-oswald font-bold uppercase tracking-widest text-zinc-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
