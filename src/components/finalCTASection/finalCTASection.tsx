import { useFinalCTASection } from "../../hooks/useFinalCTASection";
import "./finalCTASection.scss";
import clock from "../../assets/icons/clock-icon.svg";
import creditCards from "../../assets/credit-cards.png";

export function FinalCTASection() {
  const { section, loading, error } = useFinalCTASection();

  if (!section || loading || error) {
    return null;
  }

  return (
    <section className="final-cta">
      <div className="final-cta__header">
        <h2 className="final-cta__title">{section.title}</h2>
        <p className="final-cta__description final-cta__description--mobile">
          Click below to browse our collection!
        </p>
        <p className="final-cta__description final-cta__description--desktop">
          {section.description}
        </p>
      </div>

      <div className="final-cta__gallery">
        {section.images.map((img, index) => (
          <div
            key={index}
            className={`final-cta__gallery-wrapper final-cta__gallery-wrapper--${index}`}
          >
            <img src={img.url} alt={img.alt} className="final-cta__image" />
          </div>
        ))}
      </div>

      <button className="final-cta__button-wrapper">
        <div className="button-wrapper">
          <button className="button">
            {section.buttonText}
            <span className="button__button-arrow">→</span>
          </button>
          <div className="button-review button-review--mobile">
            <span className="button-review__stars" aria-hidden>
              {"★".repeat(5)}
            </span>
            <span className="button-review__rating-text">
              Over 500+ 5 Star Reviews Online
            </span>
          </div>
          <div className="final-cta__payment final-cta__payment--desktop">
            <div className="final-cta__shipping">
              <img src={clock} alt="Clock icon" className="final-cta__clock" />
              <p className="final-cta__shipping-text">Ships in 1-2 Days</p>
            </div>
            <div className="final-cta__credit-cards">
              <img
                src={creditCards}
                alt="Credit cards"
                className="final-cta__credit-cards-image"
              />
            </div>
          </div>
        </div>
      </button>
    </section>
  );
}
