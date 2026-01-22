import { useEffect, useState } from "react";
import type { TestimonialData, TestimonialFields } from "../types/reviewSectionTypes";
import { fetchEntries } from "../services/contentful";
import type { ContentfulResponse } from "../types/contentfulTypes";
import { mapAssets } from "../services/mapAssets";

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<TestimonialFields>>("testimonial")
      .then((data) => {
        if (!data.items.length) {
          throw new Error("Testimonials not found");
        }

        const assetsMap = mapAssets(data.includes?.Asset);

        const mappedReviews: TestimonialData[] = data.items.map(
          (item) => {
            const avatarAsset =
              assetsMap[item.fields.authorAvatar.sys.id];

            if (!avatarAsset) {
              throw new Error("Author avatar asset not found");
            }

            return {
              authorName: item.fields.authorName,
              rating: item.fields.rating,
              text: item.fields.text,
              authorAvatar: {
                url: `https:${avatarAsset.file.url}`,
                alt:
                  avatarAsset.description ||
                  avatarAsset.title ||
                  "",
              },
            };
          }
        );

        setTestimonials(mappedReviews);
      })
      .catch(() => {
        setError("Failed to load testimonials");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { testimonials, loading, error };
}