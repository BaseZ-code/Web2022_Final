import { CalendarDays, MapPin, UserRound } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { ComponentType } from 'react'

type SearchItemProps = {
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  label: string
  value: string
  wide?: boolean
}

const searchItemBase =
  'w-full min-w-0 min-h-[54px] grid grid-cols-[20px_minmax(0,1fr)] items-center gap-3 px-4 py-3 border border-[rgba(176,181,196,0.3)] rounded-[10px] text-[#151827] bg-[#f0f0f8] shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-left cursor-pointer transition-[border-color,box-shadow,transform] duration-[180ms] ease-in-out hover:border-[#005cbd] hover:shadow-[0_8px_18px_rgba(0,92,189,0.12)] hover:-translate-y-px active:scale-[0.98] focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-2'

function SearchItem({ icon: Icon, label, value, wide = false }: SearchItemProps) {
  return (
    <button className={`${searchItemBase} ${wide ? 'min-w-[420px] max-lg:min-w-0 max-lg:col-span-full' : ''}`} type="button">
      <Icon className="w-5 h-5 text-[#005cbd] stroke-[2.4]" aria-hidden />
      <span className="min-w-0 grid gap-px">
        <span className="text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-[1.1]">{label}</span>
        <span className="text-[#151827] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis">
          {value}
        </span>
      </span>
    </button>
  )
}

function formatDateRange(start: string, end: string) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  })
  const startDate = new Date(`${start}T00:00:00`)
  const endDate = new Date(`${end}T00:00:00`)

  return `${formatter.format(startDate)} - ${formatter.format(endDate)}, ${endDate.getFullYear()}`
}

