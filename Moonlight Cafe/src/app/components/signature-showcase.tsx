import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Leaf } from "lucide-react";

const bowls = [
  {
    name: "Nutella Choco Bowl",
    price: "₹150",
    description: "Warm Nutella drizzled over a rich chocolate base, topped with crushed nuts and chocolate shavings",
    tag: "Vegetarian",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
  },
  {
    name: "Oreo Choco Bowl",
    price: "₹150",
    description: "Velvety chocolate bowl layered with crushed Oreo crumbles and whipped cream",
    tag: "Vegetarian",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
  },
  {
    name: "KitKat Choco Bowl",
    price: "₹150",
    description: "Indulgent chocolate base crowned with KitKat pieces and a silky chocolate drizzle",
    tag: "Vegetarian",
    image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=800&q=80",
  },
  {
    name: "Double Chocolate Bowl",
    price: "₹150",
    description: "Dark and milk chocolate combined in a molten bowl experience — pure indulgence",
    tag: "Vegetarian",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
  },
];

export function SignatureShowcase() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#2a0008] to-[#4a0012] relative overflow-hidden">
      {/* Decorative grain texture overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-6"
        >
          <div className="text-[#D4AF37] tracking-[0.4em] uppercase text-xs font-[family-name:var(--font-sans)] mb-4">
            Chef's Recommendation
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/60 max-w-xs" />
            <span className="text-[#D4AF37] text-xl">✦</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/60 max-w-xs" />
          </div>
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-display)] text-[#FFF8E7] mb-4">
            Signature Bowls
          </h2>
          <p className="text-[#FFF8E7]/70 font-[family-name:var(--font-body)] text-lg max-w-xl mx-auto">
            Our hand-crafted chocolate bowls — a dessert experience unlike anything you've tasted
          </p>
        </motion.div>

        {/* Featured large card + 3 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {/* Large feature card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative overflow-hidden rounded-none border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500"
          >
            <div className="relative h-[480px] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src={bowls[0].image}
                  alt={bowls[0].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a0008]/90 via-[#2a0008]/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-[family-name:var(--font-sans)] text-xs tracking-wider uppercase">
                  {bowls[0].tag}
                </span>
              </div>
              <h3 className="text-3xl font-[family-name:var(--font-display)] text-[#FFF8E7] mb-2">
                {bowls[0].name}
              </h3>
              <p className="text-[#FFF8E7]/70 font-[family-name:var(--font-body)] mb-4 text-sm">
                {bowls[0].description}
              </p>
              <span className="text-2xl text-[#D4AF37] font-[family-name:var(--font-display)]">
                {bowls[0].price}
              </span>
            </div>
          </motion.div>

          {/* 3 smaller cards */}
          <div className="flex flex-col gap-6">
            {bowls.slice(1).map((bowl, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                className="group flex overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-400 bg-[#FFF8E7]/5 backdrop-blur-sm"
              >
                <div className="relative w-36 flex-shrink-0 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={bowl.image}
                      alt={bowl.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-[#2a0008]/30 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-5 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Leaf className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 font-[family-name:var(--font-sans)] text-xs tracking-wide uppercase">
                      {bowl.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] text-[#FFF8E7] mb-1">
                    {bowl.name}
                  </h3>
                  <p className="text-[#FFF8E7]/60 font-[family-name:var(--font-body)] text-sm mb-3 line-clamp-2">
                    {bowl.description}
                  </p>
                  <span className="text-[#D4AF37] font-[family-name:var(--font-display)] text-lg">
                    {bowl.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
