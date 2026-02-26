export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}