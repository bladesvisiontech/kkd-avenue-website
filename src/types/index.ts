export interface MenuSpecial {
  day: string;
  items: { name: string; price: string; note?: string }[];
}

export interface MenuSection {
  title: string;
  subtitle: string;
  meats?: string[];
  pairs?: string[];
  entrees?: string[];
  sides?: string[];
  mains?: string[];
  desserts?: string[];
}

export interface PricingPackage {
  tag: string;
  title: string;
  titleItalic?: boolean;
  description: string;
  startingFrom: string;
  startingLabel: string;
  features: string[];
  ctaLabel: string;
  ctaLink: string;
  variant: 'light' | 'dark';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: number;
  img: string;
  title: string;
  type: 'Food' | 'Venue';
}

export interface Service {
  id: string;
  title: string;
  titleEm: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  link: string;
}

export interface SiteContact {
  address: string;
  addressUrl: string;
  phone: string;
  email: string;
}

export interface SiteHours {
  label: string;
  value: string;
}

export interface SiteSocial {
  instagram: string;
  tiktok: string;
}
