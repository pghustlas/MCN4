import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "계약 조건은 어떻게 되나요?",
    answer: "크리에이터의 성장 단계와 채널 규모에 따라 맞춤형 계약 조건을 제안합니다. 기본적으로 상호 협의하에 합리적인 조건을 제시하며, 세부 사항은 미팅을 통해 조율 가능합니다."
  },
  {
    question: "수익 배분 구조가 궁금합니다.",
    answer: "플랫폼 수익, 광고 수익, 2차 저작물 수익 등 발생 가능한 모든 수익에 대해 투명한 배분 정책을 따릅니다. 업계 최고 수준의 크리에이터 우대 정책을 지향합니다."
  },
  {
    question: "지원 절차는 어떻게 진행되나요?",
    answer: "홈페이지 내 'Apply Now' 버튼을 통해 지원서를 접수해주시면, 담당자가 검토 후 1차 서류 합격자에 한해 개별 연락을 드립니다. 이후 실무진 미팅을 통해 최종 계약이 진행됩니다."
  },
  {
    question: "초보 크리에이터도 지원 가능한가요?",
    answer: "네, 가능합니다. 우리는 현재의 구독자 수보다 크리에이터의 잠재력과 열정을 더 중요하게 생각합니다. 체계적인 육성 시스템을 통해 성장을 지원해드립니다."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white text-black border-t border-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight leading-none mb-6">
              F.A.Q
            </h2>
            <p className="text-lg text-zinc-600 font-medium">
              자주 묻는 질문
            </p>
          </div>
          
          <div className="lg:w-2/3">
            <div className="border-t border-black">
              {FAQS.map((faq, index) => (
                <div key={index} className="border-b border-black">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <span className="text-xl md:text-2xl font-bold group-hover:text-[#C9252C] transition-colors">
                      {faq.question}
                    </span>
                    <div className="relative w-6 h-6 text-[#C9252C]">
                      <motion.div
                        initial={false}
                        animate={{ rotate: openIndex === index ? 180 : 0, opacity: openIndex === index ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0"
                      >
                        <Plus className="w-6 h-6" />
                      </motion.div>
                      <motion.div
                        initial={false}
                        animate={{ rotate: openIndex === index ? 0 : -180, opacity: openIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0"
                      >
                        <Minus className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 text-lg text-zinc-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
