import { useEffect, useState } from "react";
import { fetchEntries } from "../services/contentful";
import { mapAssets } from "../services/mapAssets";

import type {
  ContentfulResponse,
} from "../types/contentfulTypes";
import type {
  FAQSectionFields,
  FAQSectionData,
} from "../types/faqSectionTypes";

export function useFAQSection() {
  const [section, setSection] = useState<FAQSectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<FAQSectionFields>>("faqSection")
      .then((data) => {
        const entry = data.items[0];

        if (!entry) {
          throw new Error("FAQSection entry not found");
        }

        const assetsMap = mapAssets(data.includes?.Asset);

        const images = entry.fields.images.map((img) => {
          const asset = assetsMap[img.sys.id];

          return {
            url: `https:${asset.file.url}`,
            alt: asset.description || asset.title || "",
          };
        });

        setSection({
          title: entry.fields.title,
          images,
          buttonText: entry.fields.buttonText,
          ratingValue: entry.fields.ratingValue,
          ratingText: entry.fields.ratingText,
        });
      })
      .catch(() => {
        setError("Failed to load FAQ section");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { section, loading, error };
}