export interface HeroFields {
  title: string;
  bulletPoints: string[];
  buttonText: string;
  images: {
    sys: {
      id: string;
    };
  }[];
}
export interface HeroImage {
  url: string;
  alt: string;
}
export interface HeroData {
  title: string;
  bulletPoints: string[];
  buttonText: string;
  images: HeroImage[];
}
export interface ReviewFields {
  authorName: string;
  rating: number;
  text: string;
  authorImage?: {
    sys: {
      id: string;
    };
  };
}
export interface ReviewData {
  authorName: string;
  rating: number;
  text: string;
  authorImage?: {
    url: string;
    alt: string;
  };
}