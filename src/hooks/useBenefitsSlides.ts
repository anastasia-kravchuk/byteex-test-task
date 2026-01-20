import { useEffect, useState } from 'react';
import { fetchEntries } from '../services/contentful';
import { mapAssets } from '../services/mapAssets';

import type {
  BenefitsSlideFields,
  BenefitsSlide,
} from '../types/benefitsSectiontypes';
import type { ContentfulResponse } from '../types/contentfulTypes';

export function useBenefitsSlides() {
  const [slides, setSlides] = useState<BenefitsSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<BenefitsSlideFields>>('benefitsSlide')
      .then((data) => {
        const assetsMap = mapAssets(data.includes?.Asset);

        const mappedSlides = data.items.map((entry) => {
          let image;

          if (entry.fields.image) {
            const asset = assetsMap[entry.fields.image.sys.id];

            image = asset
              ? {
                  url: `https:${asset.file.url}`,
                  alt: asset.description || asset.title || '',
                }
              : undefined;
          }

          return {
            caption: entry.fields.caption,
            image,
          };
        });

        setSlides(mappedSlides);
      })
      .catch(() => {
        setError('Failed to load Benefits slides');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { slides, loading, error };
}
