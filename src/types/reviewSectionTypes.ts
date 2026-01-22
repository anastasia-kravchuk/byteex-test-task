export interface ReviewSectionFields {
  title: string;
  description: string;
  buttonText: string;
  ratingValue: number;
  ratingText: string;
}

export interface ReviewSection {
  title: string;
  description: string;
  buttonText: string;
  ratingValue: number;
  ratingText: string;
}

export interface UGCImageFields {
  image: {
    sys: {
      id: string;
    };
  };
  alt: string;
}
export interface UGCImage {
  url: string;
  alt: string;
}

export interface TestimonialFields {
  authorName: string;
  rating: number;
  text: string;
  authorAvatar: {
    sys: {
      id: string;
    };
  };
}
export interface TestimonialData {
  authorName: string;
  rating: number;
  text: string;
  authorAvatar: {
    url: string;
    alt: string;
  };
}