import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Choco Dessert Bowls - unique images per item
const TRIPLE_CHOCO_IMG = "/images/triple-choco-bowl.png";
const KITKAT_CHOCO_IMG = "/images/kitkat-bowl.jpeg";
const OREO_CHOCO_IMG = "/images/oreo-choco-bowl.png";
const NUTELLA_CHOCO_IMG = "/images/nuttela-choco-bowl.png";
const RED_VELVET_CHOCO_IMG = "/images/red-velvet-choco-bowl.png";

// Waffles with Ice-Cream - unique images per item
const TRIPLE_CHOCO_WAFFLE_IMG = "/images/tripple-choco-waffle.jpg";
const DOUBLE_CHOCO_WAFFLE_IMG = "/images/double_choco_waffle.jpg";
const NUTELLA_WAFFLE_IMG = "/images/nuttela-waffle.jpg";
const KITKAT_WAFFLE_IMG = "/images/kitkat--choco-waffle.png";

// Snacks - unique images per item
const FRIES_CLASSIC_IMG = "/images/french-fries-classic.png";
const FRIES_MASALA_IMG = "/images/french-fries-masala.png";
const FRIES_PERI_PERI_IMG = "/images/french-fries-peri-peri.png";
const FRIES_CHEESE_IMG = "/images/french-fries-cheese-peri-peri.png";

const menuCategories = [
  {
    id: "dessert",
    name: "Choco Dessert Bowls",
    emoji: "🍫",
    tagline: "Rich indulgence in every spoonful",
    items: [
      {
        name: "Triple Choco Bowl",
        description: "Three layers of dark, milk & white chocolate in a warm dessert bowl",
        price: "₹99",
        image: TRIPLE_CHOCO_IMG,
      },
      {
        name: "KitKat Choco Bowl",
        description: "Creamy chocolate base topped with crispy KitKat wafer pieces",
        price: "₹99",
        image: KITKAT_CHOCO_IMG,
      },
      {
        name: "Oreo Choco Bowl",
        description: "Velvety chocolate with crushed Oreo crumble and cream swirl",
        price: "₹99",
        image: OREO_CHOCO_IMG,
      },
      {
        name: "Nutella Choco Bowl",
        description: "Warm Nutella hazelnut chocolate drizzled over silky dessert cream",
        price: "₹99",
        image: NUTELLA_CHOCO_IMG,
      },
      {
        name: "Red Velvet Choco Bowl",
        description: "Red velvet crumble with white chocolate ganache and cocoa dust",
        price: "₹99",
        image: RED_VELVET_CHOCO_IMG,
      },
    ],
  },
  {
    id: "waffles",
    name: "Waffles with Ice-Cream",
    emoji: "🧇",
    tagline: "Golden crisp meets velvety cool",
    items: [
      {
        name: "Triple Choco Waffle",
        description: "Three-chocolate waffle with dark, milk & white drizzle and ice cream",
        price: "₹110",
        image: TRIPLE_CHOCO_WAFFLE_IMG,
      },
      {
        name: "Double Choco Waffle",
        description: "Double-layered chocolate waffle with vanilla ice cream scoop",
        price: "₹110",
        image: DOUBLE_CHOCO_WAFFLE_IMG,
      },
      {
        name: "Nutella Waffle",
        description: "Freshly pressed waffle smothered in warm Nutella with ice cream",
        price: "₹110",
        image: NUTELLA_WAFFLE_IMG,
      },
      {
        name: "KitKat Choco Waffle",
        description: "Crispy waffle with KitKat crunch, chocolate sauce and ice cream",
        price: "₹115",
        image: KITKAT_WAFFLE_IMG,
      },
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    emoji: "🍟",
    tagline: "Perfectly seasoned, impossible to resist",
    items: [
      {
        name: "French Fries Classic",
        description: "Golden crispy fries with a light dusting of sea salt",
        price: "₹70",
        image: FRIES_CLASSIC_IMG,
      },
      {
        name: "French Fries Masala",
        description: "Golden fries tossed in aromatic Indian spice blend",
        price: "₹80",
        image: FRIES_MASALA_IMG,
      },
      {
        name: "French Fries Peri Peri",
        description: "Crispy fries with smoky peri peri seasoning and chilli heat",
        price: "₹80",
        image: FRIES_PERI_PERI_IMG,
      },
      {
        name: "French Fries Cheese",
        description: "Hot fries smothered in creamy melted cheese sauce",
        price: "₹100",
        image: FRIES_CHEESE_IMG,
      },
    ],
  },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const cat = menuCategories[activeCategory];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#FFF8E7] to-[#FFFEF9]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div
            style={{
              fontFamily: "var(--font-sans)",
              color: "#D4AF37",
              fontSize: "10px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            ✦ &nbsp; Our Offerings &nbsp; ✦
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              color: "#800020",
              fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
              letterSpacing: "0.04em",
            }}
          >
            The Menu
          </h2>
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "linear-gradient(to right, transparent, #D4AF37, transparent)",
              margin: "16px auto",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "#5c0e1f",
              opacity: 0.75,
              maxWidth: "480px",
              margin: "0 auto",
              fontSize: "1.1rem",
              fontStyle: "italic",
            }}
          >
            Crafted with passion, served under the moonlight
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {menuCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-7 py-3 transition-all"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: activeCategory === index ? "#FFF8E7" : "#800020",
                background:
                  activeCategory === index
                    ? "linear-gradient(135deg, #800020, #5c0e1f)"
                    : "transparent",
                border: `1.5px solid ${activeCategory === index ? "#D4AF37" : "rgba(128,0,32,0.25)"}`,
                boxShadow:
                  activeCategory === index
                    ? "0 4px 20px rgba(128,0,32,0.35), inset 0 1px 0 rgba(212,175,55,0.2)"
                    : "none",
              }}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
              {activeCategory === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Category tagline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id + "-tagline"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="text-center mb-10"
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "#D4AF37",
                fontSize: "1rem",
                letterSpacing: "0.12em",
                fontStyle: "italic",
              }}
            >
              {cat.tagline}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Menu items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {cat.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative overflow-hidden bg-[#FFFEF9] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300"
                style={{
                  boxShadow:
                    "0 2px 12px rgba(128,0,32,0.06)",
                }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#2B1D18]">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1D18]/70 via-transparent to-transparent" />
                  {/* Price badge */}
                  <div
                    className="absolute top-3 right-3 px-3 py-1"
                    style={{
                      background: "rgba(26, 10, 10, 0.85)",
                      border: "1px solid rgba(212,175,55,0.5)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "#D4AF37",
                        fontSize: "1rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#800020",
                      fontSize: "1.15rem",
                      letterSpacing: "0.02em",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "#5c0e1f",
                      opacity: 0.65,
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Gold bottom accent */}
                  <div
                    className="mt-4 group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                    style={{
                      height: "1px",
                      background:
                        "linear-gradient(to right, transparent, #D4AF37, transparent)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
