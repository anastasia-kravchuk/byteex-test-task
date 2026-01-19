export interface ContentfulEntry<TFields> {
  fields: TFields;
}

export interface ContentfulResponse<TFields> {
  items: {
    fields: TFields;
  }[];
  includes?: {
    Asset?: ContentfulAsset[];
  };
}
export interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    title?: string;
    description?: string;
    file: {
      url: string;
      contentType: string;
    };
  };
}