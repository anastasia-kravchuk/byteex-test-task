import { useTrustItems } from "../../../hooks/useTrustItems";
import "./TrustItems.scss";

export function TrustItems() {
  const { items, loading, error } = useTrustItems();
  if (!items || loading || error) {
    return null;
  }

  return (
    <ul className="trust">
      {items.map((item, index) => (
        <li className={`trust__item trust__item--${index}`} key={index}>
          <img
            src={item.icon.url}
            alt={item.icon.alt}
            className="trust__item-image"
          />
          <p className="trust__item-text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
