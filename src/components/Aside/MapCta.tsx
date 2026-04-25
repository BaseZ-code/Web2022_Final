import { Map } from 'lucide-react'

export function MapCta() {
  return (
    <section className="relative w-full md:w-[256px] h-[160px] overflow-hidden rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]" aria-label="Map preview">
      <img src="/Map CTA.png" alt="" className="w-full h-full block object-cover" />
      <button
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[148px] h-10 inline-flex items-center justify-center gap-2 px-4 py-2 border-0 rounded-full text-[#005cbd] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] font-['Plus_Jakarta_Sans'] text-[15px] font-normal leading-none whitespace-nowrap cursor-pointer focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-2"
        type="button"
      >
        <Map aria-hidden className="w-5 h-5" />
        <span>View on Map</span>
      </button>
    </section>
  )
}
