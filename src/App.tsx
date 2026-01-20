import { Hero } from "./components/Hero/Hero";
import { HeroReview } from "./components/HeroReview/HeroReview";

function App() {
  return (
    <>
      <Hero />
      <div className="hero-review-wrapper">
        <HeroReview />
      </div>
    </>
  );
}

export default App;
