export interface FAQSectionFields {
  title: string;
  images: {
    sys: {
      id: string;
    };
  }[];
  buttonText: string;
  ratingValue: number;
  ratingText: string;
}

export interface FAQImage {
  url: string;
  alt: string;
}

export interface FAQSectionData {
  title: string;
  images: FAQImage[];
  buttonText: string;
  ratingValue: number;
  ratingText: string;
}

export interface FAQItemFields {
  question: string;
  answer: string;
}

export interface FAQItemData {
  question: string;
  answer: string;
}