import { useEffect, useState } from 'react';
import { fetchEntries } from '../services/contentful';
import { mapAssets } from '../services/mapAssets';

import type { HeroData, HeroFields } from '../types/heroTypes';
import type { ContentfulResponse } from '../types/contentfulTypes';

export function useHero() {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<HeroFields>>('heroSection')
      .then((data) => {
        const entry = data.items[0];

        if (!entry) {
          throw new Error('Hero entry not found');
        }

        const assetsMap = mapAssets(data.includes?.Asset);

        const images = entry.fields.images.map((img) => {
          const asset = assetsMap[img.sys.id];

          return {
            url: `https:${asset.file.url}`,
            alt: asset.description || asset.title || '',
          };
        });

        setHero({
          title: entry.fields.title,
          bulletPoints: entry.fields.bulletPoints,
          buttonText: entry.fields.buttonText,
          images,
        });
      })
      .catch(() => {
        setError('Failed to load Hero section');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { hero, loading, error };
}