import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { Hero } from "./components/Hero/Hero";
import { HeroReview } from "./components/HeroReview/HeroReview";

function App() {
  return (
    <>
      <Hero />
      <div className="hero-review-wrapper">
        <HeroReview />
      </div>
      <BenefitsSection />
    </>
  );
}

export default App;
