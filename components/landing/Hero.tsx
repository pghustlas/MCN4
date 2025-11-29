import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LocoLogo from "../../imports/LocoLogo";
import heroBg from "figma:asset/c730c5bda36c78a0c16dfaad462cb2b1b9bcf31e.png";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background moves slower than the scroll (Parallax effect)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Logo moves faster (Parallax effect)
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  // Text fade out effect on scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-[#F0F0F0] overflow-hidden">
      {/* Background Image - Parallax Effect */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroBg} 
          alt="Model Background" 
          className="w-full h-full object-cover object-bottom"
        />
      </motion.div>

      {/* Logo Recreated with SVG - Parallax Effect */}
      <motion.div 
        style={{ y: logoY }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl px-6"
      >
        {/* Responsive Aspect Ratio: 
            - Mobile: Allow flexible height for stacked logo
            - Desktop: Enforce exact aspect ratio of the original design
        */}
        <div className="w-full min-h-[300px] md:min-h-0 md:aspect-[461/103]">
          <LocoLogo />
        </div>
      </motion.div>

      {/* Bottom Left Text - Fades out on scroll */}
      <motion.div 
        style={{ opacity: textOpacity }}
        className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-20 pointer-events-none"
      >
        <p className="text-black font-medium text-xs md:text-sm tracking-wide">
          크리에이터 육성 에이전시
        </p>
      </motion.div>

      {/* Bottom Right Text - Fades out on scroll */}
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
