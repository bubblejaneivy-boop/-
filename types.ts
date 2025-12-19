export interface MenuItem {
  id: string;
  category: 'beer' | 'food';
  nameZH: string;
  nameJP: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

export interface StorySection {
  titleZH: string;
  titleJP: string;
  content: string;
  image: string;
}

export interface NavItem {
  label: string;
  jpLabel: string;
  href: string;
}