import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export type FlashDeal = {
  picturePath: string
  name: string
  location: string
  stars: number
  originalPrice: number
  availablePrice: number
  href: string
  discountLabel?: string
}

type FlashDealCardProps = {
  deal: FlashDeal
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US').format(price)
}

function DealStars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-px flex-shrink-0" aria-label={`${count} star hotel`}>
      {Array.from({ length: 5 }, (_, index) => (
        <img
          alt=""
          aria-hidden
          className="w-[14px] h-[14px] block object-contain"
          src={index < count ? '/icon/BoldStar.png' : '/icon/NotBoldStar.png'}
          key={index}
        />
      ))}
    </span>
  )
}

export function FlashDealCard({ deal }: FlashDealCardProps) {
  return (
    <article className="w-full h-[192px] grid grid-cols-[256px_minmax(0,1fr)] border-0 border-b border-[rgba(203,210,224,0.45)] overflow-hidden bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] last:border-b-0 last:rounded-b-[14px] max-lg:grid-cols-1">
      <Link
        className="relative w-[256px] h-[192px] block overflow-hidden text-inherit no-underline group focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-[-3px] max-lg:w-full"
        to={deal.href}
        aria-label={`View ${deal.name}`}
      >
        <img
          className="w-[256px] h-[192px] block object-cover transition-[filter,transform] duration-[220ms] ease-in-out group-hover:saturate-[1.08] group-hover:contrast-[1.03] group-hover:scale-[1.045] group-active:scale-[1.015] max-lg:w-full"
          src={deal.picturePath}
          alt={deal.name}
        />
        {deal.discountLabel ? (
          <span className="absolute top-4 left-4 inline-flex items-center min-h-8 px-4 py-1.5 rounded-lg text-white bg-[#a5204f] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] font-['Plus_Jakarta_Sans'] text-[16px] font-[750] leading-none">
            {deal.discountLabel}
          </span>
        ) : null}
      </Link>

      <div className="w-full h-[192px] px-5 py-[57.4px] min-w-0 max-lg:w-full">
        <div className="w-full flex items-center justify-between gap-6 m-0 max-lg:w-full">
          <div className="w-full max-w-[450px] grid gap-[3.5px] min-w-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <h2 className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[24px] font-normal leading-[1.1] whitespace-nowrap overflow-hidden text-ellipsis">
                {deal.name}
              </h2>
              <DealStars count={deal.stars} />
            </div>
            <p className="flex items-center gap-1 m-0 text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[15px] font-normal leading-[1.25] whitespace-nowrap overflow-hidden text-ellipsis">
              <MapPin aria-hidden className="w-4 h-4" />
              <span className="overflow-hidden text-ellipsis">{deal.location}</span>
            </p>
          </div>

          <div className="w-[96px] flex-shrink-0 grid justify-items-end content-start gap-5">
            <div className="grid justify-items-end gap-1">
              <span className="text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[14px] font-normal leading-none line-through whitespace-nowrap">
                ${formatPrice(deal.originalPrice)}
              </span>
              <p className="flex items-baseline gap-1 m-0 text-[#a5204f] font-['Plus_Jakarta_Sans'] whitespace-nowrap">
                <span className="text-[24px] font-semibold leading-[31.2px] text-right align-middle">
                  ${formatPrice(deal.availablePrice)}
                </span>
                <small className="text-[#5f6271] text-[14px] font-normal">/night</small>
              </p>
            </div>
            <Link
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-white bg-[#a5204f] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] font-['Plus_Jakarta_Sans'] text-[14px] font-bold leading-none no-underline transition-[color,background,box-shadow,transform] duration-[180ms] ease-in-out hover:text-[#a5204f] hover:bg-transparent hover:shadow-[0_8px_18px_rgba(165,32,79,0.2)] hover:outline hover:outline-1 hover:outline-[#a5204f] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.96] focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-2"
              to={deal.href}
            >
              Claim
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
