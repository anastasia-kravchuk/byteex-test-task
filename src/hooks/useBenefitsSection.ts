import { useEffect, useState } from 'react';
import { fetchEntries } from '../services/contentful';

import type {
  BenefitsSectionFields,
  BenefitsSectionData,
} from '../types/benefitsSectiontypes';
import type { ContentfulResponse } from '../types/contentfulTypes';

export function useBenefitsSection() {
  const [section, setSection] = useState<BenefitsSectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<BenefitsSectionFields>>(
      'benefitsSectionContainer',
    )
      .then((data) => {
        const entry = data.items[0];

        if (!entry) {
          throw new Error('Benefits section not found');
        }

        setSection({
          sectionTitle: entry.fields.sectionTitle,
        });
      })
      .catch(() => {
        setError('Failed to load Benefits section');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { section, loading, error };
}
