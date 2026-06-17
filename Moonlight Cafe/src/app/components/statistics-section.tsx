import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (isInView) motionVal.set(target);
  }, [isInView, motionVal, target]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(v).toLocaleString() + suffix;
      }
    });
  }, [spring, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const stats = [
  { value: 500, suffix: "+", label: "Happy Customers", sublabel: "And counting" },
  { value: 4.5, suffix: "★", label: "Average Rating", sublabel: "On Google & Zomato", isFloat: true },
  { value: 3, suffix: "+", label: "Years of", sublabel: "Serving Excellence" },
  { value: 50, suffix: "+", label: "Menu Items", sublabel: "Crafted with love" },
];

export function StatisticsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a0012] via-[#800020] to-[#4a0012]" />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #D4AF37 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] text-[#FFF8E7] mb-3">
            Our Story in Numbers
          </h2>
          <div className="w-20 h-px bg-[#D4AF37] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full border-2 border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-all duration-500 flex items-center justify-center mx-auto bg-[#FFF8E7]/5">
                  <span className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[#D4AF37]">
                    {stat.isFloat ? (
                      <span>{stat.value}{stat.suffix}</span>
                    ) : (
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    )}
                  </span>
                </div>
              </div>
              <div className="text-[#FFF8E7] font-[family-name:var(--font-display)] text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-[#D4AF37]/70 font-[family-name:var(--font-sans)] text-xs tracking-wider uppercase">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
