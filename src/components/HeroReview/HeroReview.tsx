import { useHeroReview } from "../../hooks/useHeroReview";
import "./HeroReview.scss";

export function HeroReview() {
  const { review, loading, error } = useHeroReview();

  if (loading || error || !review) {
    return null;
  }

  return (
    <section className="review">
      <article className="review__card">
        <header className="review__header">
          {review.authorImage && (
            <img
              className="review__avatar"
              src={review.authorImage?.url}
              alt={review.authorImage?.alt || review.authorName}
            />
          )}

          <div className="review__meta">
            <div className="review__rating">
              <span className="review__stars">
                {"★".repeat(review.rating)}
              </span>
              <span className="review__rating-text">
                One of 500+ 5 Star Reviews Online
              </span>
            </div>
            <p className="review__author review__author--mobile">Jane, S.</p>
            <p className="review__author review__author--desktop">
              {review.authorName}
            </p>
          </div>
        </header>

        <blockquote className="review__content">
          <p className="review__text review__text--mobile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed sollicitudin dolor, non sodales justo.
          </p>
          <p className="review__text review__text--desktop">{review.text}</p>
        </blockquote>
      </article>
    </section>
  );
}
