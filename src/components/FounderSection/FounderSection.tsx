import { useFounderSection } from "../../hooks/useFounderSection";
import "./FounderSection.scss";

export function FounderSection() {
  const { section, loading, error } = useFounderSection();

  if (loading || error || !section) {
    return null;
  }

  return (
    <section className="founder">
      <div className="founder__content">
        <h2 className="founder__title">{section.sectionTitle}</h2>
        <div className="founder__gallery">
          <img
            src={section.mainImage.url}
            alt={section.mainImage.alt}
            className="founder__main-image"
          />
          <div className="funder__secondary-images">
            {section.secondaryImages.map((image, index) => (
              <img
                src={image.url}
                alt={image.alt}
                key={index}
                className={`founder__overlay-img founder__overlay-img--${index === 0 ? "top-left" : "bottom-right"}`}
              />
            ))}
          </div>
        </div>

        <div className="founder__story">
          {section.story.split("\n\n").map((paragraph, index) => (
            <p key={index} className="founder__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
        <button className="founder__button--desktop">
          {section.buttonText}
        </button>
      </div>
    </section>
  );
}
