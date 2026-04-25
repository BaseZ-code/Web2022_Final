import { Car, Dumbbell, MapPin, Umbrella, Utensils, Waves, Wifi } from 'lucide-react'
import { Link } from 'react-router-dom'

export type HotelResult = {
  imagePath: string
  name: string
  location: string
  stars: number
  rating: number
  ratingLabel: string
  reviewCount: number
  tags: string[]
  note: string
  originalPrice?: number
  price: number
  href: string
  badge?: string
}

type HotelResultCardProps = {
  hotel: HotelResult
}

const tagIcons: Record<string, React.ComponentType<{ 'aria-hidden'?: boolean; className?: string }>> = {
  'Airport Shuttle': Car,
  Breakfast: Utensils,
  'Free Wi-Fi': Wifi,
  Gym: Dumbbell,
  Pool: Waves,
  'Private Beach': Umbrella,
  Spa: Waves,
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value)
}

function HotelStars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-px flex-shrink-0" aria-label={`${count} star hotel`}>
      {Array.from({ length: 5 }, (_, index) => (
        <img
          alt=""
          aria-hidden
          className="w-[13px] h-[13px] block object-contain"
          src={index < count ? '/icon/BoldStar.png' : '/icon/NotBoldStar.png'}
          key={index}
        />
      ))}
    </span>
  )
}

export function HotelResultCard({ hotel }: HotelResultCardProps) {
  return (
    <article className="w-full min-h-[254px] grid grid-cols-[320px_minmax(0,1fr)] overflow-hidden border border-[rgba(203,210,224,0.7)] rounded-xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] max-md:grid-cols-1">
      <Link
        className="relative w-[320px] h-[254px] block overflow-hidden text-inherit no-underline group focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-[-3px] max-md:w-full"
        to={hotel.href}
        aria-label={`View ${hotel.name}`}
      >
        <img
          className="w-[320px] h-[254px] block object-cover transition-[filter,transform] duration-[220ms] ease-in-out group-hover:saturate-[1.08] group-hover:contrast-[1.03] group-hover:scale-[1.045] group-active:scale-[1.015] max-md:w-full"
          src={hotel.imagePath}
          alt={hotel.name}
        />
        {hotel.badge ? (
          <span className="absolute top-3 left-3 min-h-[22px] inline-flex items-center px-2.5 py-1 rounded-full text-[#005cbd] bg-white font-['Plus_Jakarta_Sans'] text-[12px] font-semibold shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            {hotel.badge}
          </span>
        ) : null}
      </Link>

      <div className="w-full min-h-[254px] flex flex-col justify-between p-6">
        <div className="w-full flex justify-between gap-4">
          <div className="min-w-0 grid content-start gap-[3.5px]">
            <div className="flex items-center gap-2 min-w-0">
              <h2 className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[1.25] whitespace-nowrap overflow-hidden text-ellipsis">
                {hotel.name}
              </h2>
              <HotelStars count={hotel.stars} />
            </div>
            <p className="flex items-center gap-1 m-0 text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[13px] font-normal leading-[1.25] whitespace-nowrap overflow-hidden text-ellipsis">
              <MapPin aria-hidden className="w-[14px] h-[14px]" />
              <span className="overflow-hidden text-ellipsis">{hotel.location}</span>
            </p>
            <div className="w-full flex flex-wrap items-center gap-2">
              {hotel.tags.map((tag) => {
                const Icon = tagIcons[tag]
                return (
                  <span
                    className="min-h-[24px] inline-flex items-center gap-[5px] px-2 py-[5px] rounded text-[#151827] bg-[#f1f2f6] font-['Plus_Jakarta_Sans'] text-[11px] font-normal leading-none"
                    key={tag}
                  >
                    {Icon ? <Icon aria-hidden className="w-3 h-3 block object-contain" /> : null}
                    {tag}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="w-fit flex-shrink-0 grid content-center justify-items-start px-3 py-1.5 rounded-lg text-[#005cbd] bg-[#e8f1fc]">
            <strong className="font-['Plus_Jakarta_Sans'] text-[14px] font-bold leading-5 whitespace-nowrap">
              {hotel.rating.toFixed(1)} {hotel.ratingLabel}
            </strong>
            <span className="text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[10px] font-normal leading-[1.2] whitespace-nowrap justify-self-start">
              {formatNumber(hotel.reviewCount)} reviews
            </span>
          </div>
        </div>

        <div className="w-full flex items-end justify-between gap-4 pt-4">
          <p className="m-0 mb-1.5 text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[12px] font-normal leading-[1.3]">
            {hotel.note}
          </p>
          <div className="grid justify-items-end gap-[5px] flex-shrink-0 w-[116px]">
            {hotel.originalPrice ? (
              <span className="text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[12px] font-normal leading-none line-through whitespace-nowrap">
                ${formatNumber(hotel.originalPrice)}
              </span>
            ) : null}
            <p className="flex items-baseline gap-1 m-0 text-[#a5204f] font-['Plus_Jakarta_Sans'] whitespace-nowrap">
              <span className="text-[24px] font-semibold leading-[31.2px] text-right align-middle">
                ${formatNumber(hotel.price)}
              </span>
              <small className="text-[#5f6271] text-[12px] font-normal">/night</small>
            </p>
            <Link
              className="min-w-[86px] h-9 inline-flex items-center justify-center px-4 py-2 rounded-lg text-white bg-[#a5204f] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] font-['Plus_Jakarta_Sans'] text-[14px] font-bold no-underline transition-[color,background,box-shadow,transform] duration-[180ms] ease-in-out hover:text-[#a5204f] hover:bg-transparent hover:shadow-[0_8px_18px_rgba(165,32,79,0.2)] hover:outline hover:outline-1 hover:outline-[#a5204f] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.96] focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-2"
              to={hotel.href}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
