import { ChevronDown } from 'lucide-react'

const amenities = [
  { icon: '/icon/swim.png', label: '3 Outdoor Pools' },
  { icon: '/icon/flower.png', label: 'Full-service Spa' },
  { icon: '/icon/Icon-1.png', label: '5 Restaurants' },
  { icon: '/icon/dumbell.png', label: 'Gym & Fitness' },
  { icon: '/icon/wifi.png', label: 'Free High-speed Wi-Fi' },
  { icon: '/icon/umbrella.png', label: 'Private Beach' },
]

export function ReservationDetails() {
  return (
    <section className="w-full grid content-start gap-12 pb-[166px] max-md:w-[calc(100%-48px)]" aria-label="Hotel overview and amenities">
      <section className="w-full grid content-start gap-4 max-md:h-auto">
        <h2 className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-6">
          Overview
        </h2>
        <p className="m-0 text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-[26px]">
          Experience unparalleled luxury at the Grand Azure Resort & Spa, nestled on the
          pristine shores of Elounda Bay. This architectural masterpiece blends traditional
          Cretan charm with ultra-modern design, offering guests breathtaking panoramic
          views of the Mediterranean. Whether you're seeking a romantic getaway or a
          rejuvenation retreat, our world-class amenities and personalized service ensure
          a stay that transcends the ordinary.
        </p>
      </section>

      <section className="w-full grid content-start gap-6 max-md:h-auto">
        <h2 className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-6">
          Popular Amenities
        </h2>
        <div className="w-full grid grid-cols-3 grid-rows-[28px_28px] gap-6 max-md:grid-cols-1 max-md:grid-rows-none">
          {amenities.map((amenity) => (
            <div className="inline-flex items-center gap-3 text-[#151827] font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-6 whitespace-nowrap" key={amenity.label}>
              <img src={amenity.icon} alt="" aria-hidden className="w-6 h-6 block object-contain" />
              <span>{amenity.label}</span>
            </div>
          ))}
        </div>
        <button
          className="w-fit h-6 inline-flex items-center gap-1.5 p-0 border-0 text-[#005cbd] bg-transparent font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-6 cursor-pointer transition-[color,transform] duration-150 ease-in-out hover:text-[#004f9f] hover:-translate-y-px active:translate-y-px focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-2"
          type="button"
        >
          <span>See all 45 amenities</span>
          <ChevronDown aria-hidden className="w-4 h-4" />
        </button>
      </section>
    </section>
  )
}
