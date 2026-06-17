import { motion } from "motion/react";
import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#5c0e1f] to-[#4a0012] text-[#FFF8E7] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-2xl font-[family-name:var(--font-display)] tracking-tight">
                Moonlight Cafe
              </span>
            </div>
            <p className="text-[#FFF8E7]/70 font-[family-name:var(--font-body)] mb-6">
              Experience the art of coffee in its purest form. Where tradition meets luxury.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#D4AF37] text-[#5c0e1f] rounded-full flex items-center justify-center hover:bg-[#e5c158] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-[family-name:var(--font-display)] mb-6 text-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="space-y-3 font-[family-name:var(--font-body)]">
              {["About Us", "Our Menu", "Gallery", "Events", "Careers", "Press"].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-[#FFF8E7]/70 hover:text-[#D4AF37] transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-[family-name:var(--font-display)] mb-6 text-[#D4AF37]">
              Opening Hours
            </h3>
            <ul className="space-y-3 font-[family-name:var(--font-body)] text-[#FFF8E7]/70">
              <li>
                <div className="font-[family-name:var(--font-sans)] text-[#FFF8E7]">Monday - Friday</div>
                <div>7:00 AM - 10:00 PM</div>
              </li>
              <li>
                <div className="font-[family-name:var(--font-sans)] text-[#FFF8E7]">Saturday - Sunday</div>
                <div>8:00 AM - 11:00 PM</div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-[family-name:var(--font-display)] mb-6 text-[#D4AF37]">
              Contact Us
            </h3>
            <ul className="space-y-4 font-[family-name:var(--font-body)]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <span className="text-[#FFF8E7]/70">
                  123 Luxury Avenue<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-[#FFF8E7]/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-[#FFF8E7]/70">hello@moonlightcafe.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF37]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#FFF8E7]/60 font-[family-name:var(--font-sans)] text-sm">
            <div>© 2026 Moonlight Cafe. All rights reserved.</div>
            <div className="flex gap-6">
              <motion.a href="#" whileHover={{ color: "#D4AF37" }} className="transition-colors">
                Privacy Policy
              </motion.a>
              <motion.a href="#" whileHover={{ color: "#D4AF37" }} className="transition-colors">
                Terms of Service
              </motion.a>
              <motion.a href="#" whileHover={{ color: "#D4AF37" }} className="transition-colors">
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
