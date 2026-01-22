import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { Hero } from "./components/Hero/Hero";
import { FounderSection } from "./components/FounderSection/FounderSection";
import { OrderSection } from "./components/OrderSection/OrderSection";
import { ReviewsSection } from "./components/ReviewsSection/ReviewsSection";
import { FAQSection } from "./components/FAQSection/FAQSection";

function App() {
  return (
    <>
      <Hero />
      <BenefitsSection />
      <FounderSection />
      <OrderSection />
      <ReviewsSection />
      <FAQSection />
    </>
  );
}

export default App;
