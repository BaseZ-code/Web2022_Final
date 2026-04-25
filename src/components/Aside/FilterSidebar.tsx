import { ListFilter, Star } from 'lucide-react'

const filterGroups = [
  {
    title: 'Property Type',
    options: ['Hotels', 'Resorts', 'Apartments', 'Villas'],
  },
  {
    title: 'Star Rating',
    options: ['5 stars', '4 stars'],
    starOptions: true,
  },
  {
    title: 'Facilities',
    options: ['Free Wi-Fi', 'Swimming Pool', 'Fitness Center', 'Spa', 'Parking', 'Pet Friendly'],
  },
  {
    title: 'Review Score',
    options: ['Superb 9+', 'Very Good 8+', 'Good 7+'],
  },
  {
    title: 'Neighborhood',
    options: ['Patong', 'Karon', 'Kata', 'Kamala'],
  },
  {
    title: 'Bed Type',
    options: ['Single', 'Double', 'King'],
  },
]

function RatingStars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-px" aria-label={`${rating} star rating`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          aria-hidden
          className={`w-[15px] h-[15px] text-[#f4b400] stroke-2 ${index < rating ? 'fill-current' : 'fill-transparent'}`}
          key={index}
        />
      ))}
    </span>
  )
}

export function FilterSidebar() {
  return (
    <aside
      className="w-full md:w-[256px] grid content-start gap-[15px] px-4 pt-[15.5px] pb-8 border border-[#CBD2E0] rounded-xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
      aria-label="Filters"
    >
      <header className="flex items-center gap-2">
        <ListFilter className="w-[18px] h-[18px] text-[#005cbd] stroke-[2.4]" aria-hidden />
        <h2 className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[20px] font-normal leading-[1.2]">Filters</h2>
      </header>

      <section className="w-full grid gap-3">
        <h3 className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[15px] font-semibold leading-[1.25]">Price Range</h3>
        <div className="flex justify-between text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-none">
          <span>$0</span>
          <span>$10000+</span>
        </div>
        <div className="w-full h-1.5 m-0 rounded-lg bg-[#d9dce7]" aria-hidden />
      </section>

      {filterGroups.map((group) => (
        <section className="w-full grid gap-3 pt-2" key={group.title}>
          <h3 className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[15px] font-semibold leading-[1.25]">{group.title}</h3>
          <div className="grid gap-2">
            {group.options.map((option) => {
              const rating = option.startsWith('5') ? 5 : 4

              return (
                <label
                  className="min-h-[19px] grid grid-cols-[20px_minmax(0,1fr)] items-center gap-3 text-[#151827] font-['Plus_Jakarta_Sans'] text-[15px] font-normal leading-[1.25] cursor-pointer transition-[color,transform] duration-[180ms] ease-in-out hover:text-[#005cbd] group"
                  key={option}
                >
                  <input type="checkbox" className="sr-only peer" />
                  <span
                    className="relative w-5 h-5 border border-[#cbd5e1] rounded bg-white shadow-[inset_0_0_0_0_#005cbd] transition-[background,border-color,box-shadow,transform] duration-[220ms] ease-in-out group-hover:border-[#005cbd] group-hover:-translate-y-px group-hover:scale-[1.04] group-active:scale-[0.92] peer-checked:border-[#005cbd] peer-checked:bg-[#005cbd] peer-checked:shadow-[inset_0_0_0_10px_#005cbd] peer-focus-visible:outline-3 peer-focus-visible:outline-[rgba(0,92,189,0.22)] peer-focus-visible:outline-offset-2 after:content-[''] after:absolute after:top-[3px] after:left-[6px] after:w-[5px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:opacity-0 after:rotate-45 after:origin-center after:transition-[opacity,transform] after:duration-[160ms] peer-checked:after:opacity-100 peer-checked:after:scale-100"
                    aria-hidden
                  />
                  {group.starOptions ? (
                    <RatingStars rating={rating} />
                  ) : (
                    <span>{option}</span>
                  )}
                </label>
              )
            })}
          </div>
        </section>
      ))}
    </aside>
  )
}
