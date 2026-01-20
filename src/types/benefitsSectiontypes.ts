export interface BenefitsSectionFields {
  sectionTitle: string;
}

export interface BenefitsSectionData {
  sectionTitle: string;
}

export interface BenefitItemFields {
  title: string;
  description: string;
  icon?: {
    sys: {
      id: string;
    };
  };
}

export interface BenefitItem {
  title: string;
  description: string;
  icon?: {
    url: string;
    alt: string;
  };
}

export interface BenefitsSlideFields {
  caption: string;
  image?: {
    sys: {
      id: string;
    };
  };
}

export interface BenefitsSlide {
  caption: string;
  image?: {
    url: string;
    alt: string;
  };
}
