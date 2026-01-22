import { useState } from "react";
import { useFAQItems } from "../../../hooks/useFAQItems";
import './FAQItems.scss';

export function FAQItems() {
  const { items, loading, error } = useFAQItems();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!items || loading || error) {
    return null;
  }
  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!items || loading || error) {
    return null;
  }

  return (
    <ul className="faq__list">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <li
            className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
            key={index}
          >
            <div className="faq__header">
              <h3 className="faq__question">{item.question}</h3>
              <button className="faq__button" onClick={() => toggleItem(index)}>
                {isOpen ? "-" : "+"}
              </button>
            </div>

            {isOpen && (
              <div className="faq__answear--wrapper">
                <p className="faq__answear">{item.answer}</p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
