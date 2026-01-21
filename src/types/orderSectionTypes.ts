export interface HowItWorksCardFields {
  title: string;
  description: string;
  icon: {
    sys: {
      id: string;
    };
  };
}

export interface HowItWorksCard {
  title: string;
  description: string;
  icon: {
    url: string;
    alt: string;
  };
}

export interface OrderSectionFields {
  title: string;
  buttonText: string;
  ratingValue: number;
  ratingText: string;
}

export interface HowToOrderSection {
  title: string;
  buttonText: string;
  ratingValue: number;
  ratingText: string;
}
