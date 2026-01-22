export interface InfoBannerFields {
  title: string;
}

export interface ImpactMetricFields {
  icon: {
    sys: {
      id: string;
    };
  };
  description: string;
  value: string;
}

export interface ImpactMetricData {
  icon: {
    url: string;
    alt: string;
  };
  description: string;
  value: string;
}