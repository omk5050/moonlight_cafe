import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    alt: "Artisan coffee",
    likes: 284,
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&q=80",
    alt: "Latte art",
    likes: 197,
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
    alt: "Chocolate dessert",
    likes: 312,
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1507915977463-377cc1b82a05?w=600&q=80",
    alt: "Café interior",
    likes: 421,
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
    alt: "Iced coffee",
    likes: 156,
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&q=80",
    alt: "Coffee beans",
    likes: 238,
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&q=80",
    alt: "Pastries",
    likes: 189,
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?w=600&q=80",
    alt: "Espresso",
    likes: 274,
    span: "",
  },
];

export function InstagramGallery() {
  return (
    <section className="py-24 px-6 bg-[#FFF8E7]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-6 h-6 text-[#800020]" />
            <span className="text-[#800020] tracking-[0.3em] uppercase text-sm font-[family-name:var(--font-sans)]">
              Follow Our Story
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-display)] text-[#800020] mb-3">
            #MoonLightCafe
          </h2>
          <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-[#5c0e1f]/70 font-[family-name:var(--font-body)] text-lg">
            Share your moment with us on Instagram
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className={`group relative overflow-hidden cursor-pointer ${img.span}`}
            >
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-[#800020]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Instagram className="w-8 h-8 text-[#D4AF37] mb-2" />
                <span className="text-[#FFF8E7] font-[family-name:var(--font-sans)] text-sm tracking-wider">
                  ♥ {img.likes}
                </span>
                <span className="text-[#D4AF37] font-[family-name:var(--font-sans)] text-xs tracking-widest uppercase mt-1">
                  View Post
                </span>
              </motion.div>

              {/* Gold corner accent */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#800020] text-[#800020] font-[family-name:var(--font-sans)] tracking-widest uppercase transition-all hover:bg-[#800020] hover:text-[#FFF8E7]"
          >
            <Instagram className="w-5 h-5" />
            Follow @MoonLightCafe
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
