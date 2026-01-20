import { useEffect, useState } from 'react';
import { fetchEntries } from '../services/contentful';
import { mapAssets } from '../services/mapAssets';

import type { BenefitItemFields, BenefitItem } from '../types/benefitsSectiontypes';
import type { ContentfulResponse } from '../types/contentfulTypes';

export function useBenefitItems() {
  const [items, setItems] = useState<BenefitItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<BenefitItemFields>>('benefitItem')
      .then((data) => {
        const assetsMap = mapAssets(data.includes?.Asset);

        const mappedItems = data.items.map((entry) => {
          let icon;

          if (entry.fields.icon) {
            const asset = assetsMap[entry.fields.icon.sys.id];

            icon = asset
              ? {
                  url: `https:${asset.file.url}`,
                  alt: asset.description || asset.title || '',
                }
              : undefined;
          }

          return {
            title: entry.fields.title,
            description: entry.fields.description,
            icon,
          };
        });

        setItems(mappedItems);
      })
      .catch(() => {
        setError('Failed to load Benefit items');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { items, loading, error };
}
