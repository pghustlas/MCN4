import React from "react";
import { motion } from "motion/react";
import { User, Video, MessageSquare, BarChart2 } from "lucide-react";

export const GrowthSystem = () => {
  const systems = [
    {
      id: "01",
      icon: <User className="w-6 h-6" />,
      title: "1:1 Management",
      titleKo: "전담 매니징",
      description: "크리에이터별 전담 매니저 배정을 통해 채널 성향에 맞는 맞춤형 케어를 제공합니다."
    },
    {
      id: "02",
      icon: <Video className="w-6 h-6" />,
      title: "Equipment Support",
      titleKo: "장비 지원",
      description: "고퀄리티 콘텐츠 제작을 위한 전문 방송 장비와 기술 지원을 아끼지 않습니다."
    },
    {
      id: "03",
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Content Feedback",
      titleKo: "콘텐츠 피드백",
      description: "트렌드 분석 전문가들의 피드백을 통해 콘텐츠의 질을 지속적으로 향상시킵니다."
    },
    {
      id: "04",
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Data Analysis",
      titleKo: "데이터 분석",
      description: "시청자 데이터와 알고리즘 분석을 토대로 가장 효율적인 성장 전략을 수립합니다."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight leading-none mb-4">
            Growth <span className="text-[#C9252C]">System</span>
          </h2>
          <p className="text-xl text-zinc-800 font-medium max-w-2xl">
            크리에이터의 잠재력을 극대화하는 체계적인 육성 시스템
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {systems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 h-full flex flex-col justify-between group hover:bg-zinc-50 transition-colors"
            >
              <div className="mb-8">
                <span className="text-[#C9252C] font-oswald font-bold text-xl mb-4 block">
                  {item.id}
                </span>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-oswald font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C9252C]">
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-3">{item.titleKo}</h4>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
