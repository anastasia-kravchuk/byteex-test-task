import { useEffect, useState } from "react";
import { fetchEntries } from "../services/contentful";
import { mapAssets } from "../services/mapAssets";
import type { ContentfulResponse } from "../types/contentfulTypes";
import type {
  TrustItemFields,
  TrustItemData,
} from "../types/finalCTASection";

export function useTrustItems() {
  const [items, setItems] = useState<TrustItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<TrustItemFields>>("trustItem")
      .then((data) => {
        if (!data.items.length) {
          throw new Error("Trust items not found");
        }

        const assetsMap = mapAssets(data.includes?.Asset);

        const mappedItems = data.items.map((item) => {
          const iconAsset = assetsMap[item.fields.icon.sys.id];

          return {
            text: item.fields.text,
            icon: {
              url: `https:${iconAsset.file.url}`,
              alt:
                iconAsset.description ||
                iconAsset.title ||
                "",
            },
          };
        });

        setItems(mappedItems);
      })
      .catch(() => {
        setError("Failed to load trust items");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { items, loading, error };
}