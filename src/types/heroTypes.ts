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