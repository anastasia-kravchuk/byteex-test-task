import { useEffect, useState } from "react";
import { fetchEntries } from "../services/contentful";
import type { ContentfulResponse } from "../types/contentfulTypes";
import type { ReviewSection, ReviewSectionFields } from "../types/reviewSectionTypes";

export function useReviewsSection() {
  const [section, setSection] =
    useState<ReviewSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<ReviewSectionFields>>(
      "reviewsSection"
    )
      .then((data) => {
        const entry = data.items[0];

        if (!entry) {
          throw new Error("ReviewsSection entry not found");
        }

        setSection({
          title: entry.fields.title,
          description: entry.fields.description,
          buttonText: entry.fields.buttonText,
          ratingValue: entry.fields.ratingValue,
          ratingText: entry.fields.ratingText,
        });
      })
      .catch(() => {
        setError("Failed to load Reviews Section");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { section, loading, error };
}