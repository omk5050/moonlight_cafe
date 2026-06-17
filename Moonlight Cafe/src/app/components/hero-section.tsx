import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <ImageWithFallback
          src="public/images/hero-banner.jpg"
          alt="Luxury café interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a0012]/70 via-[#800020]/50 to-[#FFF8E7]" />
      </motion.div>

      {/* Animated Coffee Steam */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-1/3 left-1/2 w-1 h-32 rounded-full bg-gradient-to-t from-white/20 to-transparent blur-sm"
            style={{ left: `${45 + i * 5}%` }}
            animate={{
              y: [-100, -300],
              opacity: [0, 0.6, 0],
              scale: [1, 1.5, 2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="mb-6 text-[#D4AF37] tracking-[0.3em] uppercase text-sm font-[family-name:var(--font-sans)]">
            Since 2026
          </div>
          <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-display)] text-[#FFF8E7] mb-6 tracking-tight">
            Moonlight Cafe
          </h1>
          <p className="text-xl md:text-2xl text-[#FFF8E7]/90 max-w-2xl mx-auto mb-12 font-[family-name:var(--font-body)]">
            Crafted Under The Moonlight
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#D4AF37] text-[#5c0e1f] rounded-none font-[family-name:var(--font-sans)] tracking-wider uppercase transition-all hover:bg-[#e5c158] border-2 border-[#D4AF37]"
          >
            Discover Our Menu
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12"
        >
          <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
