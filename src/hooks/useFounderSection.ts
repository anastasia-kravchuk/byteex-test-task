import { useEffect, useState } from "react";
import { fetchEntries } from "../services/contentful";
import { mapAssets } from "../services/mapAssets";

import type {
  FounderSectionFields,
  FounderSectionData,
} from "../types/founderSectionTypes";
import type { ContentfulResponse } from "../types/contentfulTypes";

export function useFounderSection() {
  const [section, setSection] = useState<FounderSectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<FounderSectionFields>>("founderSection")
      .then((data) => {
        const entry = data.items[0];

        if (!entry) {
          throw new Error("FounderSection entry not found");
        }

        const assetsMap = mapAssets(data.includes?.Asset);

        const mainImageAsset =
          assetsMap[entry.fields.mainImage.sys.id];

        const secondaryImages = entry.fields.secondaryImages.map((img) => {
          const asset = assetsMap[img.sys.id];

          return {
            url: `https:${asset.file.url}`,
            alt: asset.description || asset.title || "",
          };
        });

        setSection({
          sectionTitle: entry.fields.sectionTitle,
          story: entry.fields.story,
          buttonText: entry.fields.buttonText,
          mainImage: {
            url: `https:${mainImageAsset.file.url}`,
            alt:
              mainImageAsset.description ||
              mainImageAsset.title ||
              "",
          },
          secondaryImages,
        });
      })
      .catch(() => {
        setError("Failed to load Founder section");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { section, loading, error };
}