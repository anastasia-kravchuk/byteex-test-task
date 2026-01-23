import { useTestimonials } from "../../../hooks/useTestimonial";
import "./Testimonials.scss";
import arrowLeft from "../../../assets/icons/arrow-left-icon.svg";
import arrowRight from "../../../assets/icons/arrow-right-icon.svg";

export function Testimonials() {
  const { testimonials, loading, error } = useTestimonials();

  if (!testimonials || loading || error) {
    return null;
  }
  return (
    <div className="testimonial">
      <button className="testimonial__nav-btn" type="button">
        <img
          src={arrowLeft}
          alt="Previous page"
          className="testimonial__arrow testimonial__arrow--left"
        />
      </button>

      <div className="testimonial__card-wrapper">
        {testimonials.map((t, index) => (
          <article
            className={`testimonial__card testimonial__card--${index}`}
            key={index}
          >
            <header className="testimonial__header">
              {t.authorAvatar && (
                <img
                  className="testimonial__avatar"
                  src={t.authorAvatar.url}
                  alt={t.authorAvatar.alt}
                />
              )}

              <div className="testimonial__meta">
                <span className="testimonial__stars" aria-hidden>
                  {"★".repeat(t.rating)}
                </span>
                <p className="testimonial__author-name">{t.authorName}</p>
              </div>
            </header>

            <p className="testimonial__text">{t.text}</p>
          </article>
        ))}
      </div>

      <button className="testimonial__nav-btn">
        <img
          src={arrowRight}
          alt="Next page"
          className="testimonial__arrow testimonial__arrow--right"
        />
      </button>
    </div>
  );
}
