import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { Hero } from "./components/Hero/Hero";
import { HeroReview } from "./components/HeroReview/HeroReview";
import "./App.scss";
import { FounderSection } from "./components/FounderSection/FounderSection";

function App() {
  return (
    <>
      <Hero />
      <div className="hero-review-wrapper">
        <HeroReview />
      </div>
      <BenefitsSection />
      <FounderSection />
    </>
  );
}

export default App;
