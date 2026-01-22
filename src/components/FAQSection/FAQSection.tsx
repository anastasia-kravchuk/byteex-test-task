import { useFAQSection } from "../../hooks/useFAQSection";
import { FAQItems } from "./FAQItems/FAQItems";
import "./FAQSection.scss";

export function FAQSection() {
  const { section, loading, error } = useFAQSection();

  if (!section || loading || error) {
    return null;
  }

  return (
    <section className="faq">
      <div className="faq__text-content">
        <h2 className="faq__title">{section.title}</h2>
        <hr className="faq__title-separator" />
        <FAQItems />
      </div>

      <div className="button-wrapper button-wrapper--mobile">
        <button className="button">
          {section.buttonText}
          <span className="button__button-arrow">→</span>
        </button>
        <div className="button-review">
          <span className="button-review__stars" aria-hidden>
            {"★".repeat(section.ratingValue)}
          </span>
          <span className="button-review__rating-text">{section.ratingText}</span>
        </div>
      </div>

      <div className="faq__gallery">
        {section.images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className={`faq__image faq__image--${index}`}
          />
        ))}
      </div>
    </section>
  );
}
