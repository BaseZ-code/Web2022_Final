import { ChevronLeft, ChevronRight } from 'lucide-react'

const btnBase =
  'w-10 h-10 inline-flex items-center justify-center border border-[#B0B5C4] rounded-lg text-[#151827] bg-transparent shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] font-["Plus_Jakarta_Sans"] text-[15px] font-normal leading-none cursor-pointer transition-[color,background,border-color,box-shadow,transform] duration-[180ms] ease-in-out hover:text-white hover:border-[#005cbd] hover:bg-[#005cbd] hover:shadow-[0_8px_18px_rgba(0,92,189,0.22)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.96] focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-2'

const btnActive =
  'w-10 h-10 inline-flex items-center justify-center border border-[#005cbd] rounded-lg text-white bg-[#005cbd] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] font-["Plus_Jakarta_Sans"] text-[15px] font-normal leading-none cursor-pointer transition-[color,background,border-color,box-shadow,transform] duration-[180ms] ease-in-out hover:shadow-[0_8px_18px_rgba(0,92,189,0.22)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.96] focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-2'

export function Pagination() {
  return (
    <nav className="w-full h-[88px] flex items-start justify-center gap-2 pb-12" aria-label="Hotel results pages">
      <button className={btnBase} type="button" aria-label="Previous page">
        <ChevronLeft aria-hidden className="w-[18px] h-[18px]" />
      </button>
      <button className={btnActive} type="button" aria-current="page">
        1
      </button>
      <button className={btnBase} type="button">2</button>
      <button className={btnBase} type="button">3</button>
      <span className="w-10 h-10 inline-flex items-center justify-center text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[15px] font-normal">
        ...
      </span>
      <button className={btnBase} type="button">12</button>
      <button className={btnBase} type="button" aria-label="Next page">
        <ChevronRight aria-hidden className="w-[18px] h-[18px]" />
      </button>
    </nav>
  )
}
