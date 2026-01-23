import { useHowItWorksCards } from "../../hooks/useHowItWorksCards";
import "./HowItWorksCards.scss";
import arrowLeft from "../../assets/icons/arrow-left-icon.svg";
import arrowRight from "../../assets/icons/arrow-right-icon.svg";

export function HowItWorksCards() {
  const { steps, loading, error } = useHowItWorksCards();

  if (!steps || loading || error) {
    return null;
  }

  return (
    <div className="how-it-works">
      <button className="arrow">
        <img src={arrowLeft} alt="Previous slide" className="arrow__left-icon" />
      </button>
      {steps.map((card, index) => (
        <div
          className={`how-it-works__card  how-it-works__card--${index}`}
          key={index}
        >
          <img
            src={card.icon.url}
            alt={card.icon.alt}
            className="how-it-works__icon"
          />
          <p className="how-it-works__title">{card.title}</p>
          <p className="how-it-works__description">{card.description}</p>
        </div>
      ))}
      <button className="arrow">
        <img src={arrowRight} alt="Next slide" className="arrow__right-icon" />
      </button>
    </div>
  );
}
