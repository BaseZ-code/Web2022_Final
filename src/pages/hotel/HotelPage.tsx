import { FilterSidebar } from '../../components/Aside/FilterSidebar'
import { MapCta } from '../../components/Aside/MapCta'
import { FlashDealCard, type FlashDeal } from '../../components/FlashCard/FlashDealCard'
import { ResultsHeader } from '../../components/FlashCard/ResultsHeader'
import Footer from '../../components/Footer'
import { HotelResultCard, type HotelResult } from '../../components/HotelResultCard'
import { Pagination } from '../../components/Pagination'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import NavBar from '../home/Navbar'

const flashDeals: FlashDeal[] = [
  {
    picturePath: '/FlashHotel/Uluwatu luxury villa.png',
    name: 'Mandala Sky Luxury Villas',
    location: 'Uluwatu, Bali ● Cliff-top view',
    stars: 5,
    originalPrice: 1200,
    availablePrice: 480,
    href: '/reservation',
    discountLabel: '60% OFF',
  },
  {
    picturePath: '/FlashHotel/Ubud jungle retreat.png',
    name: 'Emerald Jungle Retreat',
    location: 'Ubud, Bali ● Rainforest hideaway',
    stars: 5,
    originalPrice: 450,
    availablePrice: 247,
    href: '/reservation',
    discountLabel: '45% OFF',
  },
  {
    picturePath: '/FlashHotel/Seminyak beach club resort.png',
    name: 'Seminyak Shores Club',
    location: 'Seminyak, Bali ● Beachfront access',
    stars: 4,
    originalPrice: 680,
    availablePrice: 442,
    href: '/reservation',
    discountLabel: '35% OFF',
  },
]

const hotelResults: HotelResult[] = [
  {
    imagePath: '/NormalHotel/The Azure Serenity Resort.png',
    name: 'The Azure Serenity Resort',
    location: 'Ubud, Bali ● 2.5 km from center',
    stars: 5,
    rating: 8.9,
    ratingLabel: 'Excellent',
    reviewCount: 1240,
    tags: ['Free Wi-Fi', 'Pool', 'Breakfast'],
    note: 'Only 2 rooms left at this price!',
    originalPrice: 320,
    price: 284,
    href: '/reservation',
    badge: 'Top Choice',
  },
  {
    imagePath: '/NormalHotel/Lumina Beach Villas.png',
    name: 'Lumina Beach Villas',
    location: 'Seminyak, Bali - Beachfront',
    stars: 5,
    rating: 9.2,
    ratingLabel: 'Exceptional',
    reviewCount: 856,
    tags: ['Private Beach', 'Spa'],
    note: 'Free cancellation before Oct 10',
    price: 415,
    href: '/reservation',
  },
  {
    imagePath: '/NormalHotel/The Palms Sanctuary.png',
    name: 'The Palms Sanctuary',
    location: 'Nusa Dua, Bali - 0.8 km from beach',
    stars: 4,
    rating: 8.4,
    ratingLabel: 'Great',
    reviewCount: 2102,
    tags: ['Airport Shuttle', 'Gym'],
    note: 'Breakfast + Dinner deal available',
    price: 189,
    href: '/reservation',
  },
]

export function HotelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 py-6 mb-16" aria-label="Page content">
        <SearchBar />
        <div className="flex gap-6 items-start mt-6">
          <aside className="w-[280px] flex-shrink-0 flex flex-col gap-4 sticky top-20" aria-label="Search filters and map">
            <FilterSidebar />
            <MapCta />
          </aside>
          <section className="flex-1 min-w-0 flex flex-col gap-5" aria-labelledby="flash-deals-title">
            <ResultsHeader count={245} location="Bali" sortValue="Recommended" />
            <div className="flex flex-col">
              <div className="bg-white border border-[#CBD2E0] rounded-2xl overflow-hidden">
                <header className="flex items-center justify-between px-5 py-3 bg-[rgba(165,32,79,0.08)] text-[#a5204f]">
                  <div className="flex items-center gap-2 font-bold text-[16px] font-['Plus_Jakarta_Sans']">
                    <img src="/icon/Flash.png" alt="" aria-hidden className="w-5 h-5" />
                    <h1 id="flash-deals-title" className="text-[16px] m-0">Flash Deals for You</h1>
                  </div>
                  <div className="flex items-center gap-2 text-[14px] font-['Plus_Jakarta_Sans']" aria-label="Deal ends in 8 hours 45 minutes 12 seconds">
                    <span>Ends in:</span>
                    <strong className="tabular-nums">08 : 45 : 12</strong>
                  </div>
                </header>
                {flashDeals.map((deal) => (
                  <FlashDealCard deal={deal} key={deal.name} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {hotelResults.map((hotel) => (
                <HotelResultCard hotel={hotel} key={hotel.name} />
              ))}
            </div>
            <Pagination />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
