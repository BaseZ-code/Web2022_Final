export interface Review {
  id: string;
  rating: number; // supports 0.5 increments, e.g. 4.5
  date: string;
  quote: string;
  reviewer: {
    initials: string;
    name: string;
    country: string;
    avatarBg: string;  // tailwind bg class
    avatarText: string; // tailwind text class
  };
}

export const reviews: Review[] = [
  {
    id: 'sophia-martinez',
    rating: 5,
    date: 'May 12, 2024',
    quote:
      '"An absolute paradise. The views from the Presidential Suite are unmatched. The service was impeccable from start to finish."',
    reviewer: {
      initials: 'SM',
      name: 'Sophia Martinez',
      country: 'United Kingdom',
      avatarBg: 'bg-[#DDD6FE]',
      avatarText: 'text-[#5B21B6]',
    },
  },
  {
    id: 'james-wilson',
    rating: 4.5,
    date: 'Apr 28, 2024',
    quote:
      '"Excellent facilities and great breakfast selection. The private beach is beautiful, though the city center is a bit of a walk."',
    reviewer: {
      initials: 'JW',
      name: 'James Wilson',
      country: 'United States',
      avatarBg: 'bg-[#FBCFE8]',
      avatarText: 'text-[#9D174D]',
    },
  },
  {
    id: 'anna-kowalski',
    rating: 5,
    date: 'Apr 15, 2024',
    quote:
      '"The spa treatments were heavenly. Truly a five-star experience. We will definitely be coming back next summer."',
    reviewer: {
      initials: 'AK',
      name: 'Anna Kowalski',
      country: 'Germany',
      avatarBg: 'bg-[#FED7AA]',
      avatarText: 'text-[#92400E]',
    },
  },
];
