import { Link } from 'react-router-dom'
import BangkokImage from "../../assets/Bangkok.png" 
import TokyoImage from "../../assets/Tokyo.png" 
import ParisImage from "../../assets/Paris.png" 
import LondonImage from "../../assets/London.png" 

// Define the type for our destination data
interface Destination {
  id: string;
  location: string;
  startingPrice: number;
  imageUrl: string;
  isTopRated?: boolean;
}

const destinationsData: Destination[] = [
  {
    id: 'bangkok',
    location: 'Bangkok, Thailand',
    startingPrice: 120,
    imageUrl: `${BangkokImage}`,
    isTopRated: true,
  },
  {
    id: 'tokyo',
    location: 'Tokyo, Japan',
    startingPrice: 250,
    imageUrl: `${TokyoImage}`,
  },
  {
    id: 'paris',
    location: 'Paris, France',
    startingPrice: 180,
    imageUrl: `${ParisImage}`,
  },
  {
    id: 'london',
    location: 'London, UK',
    startingPrice: 210,
    imageUrl: `${LondonImage}`,
  },
];

export default function TrendingDestinations() {
  return (
    <section className="py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#191C22] mb-1">
              Trending Destinations
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#424753]">
              Handpicked favorites for your next adventure
            </p>
          </div>
          <a 
            href="#" 
            className="font-['Plus_Jakarta_Sans'] font-semibold text-[#1a56db] hover:text-blue-800 transition-colors text-[15px]"
          >
            View all
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationsData.map((destination) => (
            <Link key={destination.id} to="/hotels" className="group cursor-pointer no-underline text-inherit">
              
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <img 
                  src={destination.imageUrl} 
                  alt={destination.location} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Top Rated Badge */}
                {destination.isTopRated && (
                  <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full">
                    <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-wide text-[#191C22] uppercase">
                      Top Rated
                    </span>
                  </div>
                )}
              </div>

              {/* Card Text Info */}
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#191C22] mb-0.5">
                  {destination.location}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#424753]">
                  Starting from{' '}
                  <span className="font-semibold text-[#1a56db]">
                    ${destination.startingPrice}
                  </span>
                </p>
              </div>
              
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
