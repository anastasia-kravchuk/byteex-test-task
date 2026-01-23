export interface FinalCTASectionFields {
  title: string;
  description: string;
  buttonText: string;
  images: {
    sys: {
      id: string;
    };
  }[];
}

export interface FinalCTASectionData {
  title: string;
  description: string;
  buttonText: string;
  images: {
    url: string;
    alt: string;
  }[];
}