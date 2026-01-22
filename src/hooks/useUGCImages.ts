import { useEffect, useState } from "react";
import { fetchEntries } from "../services/contentful";
import { mapAssets } from "../services/mapAssets";
import type { ContentfulResponse } from "../types/contentfulTypes";
import type { UGCImage, UGCImageFields } from "../types/reviewSectionTypes";

export function useUGCImages() {
  const [images, setImages] = useState<UGCImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntries<ContentfulResponse<UGCImageFields>>("ugcImage")
      .then((data) => {
        if (!data.items.length) {
          throw new Error("UGC images not found");
        }

        const assetsMap = mapAssets(data.includes?.Asset);

        const mappedImages = data.items.map((item) => {
          const assetFields =
            assetsMap[item.fields.image.sys.id];

          return {
            url: `https:${assetFields.file.url}`,
            alt:
              item.fields.alt ||
              assetFields.description ||
              assetFields.title ||
              "",
          };
        });

        setImages(mappedImages);
      })
      .catch(() => {
        setError("Failed to load UGC images");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { images, loading, error };
}