import { Book, NavigationItem } from './types';

export const NAV_ITEMS: NavigationItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Collections', path: '/collections' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const BOOKS: Book[] = [
  {
    id: 'where-does-love-go',
    title: 'Where Does Love Go?',
    author: 'Loraine Velez-Lugo',
    illustrator: 'Paola A. Cisante',
    price: '$15.99',
    description: 'Where Does Love Go? follows Little Willow as she remembers the quiet, loving moments she shared with her guardian, Grand Willow. When Grand Willow is no longer there, Little Willow begins to wonder where that love has gone and slowly discovers that love does not disappear, it finds new ways to stay with us.',
    shortDescription: 'A gentle journey through the landscape of childhood grief.',
    coverImage: 'https://i.ibb.co/20LJ7gZ6/Chat-GPT-Image-Jul-8-2026-03-11-20-PM.png',
    releaseDate: 'Available Now',
    category: 'New Release',
    emotions: ['Grief', 'Mourning', 'Enduring Love'],
    themes: ['Love', 'Loss', 'Mourning', 'Reassurance', 'Connection', 'Absence'],
    accentColor: '#E3256B',
    bgGradient: 'from-brand-light to-white',
    amazonUrl: 'https://a.co/d/0jjJEnFV',
    relatedProducts: [
      {
        id: 'p1',
        name: 'The Comfort Bear',
        description: 'Weighted to provide a calming embrace.',
        price: '$34.00',
        image: 'https://i.ibb.co/qMyZHFtD/product-bear.png',
        type: 'Plush Companion'
      },
      {
        id: 'p2',
        name: 'Glow-with-Me Light',
        description: 'A soft, warm heart-light for bedside reading.',
        price: '$28.00',
        image: 'https://i.ibb.co/BVdmd584/product-light.png',
        type: 'Soothing Glow'
      }
    ]
  }
];