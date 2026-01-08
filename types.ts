
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  type: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  illustrator: string;
  price: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  releaseDate: string;
  category: 'New Release' | 'Classic' | 'Upcoming';
  emotions: string[];
  accentColor?: string; // Universe specific accent color
  bgGradient?: string; // Universe specific background
  themes: string[];
  relatedProducts?: Product[];
}

export interface NavigationItem {
  name: string;
  path: string;
}
