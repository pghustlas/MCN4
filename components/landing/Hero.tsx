import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LocoLogo from "../../imports/LocoLogo";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-[#F0F0F0] overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[#E5E5E5]" />
      </motion.div>

      {/* Logo */}
      <motion.div
        style={{ y: logoY }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl px-6"
      >
        <div className="w-full min-h-[300px] md:min-h-0 md:aspect-[461/103]">
          <LocoLogo />
        </div>
      </motion.div>

      {/* Text bottom-left */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-20 pointer-events-none"
      >
        <p className="text-black font-medium text-xs md:text-sm tracking-wide">
          크리에이터 육성 에이전시
        </p>
      </motion.div>

      {/* Text bottom-right */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20 pointer-events-none"
      >
        <p className="text-black font-medium text-xs md:text-sm tracking-wide text-right">
          브랜드 성장의 모든 것을 담다
        </p>
      </motion.div>
    </section>
  );
};
