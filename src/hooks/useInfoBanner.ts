import { useEffect, useState } from "react";
import type { InfoBannerFields } from "../types/infoBanner";
import type { ContentfulResponse } from "../types/contentfulTypes";
import { fetchEntries } from "../services/contentful";

export function useInfoBanner() {
  const [section, setSection] = useState<InfoBannerFields | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<InfoBannerFields>>(
      'infoBanner',
    )
      .then((data) => {
        const entry = data.items[0];

        if (!entry) {
          throw new Error('Info Banner not found');
        }

        setSection({
          title: entry.fields.title
        });
      })
      .catch(() => {
        setError('Failed to Info Banner');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { section, loading, error };
}