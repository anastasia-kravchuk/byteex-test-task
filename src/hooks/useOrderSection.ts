import { useEffect, useState } from "react";
import { fetchEntries } from "../services/contentful";
import type { ContentfulResponse } from "../types/contentfulTypes";
import type {
  OrderSectionFields,
  HowToOrderSection,
} from "../types/orderSectionTypes";

export function useOrderSection() {
  const [section, setSection] =
    useState<HowToOrderSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<OrderSectionFields>>(
      "howToOrderSection"
    )
      .then((data) => {
        const entry = data.items[0];

        if (!entry) {
          throw new Error("HowToOrderSection entry not found");
        }

        setSection({
          title: entry.fields.title,
          buttonText: entry.fields.buttonText,
          ratingValue: entry.fields.ratingValue,
          ratingText: entry.fields.ratingText,
        });
      })
      .catch(() => {
        setError("Failed to load How To Order section");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { section, loading, error };
}