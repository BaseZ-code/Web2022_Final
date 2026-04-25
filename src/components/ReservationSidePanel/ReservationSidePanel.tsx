const scoreRows = [
  { label: 'Cleanliness', value: '9.5', percent: 95 },
  { label: 'Service', value: '9.2', percent: 92 },
  { label: 'Location', value: '8.9', percent: 89 },
]

export function ReservationSidePanel() {
  return (
    <aside className="w-[378.67px] grid content-start gap-8 max-lg:w-full" aria-label="Review score and map">
      <section
        className="w-full grid content-start gap-4 p-6 border border-[rgba(176,181,196,0.3)] rounded-2xl bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.05)]"
        aria-label="Guest rating"
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <h2 className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-6">
              Excellent
            </h2>
            <p className="m-0 text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[14px] font-normal leading-5">
              1,248 verified reviews
            </p>
          </div>
          <strong className="w-14 h-14 inline-flex items-center justify-center rounded-xl text-white bg-[#005cbd] font-['Plus_Jakarta_Sans'] text-[24px] font-bold leading-8">
            9.2
          </strong>
        </div>

        <div className="grid gap-4">
          {scoreRows.map((row) => (
            <div className="grid gap-2" key={row.label}>
              <div className="flex items-center justify-between text-[#151827] font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-5">
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
              <div className="w-full h-2 overflow-hidden rounded-full bg-[rgba(176,181,196,0.3)]">
                <span className="block h-full rounded-[inherit] bg-[#005cbd]" style={{ width: `${row.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="w-full overflow-hidden border border-[rgba(176,181,196,0.3)] rounded-2xl bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.05)]"
        aria-label="Nearby map"
      >
        <img src="/Reservation/beach.png" alt="Map near Spinalonga Island" className="w-full h-[194px] block object-cover" />
        <div className="grid gap-1 p-4">
          <h2 className="m-0 text-[#151827] font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-6">
            Near Spinalonga Island
          </h2>
          <p className="m-0 text-[#5f6271] font-['Plus_Jakarta_Sans'] text-[14px] font-normal leading-5">
            15 min walk to city center
          </p>
        </div>
      </section>
    </aside>
  )
}
