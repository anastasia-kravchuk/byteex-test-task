import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { Hero } from "./components/Hero/Hero";
import { FounderSection } from "./components/FounderSection/FounderSection";
import { OrderSection } from "./components/OrderSection/OrderSection";
import { ReviewsSection } from "./components/ReviewsSection/ReviewsSection";
import { FAQSection } from "./components/FAQSection/FAQSection";
import { InfoBunner } from "./components/InfoBanner/InfoBanner";
import { FinalCTASection } from "./components/finalCTASection/finalCTASection";

function App() {
  return (
    <>
      <Hero />
      <BenefitsSection />
      <FounderSection />
      <OrderSection />
      <ReviewsSection />
      <FAQSection />
      <InfoBunner />
      <FinalCTASection />
    </>
  );
}

export default App;
