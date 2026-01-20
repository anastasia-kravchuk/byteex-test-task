import { useBenefitItems } from "../../hooks/useBenefitItem";
import { useBenefitsSection } from "../../hooks/useBenefitsSection";
import { BenefitsGallery } from "./BenefitsGallery/BenefitsGallery";
import "./BenefitsSection.scss";
import companiesLogos from "../../assets/companies-logos.png";
import companiesLogosDesktop from "../../assets/companies-logos-desktop.png";

export function BenefitsSection() {
  const { section } = useBenefitsSection();
  const { items } = useBenefitItems();

  return (
     <section className="benefits">
      <div className="benefits__companies-logos">
        <p className="benefits__text">as seen in</p>

        <picture className="benefits__logos">
          <source
            media="(min-width:1464px)"
            srcSet={companiesLogosDesktop}
          />
          <img src={companiesLogos} alt="Companies logos" />
        </picture>

        <div className="benefits__seen-dots" aria-hidden>
          <span className="benefits__seen-dot" />
          <span className="benefits__seen-dot benefits__seen-dot--active" />
          <span className="benefits__seen-dot" />
        </div>
      </div>

      <div className="benefits__content-wrapper">
        <div className="benefits__title-wrapper">
          <h2 className="benefits__title">
            {section?.sectionTitle}
          </h2>
        </div>

        <div className="benefits__gallery-wrapper">
          <BenefitsGallery />
        </div>

        <div className="benefits__list-wrapper">
          <ul className="benefits__list">
            {items.map((item, index) => (
              <li key={index} className="benefits__item">
                <img
                  src={item.icon?.url}
                  alt={item.icon?.alt}
                  className="benefits__icon"
                />

                <div className="benefits__content">
                  <h3 className="benefits__item-title">
                    {item.title}
                  </h3>
                  <p className="benefits__item-text">
                    {item.description}
                  </p>
                </div>

                <hr className="benefits__item-separator" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}