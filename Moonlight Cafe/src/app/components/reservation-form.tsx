import { motion } from "motion/react";
import { useState } from "react";
import { Calendar, Clock, Users, Mail, Phone, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#FFFEF9] to-[#FFF8E7]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-display)] text-[#800020] mb-6">
            Reserve Your Table
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mb-8" />
          <p className="text-xl text-[#5c0e1f]/80 mb-8 font-[family-name:var(--font-body)]">
            Join us for an unforgettable culinary experience. Our intimate space offers the perfect setting for any occasion.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#800020] flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[#800020] mb-2">
                  Opening Hours
                </h3>
                <p className="text-[#5c0e1f]/70 font-[family-name:var(--font-body)]">
                  Monday - Friday: 7:00 AM - 10:00 PM<br />
                  Saturday - Sunday: 8:00 AM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#800020] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[#800020] mb-2">
                  Contact
                </h3>
                <p className="text-[#5c0e1f]/70 font-[family-name:var(--font-body)]">
                  +1 (555) 123-4567<br />
                  reservations@maisonducafe.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FFFEF9] p-8 border-2 border-[#D4AF37]/20 shadow-xl"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#5c0e1f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] text-[#800020] mb-2">
                Reservation Confirmed!
              </h3>
              <p className="text-[#5c0e1f]/70 font-[family-name:var(--font-body)]">
                We look forward to serving you.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="text-[#800020] font-[family-name:var(--font-sans)] mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#D4AF37]" />
                  Full Name
                </Label>
                <Input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-[#fefbf3] border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-none font-[family-name:var(--font-body)]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <Label className="text-[#800020] font-[family-name:var(--font-sans)] mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  Email Address
                </Label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-[#fefbf3] border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-none font-[family-name:var(--font-body)]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label className="text-[#800020] font-[family-name:var(--font-sans)] mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  Phone Number
                </Label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-[#fefbf3] border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-none font-[family-name:var(--font-body)]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-[#800020] font-[family-name:var(--font-sans)] mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    Date
                  </Label>
                  <Input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="bg-[#fefbf3] border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-none font-[family-name:var(--font-body)]"
                  />
                </div>

                <div>
                  <Label className="text-[#800020] font-[family-name:var(--font-sans)] mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    Time
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                    <SelectTrigger className="bg-[#fefbf3] border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-none font-[family-name:var(--font-body)]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map(time => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-[#800020] font-[family-name:var(--font-sans)] mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  Number of Guests
                </Label>
                <Select value={formData.guests} onValueChange={(value) => handleChange("guests", value)}>
                  <SelectTrigger className="bg-[#fefbf3] border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-none font-[family-name:var(--font-body)]">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#800020] hover:bg-[#5c0e1f] text-[#FFF8E7] rounded-none py-6 font-[family-name:var(--font-sans)] tracking-wider uppercase border-2 border-[#D4AF37] transition-all"
              >
                Confirm Reservation
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
