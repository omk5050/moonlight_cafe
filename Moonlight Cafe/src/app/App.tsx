import { useState } from "react";
import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { MenuSection } from "./components/menu-section";
import { ReviewsCarousel } from "./components/reviews-carousel";
import { ReservationForm } from "./components/reservation-form";
import { Footer } from "./components/footer";
import { LoadingScreen } from "./components/loading-screen";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      <div
        className="min-h-screen bg-[#FFF8E7]"
        style={{ visibility: loaded ? "visible" : "hidden" }}
      >
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="menu">
          <MenuSection />
        </section>
        
        <section id="reviews">
          <ReviewsCarousel />
        </section>
        
        <section id="reservations">
          <ReservationForm />
        </section>
      </main>
      
      <Footer />
    </div>
    </>
  );
}
