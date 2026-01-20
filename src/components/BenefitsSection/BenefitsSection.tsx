import { useBenefitItems } from "../../hooks/useBenefitItem";
import { useBenefitsSection } from "../../hooks/useBenefitsSection";
import "./BenefitsSection.scss";

export function BenefitsSection() {
  const { section } = useBenefitsSection();
  const { items } = useBenefitItems();

  return (
    <section className="benefits">
      <h2 className="benefits__title">{section?.sectionTitle}</h2>

      <ul className="benefits__list">
        {items.map((item, index) => (
          <li key={index} className="benefits__item">
            <img
              src={item?.icon?.url}
              alt={item?.icon?.alt}
              className="benefits__icon"
            />

            <div className="benefits__content">
              <h3 className="benefits__item-title">{item.title}</h3>
              <p className="benefits__item-text">{item.description}</p>
            </div>

            <hr className="benefits__item-separator" />
          </li>
        ))}
      </ul>
    </section>
  );
}
