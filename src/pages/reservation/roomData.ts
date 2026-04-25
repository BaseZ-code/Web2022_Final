export type GuestIcon = 'adult' | 'child';

export interface Room {
  id: string;
  name: string;
  badge?: {
    label: string;
    color: 'red' | 'blue' | 'green';
  };
  description: string;
  guests: GuestIcon[];
  originalPrice: number;
  currentPrice: number;
  includesTaxes: boolean;
  options: string[];
  urgency?: string;        // e.g. "Only 1 room left!"
  detailsHref?: string;
  selectVariant?: 'primary' | 'urgent'; // 'urgent' = dark red/crimson
}

export const rooms: Room[] = [
  {
    id: 'presidential-sea-front',
    name: 'Presidential Sea Front Suite',
    badge: { label: 'LIMITED TIME OFFER', color: 'red' },
    description: '85m² • Panoramic Sea View • Infinity Pool Access',
    guests: ['adult', 'adult', 'adult', 'adult'],
    originalPrice: 1295,
    currentPrice: 862,
    includesTaxes: true,
    options: ['Free Airport Transfer', 'All-Inclusive Premium'],
    urgency: 'Only 1 room left!',
    detailsHref: '#',
    selectVariant: 'urgent',
  },
  {
    id: 'deluxe-garden-view',
    name: 'Deluxe Garden View Room',
    description: '32m² • Balcony • Garden View • 1 King Bed',
    guests: ['adult', 'adult'],
    originalPrice: 345,
    currentPrice: 264,
    includesTaxes: true,
    options: ['Free Cancellation', 'Breakfast Included'],
    detailsHref: '#',
    selectVariant: 'primary',
  },
  {
    id: 'junior-suite-pool',
    name: 'Junior Suite with Private Pool',
    description: '45m² • Private Pool • Sea View • King Bed',
    guests: ['adult', 'adult', 'child'],
    originalPrice: 626,
    currentPrice: 445,
    includesTaxes: true,
    options: ['Free Cancellation', 'All-Inclusive'],
    urgency: 'Only 2 rooms left!',
    detailsHref: '#',
    selectVariant: 'primary',
  },
];
