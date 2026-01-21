import { useEffect, useState } from "react";
import type { HowItWorksCard, HowItWorksCardFields } from "../types/orderSectionTypes";
import type { ContentfulResponse } from "../types/contentfulTypes";
import { fetchEntries } from "../services/contentful";
import { mapAssets } from "../services/mapAssets";

export function useHowItWorksCards() {
  const [steps, setSteps] = useState<HowItWorksCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<HowItWorksCardFields>>(
      "howItWorksStep"
    )
      .then((data) => {
        if (!data.items.length) {
          throw new Error("HowItWorksCard entries not found");
        }

        const assetsMap = mapAssets(data.includes?.Asset);

        const mappedSteps = data.items.map((item) => {
          const iconAsset =
            assetsMap[item.fields.icon.sys.id];

          return {
            title: item.fields.title,
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

        setSteps(mappedSteps);
      })
      .catch(() => {
        setError("Failed to load How It Works steps");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { steps, loading, error };
}