export function SearchBar() {
  const searchPanelRef = useRef<HTMLElement | null>(null)
  const [checkIn, setCheckIn] = useState('2024-10-12')
  const [checkOut, setCheckOut] = useState('2024-10-19')
  const [adults, setAdults] = useState(2)
  const [rooms, setRooms] = useState(1)
  const [openPanel, setOpenPanel] = useState<'dates' | 'travelers' | null>(null)
  const datesValue = formatDateRange(checkIn, checkOut)
  const travelersValue = `${adults} Adult${adults === 1 ? '' : 's'}, ${rooms} Room${rooms === 1 ? '' : 's'}`

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!searchPanelRef.current?.contains(event.target as Node)) {
        setOpenPanel(null)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  return (
    <section
      className="w-full min-h-[90px] relative grid grid-cols-[minmax(280px,1fr)_auto_auto_auto] items-center gap-3.5 px-6 py-4 border-0 border-b border-[rgba(176,181,196,0.3)] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2.5"
      aria-label="Search details"
      ref={searchPanelRef}
    >
      <SearchItem
        icon={MapPin}
        label="Destination"
        value="Bali, Indonesia"
        wide
      />
      <div className="relative min-w-0">
        <button
          className={searchItemBase}
          type="button"
          aria-expanded={openPanel === 'dates'}
          onClick={() => setOpenPanel((panel) => (panel === 'dates' ? null : 'dates'))}
        >
          <CalendarDays className="w-5 h-5 text-[#005cbd] stroke-[2.4]" aria-hidden />
          <span className="min-w-0 grid gap-px">
            <span className="text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-[1.1]">Dates</span>
            <span className="text-[#151827] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis">
              {datesValue}
            </span>
          </span>
        </button>
        {openPanel === 'dates' ? (
          <div className="absolute top-[calc(100%+8px)] left-0 z-20 min-w-[260px] grid gap-3 p-4 border border-[rgba(176,181,196,0.3)] rounded-xl bg-white shadow-[0_16px_36px_rgba(0,0,0,0.14)]" role="dialog" aria-label="Choose travel dates">
            <label className="grid gap-1.5 text-[#151827] font-['Plus_Jakarta_Sans'] text-[13px] font-medium">
              <span>Check in</span>
              <input
                type="date"
                value={checkIn}
                onChange={(event) => setCheckIn(event.target.value)}
                className="h-[38px] px-2.5 py-2 border border-[rgba(176,181,196,0.3)] rounded-lg text-[#151827] bg-[#f0f0f8] font-['Plus_Jakarta_Sans'] text-[14px] font-medium"
              />
            </label>
            <label className="grid gap-1.5 text-[#151827] font-['Plus_Jakarta_Sans'] text-[13px] font-medium">
              <span>Check out</span>
              <input
                type="date"
                min={checkIn}
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
                className="h-[38px] px-2.5 py-2 border border-[rgba(176,181,196,0.3)] rounded-lg text-[#151827] bg-[#f0f0f8] font-['Plus_Jakarta_Sans'] text-[14px] font-medium"
              />
            </label>
          </div>
        ) : null}
      </div>
      <div className="relative min-w-0">
        <button
          className={searchItemBase}
          type="button"
          aria-expanded={openPanel === 'travelers'}
          onClick={() => setOpenPanel((panel) => (panel === 'travelers' ? null : 'travelers'))}
        >
          <UserRound className="w-5 h-5 text-[#005cbd] stroke-[2.4]" aria-hidden />
          <span className="min-w-0 grid gap-px">
            <span className="text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-[1.1]">Travelers</span>
            <span className="text-[#151827] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis">
              {travelersValue}
            </span>
          </span>
        </button>
        {openPanel === 'travelers' ? (
          <div className="absolute top-[calc(100%+8px)] left-0 z-20 min-w-[230px] grid gap-3 p-4 border border-[rgba(176,181,196,0.3)] rounded-xl bg-white shadow-[0_16px_36px_rgba(0,0,0,0.14)]" role="dialog" aria-label="Choose travelers">
            <div className="flex items-center justify-between gap-4 text-[#151827] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold">
              <span>Adults</span>
              <div className="inline-flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAdults((value) => Math.max(1, value - 1))}
                  className="w-[30px] h-[30px] inline-flex items-center justify-center border border-[rgba(176,181,196,0.3)] rounded-lg text-[#005cbd] bg-white font-['Plus_Jakarta_Sans'] text-[18px] font-semibold leading-none cursor-pointer transition-[color,background,border-color,transform] duration-[180ms] ease-in-out hover:text-white hover:border-[#005cbd] hover:bg-[#005cbd] hover:-translate-y-px active:scale-[0.94]"
                >
                  -
                </button>
                <strong className="min-w-[18px] text-[#151827] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold text-center">
                  {adults}
                </strong>
                <button
                  type="button"
                  onClick={() => setAdults((value) => value + 1)}
                  className="w-[30px] h-[30px] inline-flex items-center justify-center border border-[rgba(176,181,196,0.3)] rounded-lg text-[#005cbd] bg-white font-['Plus_Jakarta_Sans'] text-[18px] font-semibold leading-none cursor-pointer transition-[color,background,border-color,transform] duration-[180ms] ease-in-out hover:text-white hover:border-[#005cbd] hover:bg-[#005cbd] hover:-translate-y-px active:scale-[0.94]"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 text-[#151827] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold">
              <span>Rooms</span>
              <div className="inline-flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setRooms((value) => Math.max(1, value - 1))}
                  className="w-[30px] h-[30px] inline-flex items-center justify-center border border-[rgba(176,181,196,0.3)] rounded-lg text-[#005cbd] bg-white font-['Plus_Jakarta_Sans'] text-[18px] font-semibold leading-none cursor-pointer transition-[color,background,border-color,transform] duration-[180ms] ease-in-out hover:text-white hover:border-[#005cbd] hover:bg-[#005cbd] hover:-translate-y-px active:scale-[0.94]"
                >
                  -
                </button>
                <strong className="min-w-[18px] text-[#151827] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold text-center">
                  {rooms}
                </strong>
                <button
                  type="button"
                  onClick={() => setRooms((value) => value + 1)}
                  className="w-[30px] h-[30px] inline-flex items-center justify-center border border-[rgba(176,181,196,0.3)] rounded-lg text-[#005cbd] bg-white font-['Plus_Jakarta_Sans'] text-[18px] font-semibold leading-none cursor-pointer transition-[color,background,border-color,transform] duration-[180ms] ease-in-out hover:text-white hover:border-[#005cbd] hover:bg-[#005cbd] hover:-translate-y-px active:scale-[0.94]"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <button
        className="min-h-[46px] px-8 py-3 border-0 rounded-[10px] text-white bg-[#005cbd] shadow-[0_8px_16px_rgba(0,92,189,0.28)] font-['Plus_Jakarta_Sans'] text-[15px] font-normal leading-[1.2] cursor-pointer transition-[background,box-shadow,transform] duration-[180ms] ease-in-out hover:bg-[#004f9f] hover:-translate-y-px active:scale-[0.98] focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-2"
        type="button"
        onClick={() => setOpenPanel(null)}
      >
        Update Search
      </button>
    </section>
  )
}
