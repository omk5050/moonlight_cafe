import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 248, 231, 0)", "rgba(255, 248, 231, 0.98)"]
  );
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["#FFF8E7", "#800020"]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "Reservations", href: "#reservations" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-[#D4AF37]/20 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div style={{ color: textColor }} className="flex items-center gap-3">
            <Coffee className="w-8 h-8 text-[#D4AF37]" />
            <span className="text-2xl font-[family-name:var(--font-display)] tracking-tight">
              Moonlight Cafe
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                style={{ color: textColor }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-[family-name:var(--font-sans)] tracking-wider uppercase hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection("#reservations")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#800020] text-[#FFF8E7] rounded-none font-[family-name:var(--font-sans)] tracking-wider uppercase border-2 border-[#D4AF37] hover:bg-[#5c0e1f] transition-all"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: textColor }}
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-full md:hidden bg-[#800020] z-40 pt-20 px-6"
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              initial={{ opacity: 0, x: 20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              className="text-[#FFF8E7] text-2xl font-[family-name:var(--font-display)] text-left hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </motion.button>
          ))}
          <motion.button
            onClick={() => scrollToSection("#reservations")}
            initial={{ opacity: 0, x: 20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: navLinks.length * 0.1 }}
            className="px-6 py-3 bg-[#D4AF37] text-[#800020] rounded-none font-[family-name:var(--font-sans)] tracking-wider uppercase border-2 border-[#D4AF37] w-full mt-4"
          >
            Book Now
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
