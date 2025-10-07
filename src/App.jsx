import CreationSection from "./components/CreationSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MobileHeader from "./components/MobileHeader";
import PcHeader from "./components/PcHeader";

export default function App() {
  return (
    <div className="max-w-[1600px]">
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden md:block">
        <PcHeader />
      </div>
      <div className="md:px-15">
        <HeroSection />
        <CreationSection />
      </div>
      <Footer />
    </div>
  );
}
