import CreationSection from "./components/CreationSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MobileHeader from "./components/MobileHeader";

export default function App() {
  return (
    <div>
      <MobileHeader />
      <HeroSection />
      <CreationSection />
      <Footer />
    </div>
  );
}
