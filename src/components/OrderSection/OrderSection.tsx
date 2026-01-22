import { useOrderSection } from "../../hooks/useOrderSection";
import { HowItWorksCards } from "../HowItWorksCards/HowItWorksCards";
import "./OrderSection.scss";
export function OrderSection() {
  const { section, loading, error } = useOrderSection();

  if (!section || loading || error) {
    return null;
  }

  return (
    <section className="order-section">
      <h2 className="order-section__title">{section.title}</h2>

      <div className="order-section__cards">
        <HowItWorksCards />
      </div>

      <div className="button-wrapper">
        <button className="button">
          {section.buttonText}
          <span className="button__button-arrow">→</span>
        </button>
        <div className="button-review">
          <span className="button-review__stars" aria-hidden>
            {"★".repeat(section.ratingValue)}
          </span>
          <span className="button-review__rating-text">
            {section.ratingText}
          </span>
        </div>
      </div>
    </section>
  );
}
