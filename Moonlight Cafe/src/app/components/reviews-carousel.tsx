import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sophia Laurent",
    role: "Coffee Connoisseur",
    rating: 5,
    text: "An absolutely divine experience. The Burgundy Velvet is a masterpiece - rich, complex, and beautifully balanced. The ambiance transports you to a Parisian café.",
    image: "SL"
  },
  {
    name: "Marcus Chen",
    role: "Food Critic",
    rating: 5,
    text: "Moonlight Cafe sets the gold standard for luxury dessert experiences. Every detail is meticulously crafted — from the indulgent choco bowls to the perfectly crispy waffles.",
    image: "MC"
  },
  {
    name: "Isabella Romano",
    role: "Interior Designer",
    rating: 5,
    text: "The aesthetic is breathtaking - burgundy and gold accents create an atmosphere of refined elegance. It's not just a café, it's an experience.",
    image: "IR"
  },
  {
    name: "James Wellington",
    role: "Business Executive",
    rating: 5,
    text: "My go-to spot for important meetings. The premium service and sophisticated environment make every visit memorable. The Golden Cappuccino is exceptional.",
    image: "JW"
  },
  {
    name: "Amélie Dubois",
    role: "Pastry Chef",
    rating: 5,
    text: "As a pastry chef myself, I'm incredibly impressed. The croissants rival those in Paris. Each bite is a testament to true craftsmanship and quality ingredients.",
    image: "AD"
  }
];

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % reviews.length;
      } else {
        return prev === 0 ? reviews.length - 1 : prev - 1;
      }
    });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#5c0e1f] to-[#800020] text-[#FFF8E7] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-display)] mb-4">
            Guest Reviews
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-xl text-[#FFF8E7]/80 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Hear from our distinguished clientele
          </p>
        </motion.div>

        <div className="relative h-[400px] md:h-[350px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="bg-[#FFFEF9] text-[#5c0e1f] p-8 md:p-12 rounded-none border-2 border-[#D4AF37] shadow-2xl">
                <Quote className="w-12 h-12 text-[#D4AF37] mb-6" />
                
                <div className="flex mb-4">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-[family-name:var(--font-body)] mb-8 leading-relaxed italic">
                  "{reviews[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#800020] to-[#D4AF37] flex items-center justify-center text-[#FFF8E7] text-xl font-[family-name:var(--font-sans)]">
                    {reviews[currentIndex].image}
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-xl text-[#800020]">
                      {reviews[currentIndex].name}
                    </div>
                    <div className="text-[#5c0e1f]/60 font-[family-name:var(--font-sans)]">
                      {reviews[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-[#D4AF37] text-[#5c0e1f] rounded-full flex items-center justify-center hover:bg-[#e5c158] transition-colors shadow-lg z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-[#D4AF37] text-[#5c0e1f] rounded-full flex items-center justify-center hover:bg-[#e5c158] transition-colors shadow-lg z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#D4AF37] w-8"
                  : "bg-[#D4AF37]/30 hover:bg-[#D4AF37]/60"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
