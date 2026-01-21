export interface FounderSectionFields {
  sectionTitle: string;
  story: string;
  buttonText: string;

  mainImage: {
    sys: {
      id: string;
    };
  };

  secondaryImages: {
    sys: {
      id: string;
    };
  }[];
}

export interface FounderImage {
  url: string;
  alt: string;
}

export interface FounderSectionData {
  sectionTitle: string;
  story: string;
  buttonText: string;
  mainImage: FounderImage;
  secondaryImages: FounderImage[];
}