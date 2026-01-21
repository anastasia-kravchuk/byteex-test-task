import "./Hero.scss";
import { useHero } from "../../hooks/useHero";
import logo from "../../assets/logo.svg";
import iconComfort from "../../assets/icons/icon-comfort.svg";
import iconRecycle from "../../assets/icons/icon-recycle.svg";
import iconFabric from "../../assets/icons/icon-fabric.svg";
import { HeroReview } from "../HeroReview/HeroReview";

const ICONS = [iconComfort, iconRecycle, iconFabric];

export function Hero() {
  const { hero, loading, error } = useHero();

  if (loading || error || !hero) {
    return null;
  }

  return (
    <>
      <header className="hero-header">
        <p className="hero-header__text hero-header__text--desktop">
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
          SHIPPING on orders &gt; $200 | easy 45 day return window.
        </p>

        <p className="hero-header__text hero-header__text--mobile">
          FREE SHIPPING on orders &gt; $200
        </p>
      </header>

      <section className="hero">
        <div className="hero__container">
          <div className="hero__branding">
            <img src={logo} alt="Byteex logo" className="hero__logo" />

            <h1 className="hero__title">{hero.title}</h1>
          </div>

          <div className="hero__content">
            <div className="hero__images">
              {hero.images.map((image, index) => (
                <div
                  key={index}
                  className={`hero__image-wrapper hero__image-wrapper--${index}`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="hero__image"
                  />
                </div>
              ))}
            </div>

            <div className="hero__text">
              <ul className="hero__bullet-list">
                {hero.bulletPoints.map((point, index) => (
                  <li key={index} className="hero__bullet-item">
                    <span className="hero__bullet-icon" aria-hidden>
                      <img src={ICONS[index]} alt="" />
                    </span>
                    <span className="hero__bullet-text">{point}</span>
                  </li>
                ))}
              </ul>

              <button className="hero__cta">
                {hero.buttonText}
                <span className="hero__cta-arrow">→</span>
              </button>

              <div className="hero__review-floating">
                <HeroReview />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
