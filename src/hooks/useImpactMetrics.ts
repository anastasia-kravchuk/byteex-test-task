import { useEffect, useState } from "react";
import { fetchEntries } from "../services/contentful";
import { mapAssets } from "../services/mapAssets";
import type { ContentfulResponse } from "../types/contentfulTypes";
import type {
  ImpactMetricFields,
  ImpactMetricData,
} from "../types/infoBanner";

export function useImpactMetrics() {
  const [metrics, setMetrics] = useState<ImpactMetricData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<ImpactMetricFields>>("impactMetric")
      .then((data) => {
        if (!data.items.length) {
          throw new Error("Impact metrics not found");
        }

        const assetsMap = mapAssets(data.includes?.Asset);

        const mappedMetrics: ImpactMetricData[] = data.items.map((item) => {
          const iconAsset = assetsMap[item.fields.icon.sys.id];

          return {
            value: item.fields.value,
            description: item.fields.description,
            icon: {
              url: `https:${iconAsset.file.url}`,
              alt:
                iconAsset.description ||
                iconAsset.title ||
                "",
            },
          };
        });

        setMetrics(mappedMetrics);
      })
      .catch(() => {
        setError("Failed to load impact metrics");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { metrics, loading, error };
}