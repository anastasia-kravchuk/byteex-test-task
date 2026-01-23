// hooks/useFinalCTASection.ts
import { useEffect, useState } from "react";
import { fetchEntries } from "../services/contentful";
import { mapAssets } from "../services/mapAssets";
import type { ContentfulResponse } from "../types/contentfulTypes";
import type {
  FinalCTASectionFields,
  FinalCTASectionData,
} from "../types/finalCTASection";

export function useFinalCTASection() {
  const [section, setSection] =
    useState<FinalCTASectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<FinalCTASectionFields>>(
      "finalCtaSection"
    )
      .then((data) => {
        const entry = data.items[0];

        if (!entry) {
          throw new Error("Final CTA section not found");
        }

        const assetsMap = mapAssets(data.includes?.Asset);

        const images = entry.fields.images.map((img) => {
          const asset = assetsMap[img.sys.id];

          return {
            url: `https:${asset.file.url}`,
            alt:
              asset.description ||
              asset.title ||
              "",
          };
        });

        setSection({
          title: entry.fields.title,
          description: entry.fields.description,
          buttonText: entry.fields.buttonText,
          images,
        });
      })
      .catch(() => {
        setError("Failed to load Final CTA section");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { section, loading, error };
}
