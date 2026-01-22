import { useEffect, useState } from "react";
import { fetchEntries } from "../services/contentful";
import type { ContentfulResponse } from "../types/contentfulTypes";
import type { FAQItemFields, FAQItemData } from "../types/faqSectionTypes";

export function useFAQItems() {
  const [items, setItems] = useState<FAQItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<FAQItemFields>>("faqItem")
      .then((data) => {
        if (!data.items.length) {
          throw new Error("FAQ items not found");
        }

        const mappedItems: FAQItemData[] = data.items.map((item) => ({
          question: item.fields.question,
          answer: item.fields.answer,
        }));

        setItems(mappedItems);
      })
      .catch(() => {
        setError("Failed to load FAQ items");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { items, loading, error };
}