import "./BenefitsGallery.scss";
import { useBenefitsSlides } from "../../../hooks/useBenefitsSlides";
import arrowRight from "../../../assets/icons/arrow-right-icon.svg";
import arrowLeft from "../../../assets/icons/arrow-left-icon.svg";

export function BenefitsGallery() {
  const { slides, loading, error } = useBenefitsSlides();

  if (loading || error || !slides.length) {
    return null;
  }

  const activeSlide = slides[6];

  return (
    <section className="benefits-gallery">
      <div className="benefits-gallery__media">
        <button
          className="benefits-gallery__arrow benefits-gallery__arrow--left"
          aria-hidden
        >
          <img src={arrowLeft} alt="Previous slide" className="benefits-gallery__arrow-image" />
        </button>

        <figure className="benefits-gallery__figure">
          <img
            src={activeSlide.image?.url}
            alt={activeSlide.image?.alt}
            className="benefits-gallery__image"
          />

          <ul className="benefits-gallery__thumbnails">
            {slides.map((slide, index) => (
              <li
                key={index}
                className={`benefits-gallery__thumbnail ${
                  index === 6 ? "is-active" : ""
                }`}
              >
                <img src={slide.image?.url} alt="" />
              </li>
            ))}
          </ul>

          <figcaption className="benefits-gallery__caption">
            {activeSlide.caption}
          </figcaption>
        </figure>

        <button
          className="benefits-gallery__arrow benefits-gallery__arrow--right"
          aria-hidden
        >
          <img src={arrowRight} alt="Next slide" />
        </button>
      </div>
    </section>
  );
}
