import { useState } from 'react'
import { Heart, MapPin, Share2 } from 'lucide-react'

const secondaryBtn =
  'box-border inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#B0B5C4] rounded-lg text-[#151827] bg-transparent font-["Plus_Jakarta_Sans"] text-[16px] font-normal cursor-pointer transition-[background-color,border-color,color,transform,box-shadow] duration-[180ms] ease-in-out hover:border-[#005cbd] hover:text-[#005cbd] hover:bg-[rgba(0,92,189,0.06)] hover:-translate-y-0.5 hover:shadow-[0_8px_14px_rgba(0,0,0,0.08)] active:translate-y-px active:border-[#005cbd] active:text-[#005cbd] focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-2'

export function ReservationHeader() {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <section
      className="w-full flex items-end justify-between gap-6 px-6 pt-6 mb-6 max-md:flex-col max-md:items-start"
      aria-label="Hotel summary"
    >
      <div className="grid content-start gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-px" aria-label="5 star resort">
            {Array.from({ length: 5 }, (_, index) => (
              <img src="/icon/BoldStar.png" alt="" aria-hidden key={index} className="w-[18px] h-[18px] block object-contain" />
            ))}
          </span>
          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-white bg-[#005cbd] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-6">
            RESORT
          </span>
        </div>
        <h1 className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-6">
          Grand Azure Resort &amp; Spa, Elounda
        </h1>
        <p className="flex items-center gap-2 m-0 text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-6">
          <MapPin aria-hidden className="w-5 h-5 text-[#005cbd] flex-shrink-0" />
          <span className="whitespace-nowrap">Elounda Bay, Crete, 72053, Greece</span>
          <a
            href="/"
            className="text-[#005cbd] font-semibold no-underline whitespace-nowrap hover:text-[#004f9f] active:text-[#004f9f]"
          >
            Show on map
          </a>
        </p>
      </div>

      <div className="flex items-center justify-end gap-4">
        <button className={secondaryBtn} type="button">
          <Share2 aria-hidden className="w-5 h-5" />
          <span>Share</span>
        </button>
        <button
          className={`${secondaryBtn} ${isSaved ? '!border-[#a5204f] !text-[#a5204f]' : ''}`}
          type="button"
          aria-pressed={isSaved}
          onClick={() => setIsSaved((current) => !current)}
        >
          <Heart aria-hidden className={`w-5 h-5 ${isSaved ? 'fill-current scale-[1.08]' : ''}`} />
          <span>Save</span>
        </button>
        <button
          className="inline-flex items-center justify-center px-8 py-3 border-0 rounded-lg text-white bg-[#a5204f] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-6 text-center cursor-pointer transition-[background-color,border-color,color,transform,box-shadow] duration-[180ms] ease-in-out hover:border hover:border-[#a5204f] hover:text-[#a5204f] hover:bg-transparent hover:-translate-y-0.5 hover:shadow-[0_10px_18px_rgba(165,32,79,0.14)] active:translate-y-px active:bg-[#8c1a42] focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-2"
          type="button"
        >
          Book Now
        </button>
      </div>
    </section>
  )
}
