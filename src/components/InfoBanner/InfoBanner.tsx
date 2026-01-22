import { useImpactMetrics } from "../../hooks/useImpactMetrics";
import { useInfoBanner } from "../../hooks/useInfoBanner";
import "./InfoBanner.scss";

export function InfoBunner() {
  const { section, loading, error } = useInfoBanner();
  const { metrics, loading: mLoading, error: mError } = useImpactMetrics();

  if (!section || loading || error || mLoading || mError) {
    return null;
  }

  return (
    <section className="info-banner">
      <h2 className="info-banner__title">{section.title}</h2>
      <div className="info-banner__impact-metrics">
        {metrics.map((metric, index) => (
          <div
            className={`info-banner__metric info-banner__metric--${index}`}
            key={index}
          >
            <img
              src={metric.icon.url}
              alt={metric.icon.alt}
              className="info-banner__metric-image"
            />

            <p className="info-banner__metric-value">{metric.value}</p>
            <p className="info-banner__metric-description">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
