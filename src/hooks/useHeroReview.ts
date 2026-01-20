import { useEffect, useState } from 'react';
import { fetchEntries } from '../services/contentful';
import { mapAssets } from '../services/mapAssets';

import type { ReviewFields, ReviewData } from '../types/heroTypes';
import type { ContentfulResponse } from '../types/contentfulTypes';

export function useHeroReview() {
  const [review, setReview] = useState<ReviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<ReviewFields>>('review')
      .then((data) => {
        const entry = data.items[0];

        if (!entry) {
          throw new Error('Review not found');
        }

        const assetsMap = mapAssets(data.includes?.Asset);

        let authorImage;

        if (entry.fields.authorImage) {
          const asset = assetsMap[entry.fields.authorImage.sys.id];

          if (asset) {
            authorImage = {
              url: `https:${asset.file.url}`,
              alt: asset.description || asset.title || '',
            };
          }
        }

        setReview({
          authorName: entry.fields.authorName,
          rating: entry.fields.rating,
          text: entry.fields.text,
          authorImage,
        });
      })
      .catch(() => {
        setError('Failed to load review');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { review, loading, error };
}