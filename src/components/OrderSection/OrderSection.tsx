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

      <HowItWorksCards />
      <div className="order-section__button-wrapper">
        <button className="order-section__button">
          {section.buttonText}
          <span className="order-section__button-arrow">→</span>
        </button>
        <div className="order-section__review">
          <span className="review__stars" aria-hidden>
            {"★".repeat(section.ratingValue)}
          </span>
          <span className="review__rating-text">{section.ratingText}</span>
        </div>
      </div>
    </section>
  );
}
