import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export const BusinessSolution = () => {
  const solutions = [
    {
      title: "Influencer Marketing",
      description: "브랜드와 크리에이터의 시너지를 극대화하는 인플루언서 마케팅 솔루션",
      tags: ["Campaign Strategy", "Matching", "Performance"]
    },
    {
      title: "Live Commerce",
      description: "실시간 소통으로 구매 전환을 이끄는 전문적인 라이브 커머스 기획 및 운영",
      tags: ["Show Host", "Scenario", "Broadcasting"]
    },
    {
      title: "Branded Content",
      description: "자연스러운 노출과 높은 몰입도를 보장하는 고품질 브랜디드 콘텐츠 제작",
      tags: ["Video Production", "Storytelling", "Viral"]
    }
  ];

  return (
    <section className="py-24 bg-white text-black border-t border-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight leading-none">
              Business <br />
              <span className="text-[#C9252C]">Solution</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 lg:mt-0 text-xl font-medium max-w-md text-right lg:text-right"
          >
            성공적인 비즈니스를 위한 최적의 파트너십
          </motion.p>
        </div>

        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border-b border-black pb-8 cursor-pointer hover:pl-4 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-oswald font-bold uppercase mb-3 group-hover:text-[#C9252C] transition-colors flex items-center gap-4">
                    {solution.title}
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-lg text-zinc-700">
                    {solution.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {solution.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-3 py-1 border border-zinc-300 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-500 group-hover:border-[#C9252C] group-hover:text-[#C9252C] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
