import type { ContentfulAsset } from './types';

export function mapAssets(assets: ContentfulAsset[] = []) {
  return assets.reduce<Record<string, ContentfulAsset['fields']>>(
    (acc, asset) => {
      acc[asset.sys.id] = asset.fields;
      return acc;
    },
    {}
  );
}