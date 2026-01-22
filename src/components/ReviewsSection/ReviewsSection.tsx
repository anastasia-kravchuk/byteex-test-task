import { useReviewsSection } from "../../hooks/useReviewSection";
import { useUGCImages } from "../../hooks/useUGCImages";
import "./ReviewsSection.scss";
import { Testimonials } from "./Testimonails/Testimonials";

export function ReviewsSection() {
  const { section, loading, error } = useReviewsSection();
  const { images } = useUGCImages();

  if (!section || loading || error) {
    return null;
  }

  return (
    <section className="reviews-section">
      <div className="reviews-section__question">
        <h2 className="reviews-section__title">{section.title}</h2>
        <p className="reviews-section__description">{section.description}</p>
      </div>

      <ul className="reviews-section__ugs">
        {images.map((img, index) => (
          <li key={index}>
            <img
              src={img.url}
              alt={img.alt}
              className="reviews-section__ugs-img"
            />
          </li>
        ))}
      </ul>
      <Testimonials />

      <div className="seen-dots seen-dots--review" aria-hidden>
        <span className="seen-dot seen-dot--active" />
        <span className="seen-dot" />
        <span className="seen-dot" />
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
          <span className="button-review__rating-text">{section.ratingText}</span>
        </div>
      </div>
    </section>
  );
}
