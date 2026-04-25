type ResultsHeaderProps = {
  count: number
  location: string
  sortValue: string
}

export function ResultsHeader({ count, location, sortValue }: ResultsHeaderProps) {
  return (
    <div className="w-full h-10 flex items-center justify-between max-md:h-auto max-md:flex-col max-md:items-start max-md:gap-3">
      <p className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[20px] font-normal leading-7 whitespace-nowrap">
        {count} properties in {location}
      </p>

      <div className="flex items-center gap-2">
        <span className="text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[13px] font-medium leading-[16.8px] whitespace-nowrap">
          Sort by:
        </span>
        <button
          className="relative inline-flex items-center h-10 pl-3 pr-10 border-0 rounded-lg text-[#005cbd] bg-transparent font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-6 text-left cursor-pointer focus-visible:outline-3 focus-visible:outline-[rgba(0,92,189,0.22)] focus-visible:outline-offset-2"
          type="button"
        >
          <span>{sortValue}</span>
          <span
            className="absolute top-2 right-[10px] w-7 h-6 before:content-[''] before:absolute before:top-[7.2px] before:left-1 before:w-[9.6px] before:h-[9.6px] before:border-r-[1.8px] before:border-b-[1.8px] before:border-[#6b7280] before:rotate-45 before:origin-center"
            aria-hidden
          />
        </button>
      </div>
    </div>
  )
}
